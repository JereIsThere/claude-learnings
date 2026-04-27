"""OIDC Discovery Explorer.

Lädt die /.well-known/openid-configuration eines Providers und gibt die
wichtigsten Felder formatiert aus. Quelle: OpenID Connect Discovery 1.0.

Beispiele:
    python discovery_explorer.py https://accounts.google.com
    python discovery_explorer.py https://login.microsoftonline.com/common/v2.0
    python discovery_explorer.py https://auth.example.com/realms/myrealm
"""
import sys
import json
from urllib.request import urlopen


def fetch_discovery(issuer: str) -> dict:
    """Lädt die Discovery-Doc.

    Per OIDC Discovery: an den Issuer wird /.well-known/openid-configuration
    angehängt. Der Issuer in der Doc selbst MUSS exakt mit dem matchen,
    den wir hier reingeben (Sicherheitsbedingung).
    """
    url = issuer.rstrip("/") + "/.well-known/openid-configuration"
    print(f"GET {url}\n")
    with urlopen(url, timeout=10) as r:
        return json.loads(r.read())


def explore(doc: dict) -> None:
    print("=" * 60)
    print("OIDC Discovery Document")
    print("=" * 60)

    # Pflichtfelder per OIDC Discovery 1.0 §3
    required = [
        "issuer",
        "authorization_endpoint",
        "token_endpoint",
        "jwks_uri",
        "response_types_supported",
        "subject_types_supported",
        "id_token_signing_alg_values_supported",
    ]

    print("\n— Pflichtfelder —")
    for k in required:
        v = doc.get(k, "<<<FEHLT>>>")
        if isinstance(v, list):
            v = ", ".join(v)
        print(f"  {k:42} {v}")

    # Wichtige optionale Felder
    optional = [
        "userinfo_endpoint",
        "registration_endpoint",
        "scopes_supported",
        "claims_supported",
        "code_challenge_methods_supported",
        "grant_types_supported",
        "revocation_endpoint",
        "introspection_endpoint",
    ]

    print("\n— Optionale Felder, oft praktisch —")
    for k in optional:
        v = doc.get(k)
        if v is None:
            print(f"  {k:42} (nicht angegeben)")
        else:
            if isinstance(v, list):
                v = ", ".join(v)
            print(f"  {k:42} {v}")

    # Audit-Hinweise
    print("\n— Audit-Hinweise —")
    response_types = doc.get("response_types_supported", [])
    if "token" in response_types or "id_token token" in response_types:
        print("  ⚠️  Provider unterstützt Implicit Flow (response_type enthält 'token').")
        print("     Per RFC 9700 §2.1.2 SHOULD NOT verwenden. Nutze 'code' (Authorization Code).")

    grant_types = doc.get("grant_types_supported", [])
    if "password" in grant_types:
        print("  ⚠️  Provider unterstützt Resource Owner Password Credentials.")
        print("     Per RFC 9700 §2.4 MUST NOT verwenden.")

    pkce_methods = doc.get("code_challenge_methods_supported", [])
    if "S256" in pkce_methods:
        print("  ✓  Provider unterstützt PKCE mit S256 (gut).")
    elif pkce_methods:
        print(f"  ⚠️  PKCE-Methoden: {pkce_methods} — fehlt S256? Heute Standard.")
    else:
        print("  ⚠️  Discovery erwähnt keine PKCE-Methoden. Provider ist veraltet oder nicht konform.")

    algs = doc.get("id_token_signing_alg_values_supported", [])
    if "none" in algs:
        print("  ⚠️  Provider listet 'none' als Signing-Alg. Dein Validator MUST das niemals akzeptieren.")
    if "HS256" in algs and any(a.startswith("RS") for a in algs):
        print("  ⚠️  Sowohl HS256 als auch RS256 unterstützt — achte auf Algorithm-Confusion.")

    print()


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(1)
    doc = fetch_discovery(sys.argv[1])
    explore(doc)
