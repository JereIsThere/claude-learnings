"""PKCE (Proof Key for Code Exchange) Generator und Validator.

Implementiert RFC 7636 §4.1 und §4.2:
- code_verifier: 43–128 Zeichen aus dem Base64URL-Alphabet (A-Z, a-z, 0-9, -, _, ~)
- code_challenge = BASE64URL-NO-PADDING(SHA256(ASCII(code_verifier)))

Start:
    python pkce_generator.py
"""
import base64
import hashlib
import re
import secrets


# RFC 7636 §4.1 erlaubt diese Zeichen:
ALLOWED_VERIFIER_CHARS = re.compile(r"^[A-Za-z0-9_\-~.]{43,128}$")


def generate_pkce_pair() -> tuple[str, str]:
    """Erzeugt ein (code_verifier, code_challenge)-Paar.

    secrets.token_urlsafe(64) liefert 86 Zeichen (64 Bytes -> Base64URL).
    Wir kürzen auf 128 max — hier 86, das ist gut innerhalb [43, 128].
    """
    verifier = secrets.token_urlsafe(64)  # ~86 Zeichen, alles im Allowed-Alphabet
    challenge = base64.urlsafe_b64encode(
        hashlib.sha256(verifier.encode("ascii")).digest()
    ).decode("ascii").rstrip("=")
    return verifier, challenge


def validate_verifier(verifier: str) -> bool:
    """Prüft, ob ein code_verifier RFC-7636-konform ist."""
    return bool(ALLOWED_VERIFIER_CHARS.fullmatch(verifier))


def derive_challenge(verifier: str) -> str:
    """Leitet die Challenge aus einem gegebenen Verifier ab.

    Praktisch um zu prüfen, ob ein vom Auth-Server zurückgegebener Auth-Code
    wirklich zu deinem Verifier gehört (das macht der Server, aber zur Demo)."""
    return base64.urlsafe_b64encode(
        hashlib.sha256(verifier.encode("ascii")).digest()
    ).decode("ascii").rstrip("=")


if __name__ == "__main__":
    verifier, challenge = generate_pkce_pair()

    print("=== PKCE Pair ===")
    print(f"code_verifier  ({len(verifier)} chars): {verifier}")
    print(f"code_challenge ({len(challenge)} chars): {challenge}")
    print(f"code_challenge_method: S256")
    print()

    # Sanity Checks
    assert validate_verifier(verifier), "verifier verstößt gegen das erlaubte Alphabet"
    assert len(challenge) == 43, "challenge sollte 43 Zeichen lang sein (256 Bit / 6 Bit)"
    assert derive_challenge(verifier) == challenge, "Challenge nicht reproduzierbar"

    print("✓ verifier ist im erlaubten Alphabet (RFC 7636 §4.1)")
    print("✓ challenge ist 43 Zeichen lang (SHA256 → 256 Bit → 43 Base64URL-Zeichen ohne Padding)")
    print("✓ challenge ist reproduzierbar aus dem verifier")
    print()
    print("Im echten Flow:")
    print("  1. /authorize?...&code_challenge=" + challenge + "&code_challenge_method=S256")
    print("  2. /token mit grant_type=authorization_code&...&code_verifier=" + verifier[:20] + "...")
    print("  3. Auth-Server prüft: SHA256(code_verifier) == code_challenge → Token oder Fehler.")
