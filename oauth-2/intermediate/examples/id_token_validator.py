"""ID Token Validator — die 5 Schritte aus OIDC Core 1.0 §3.1.3.7,
explizit auseinandergeklappt damit man sieht, was wirklich passiert.

In Produktion: nimm eine Library (python-jose, PyJWT, Authlib) und
konfiguriere sie streng. Diese Datei ist didaktisch.

Start:
    pip install python-jose[cryptography] requests
    python id_token_validator.py
"""
import time
import json
import requests
from jose import jwt as jose_jwt
from jose import jwk
from jose.utils import base64url_decode


# ----------------------------------------------------------------------
# KONFIGURATION — diese Werte sind STATISCH und nicht aus dem Token!
# Niemals den Issuer dem Token glauben — sonst hängt sich der Angreifer ein.
# ----------------------------------------------------------------------
EXPECTED_ISSUER = "https://accounts.google.com"
EXPECTED_AUDIENCE = "deine-client-id.apps.googleusercontent.com"
ALLOWED_ALGS = {"RS256", "ES256"}   # Whitelist!
LEEWAY_SECONDS = 60                  # für Clock-Skew


def fetch_jwks(issuer: str) -> dict:
    """Holt die JWKs vom Issuer per Discovery. Statischer Issuer, kein Token-Lookup."""
    discovery = requests.get(issuer.rstrip("/") + "/.well-known/openid-configuration").json()
    jwks_uri = discovery["jwks_uri"]
    return requests.get(jwks_uri).json()


def find_key_by_kid(jwks: dict, kid: str) -> dict | None:
    for key in jwks.get("keys", []):
        if key.get("kid") == kid:
            return key
    return None


def validate_id_token(id_token: str) -> dict:
    """Führt die 5 Schritte explizit aus und gibt den validierten Payload zurück.

    Wirft AssertionError oder ValueError bei jedem Fehler — keine schweigsamen Defaults.
    """
    print("=" * 60)
    print("ID Token Validation — Step by Step")
    print("=" * 60)

    # SCHRITT 1: Token in Teile splitten (ohne zu verifizieren)
    print("\n[1] Token in Header.Payload.Signature splitten")
    header = jose_jwt.get_unverified_header(id_token)
    print(f"    Header: {header}")

    # SCHRITT 2: Algorithm gegen Whitelist prüfen
    print("\n[2] Algorithm gegen Whitelist prüfen")
    alg = header.get("alg")
    assert alg in ALLOWED_ALGS, f"Algorithm '{alg}' nicht in Whitelist {ALLOWED_ALGS}"
    print(f"    ✓ alg='{alg}' ist erlaubt")

    # SCHRITT 3: Signing Key holen — vom KONFIGURIERTEN Issuer, nicht aus dem Token
    print(f"\n[3] Signing Key vom konfigurierten Issuer holen: {EXPECTED_ISSUER}")
    jwks = fetch_jwks(EXPECTED_ISSUER)
    kid = header.get("kid")
    key_dict = find_key_by_kid(jwks, kid)
    assert key_dict is not None, f"Kein Schlüssel mit kid='{kid}' gefunden"
    print(f"    ✓ Schlüssel mit kid='{kid}' gefunden")

    # SCHRITT 4: Signatur prüfen mit dem RICHTIGEN Algorithmus
    print("\n[4] Signatur verifizieren")
    public_key = jwk.construct(key_dict, algorithm=alg)
    message, encoded_sig = id_token.rsplit(".", 1)
    decoded_sig = base64url_decode(encoded_sig.encode())
    assert public_key.verify(message.encode(), decoded_sig), "Signatur ungültig"
    print("    ✓ Signatur stimmt mit dem öffentlichen Schlüssel überein")

    # SCHRITT 5: Claims prüfen — JETZT erst trauen wir dem Payload
    print("\n[5] Claims prüfen")
    payload = jose_jwt.get_unverified_claims(id_token)

    # iss
    assert payload.get("iss") == EXPECTED_ISSUER, \
        f"Issuer mismatch: erwartet {EXPECTED_ISSUER!r}, bekommen {payload.get('iss')!r}"
    print(f"    ✓ iss == {EXPECTED_ISSUER}")

    # aud (kann String oder Liste sein)
    aud = payload.get("aud")
    if isinstance(aud, list):
        assert EXPECTED_AUDIENCE in aud, f"Audience {EXPECTED_AUDIENCE} nicht in aud-Liste"
    else:
        assert aud == EXPECTED_AUDIENCE, f"Audience mismatch: {aud!r}"
    print(f"    ✓ aud enthält {EXPECTED_AUDIENCE}")

    # exp
    now = int(time.time())
    exp = int(payload.get("exp", 0))
    assert exp > now - LEEWAY_SECONDS, f"Token abgelaufen ({exp} <= {now})"
    print(f"    ✓ exp={exp} liegt {exp - now}s in der Zukunft")

    # iat (sanity check)
    iat = int(payload.get("iat", 0))
    assert iat <= now + LEEWAY_SECONDS, f"iat={iat} liegt zu weit in der Zukunft"
    print(f"    ✓ iat={iat} ist plausibel")

    # nonce — falls dein Flow ein nonce gesetzt hat, MUSS es matchen
    # (hier nur Hinweis, weil wir kein nonce gesetzt haben)
    if "nonce" in payload:
        print(f"    ℹ payload enthält nonce='{payload['nonce']}' — gegen gespeichertes prüfen!")

    print("\n" + "=" * 60)
    print("✅ Token gültig.")
    print("=" * 60)
    return payload


if __name__ == "__main__":
    print(__doc__)
    print("Diese Datei zeigt nur die Logik — sie braucht einen echten ID Token.")
    print("Beispiel-Aufruf in deinem Code:")
    print("    payload = validate_id_token(id_token_string_from_provider)")
    print("    print(payload['sub'], payload.get('email'))")
