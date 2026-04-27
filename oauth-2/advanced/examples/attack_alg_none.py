"""Demo: alg=none Angriff auf JWT-Validatoren.

Wir bauen ein gefälschtes Token mit "alg":"none" und zeigen:
  (a) wie ein NAIVER Validator es akzeptiert
  (b) wie ein KORREKTER Validator es ablehnt

Hintergrund: RFC 8725 §3.1. "none" ist nur erlaubt, wenn der Token
auf andere Weise kryptografisch geschützt ist. In der Praxis: niemals
in deiner App akzeptieren — explizite Algorithm-Whitelist.

Start:
    python attack_alg_none.py
"""
import base64
import json


def b64url(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).decode().rstrip("=")


def b64url_decode(s: str) -> bytes:
    return base64.urlsafe_b64decode(s + "=" * (-len(s) % 4))


# ---- Schritt 1: Angreifer baut einen Fake-Token ---------------------

evil_header = {"alg": "none", "typ": "JWT"}
evil_payload = {
    "sub": "alice",
    "iss": "https://accounts.example.com",
    "aud": "fototagger-client",
    "exp": 9999999999,            # weit in der Zukunft
    "admin": True,                # 🚨 Privilegien-Eskalation
}

evil_token = (
    b64url(json.dumps(evil_header).encode())
    + "."
    + b64url(json.dumps(evil_payload).encode())
    + "."  # Signatur leer
)


# ---- Schritt 2: NAIVER Validator (so darf es NICHT aussehen) --------

def naive_validate(token: str) -> dict:
    """Akzeptiert blind, was im Token steht. Klassischer Bug."""
    h_b64, p_b64, sig = token.split(".")
    header = json.loads(b64url_decode(h_b64))
    payload = json.loads(b64url_decode(p_b64))

    if header["alg"] == "none":
        # ⚠️ falsch: keine Signaturprüfung wenn alg=none
        return payload
    # ... sonst hier Signatur prüfen ...
    raise NotImplementedError("hier müsste die richtige Verifizierung stehen")


# ---- Schritt 3: KORREKTER Validator ---------------------------------

ALLOWED_ALGS = {"RS256", "ES256"}   # explizite Whitelist


def correct_validate(token: str) -> dict:
    """Algorithmus-Whitelist VOR allem anderen. RFC 8725 §3.1 + §3.2."""
    h_b64, p_b64, sig = token.split(".")
    header = json.loads(b64url_decode(h_b64))

    alg = header.get("alg")
    if alg not in ALLOWED_ALGS:
        raise ValueError(
            f"Algorithm {alg!r} nicht in Whitelist {ALLOWED_ALGS}. "
            "Token abgelehnt — auch wenn die Signatur leer wäre."
        )

    # … hier würde die echte Signatur-Verifikation folgen, die wir
    # in id_token_validator.py (intermediate) gezeigt haben …
    raise NotImplementedError("hier wäre Signatur-Check; für die Demo nicht nötig")


# ---- Schritt 4: Vergleich -------------------------------------------

if __name__ == "__main__":
    print("Fake-Token (alg=none, admin=True):")
    print(f"  {evil_token}\n")

    print("--- naive_validate ---")
    try:
        result = naive_validate(evil_token)
        print(f"  AKZEPTIERT 🚨 Payload: {result}")
        print("  → Angreifer ist jetzt 'admin'.")
    except Exception as e:
        print(f"  Abgelehnt: {e}")

    print("\n--- correct_validate ---")
    try:
        result = correct_validate(evil_token)
        print(f"  AKZEPTIERT (sollte nicht passieren!)")
    except ValueError as e:
        print(f"  Abgelehnt ✓: {e}")

    print("\nLehre: Algorithm-Whitelist ist die ERSTE Verteidigung,")
    print("       lange vor Signatur-Verifikation.")
