"""redirect_uri Auditor.

Prüft eine Liste von registrierten redirect_uri-Werten gegen die
Empfehlungen von RFC 9700 §2.1 (Protecting Redirect-Based Flows).

Konkrete Checks:
  - exact string match wird vorausgesetzt → keine Wildcards, keine
    Pfad-Prefix-Tricks
  - HTTPS-Pflicht außer für loopback (127.0.0.1, [::1]) und localhost
  - keine offenen Redirector-Endpoints (URLs, die ihrerseits Redirects
    nach beliebigen Hosts machen) — wir können das hier nicht im
    Live-Test feststellen, aber wir prüfen heuristisch auf
    'redirect=', 'next=', 'return_to=' Query-Parameter
  - kein Fragment im redirect_uri (RFC 6749 §3.1.2)

Start:
    python redirect_uri_audit.py
"""
from urllib.parse import urlparse, parse_qs


def audit(uri: str) -> list[str]:
    """Gibt eine Liste gefundener Probleme zurück (leer = ok)."""
    issues = []
    parsed = urlparse(uri)

    # 1. Schema
    if parsed.scheme not in {"https", "http"}:
        # Custom-Schema (com.example.app://...) ist für Native Apps
        # erlaubt (RFC 8252), für Web-Clients nicht.
        if "." not in parsed.scheme:
            issues.append(
                f"scheme '{parsed.scheme}' — vermutlich Native-App. "
                "Stelle sicher, dass dieser Client als public/native registriert ist."
            )
    elif parsed.scheme == "http":
        # http nur für loopback erlaubt
        host = parsed.hostname or ""
        if host not in {"127.0.0.1", "localhost", "::1"}:
            issues.append(
                f"http:// ist nur für loopback erlaubt (RFC 9700 §2.1.1). "
                f"Host war {host!r}."
            )

    # 2. Fragment
    if parsed.fragment:
        issues.append(
            "URI enthält ein Fragment (#…). RFC 6749 §3.1.2 verbietet "
            "Fragmente in Redirect-URIs."
        )

    # 3. Heuristik: Open-Redirector-Verdacht
    suspect_params = {"redirect", "redirect_uri", "next", "return_to", "url", "goto"}
    qs = parse_qs(parsed.query)
    overlap = suspect_params.intersection(qs.keys())
    if overlap:
        issues.append(
            f"URI hat Query-Parameter, die typisch für Open-Redirectors sind: {overlap}. "
            "Stelle sicher, dass diese Parameter nicht zu beliebigen Hosts weiterleiten."
        )

    # 4. Wildcard-Erkennung (würde gegen exact-match-Regel verstoßen
    # — aber das ist die Job des Auth-Servers; wir warnen falls jemand
    # Wildcards in der Registration eingetragen hat)
    if "*" in uri:
        issues.append(
            "URI enthält '*'. Wildcards sind in Redirect-URIs nicht erlaubt; "
            "RFC 9700 §2.1 fordert exact-string match."
        )

    # 5. Path-traversal-Verdacht
    if "/.." in parsed.path or "/./" in parsed.path:
        issues.append("URI enthält Path-Traversal-Komponenten ('..').")

    return issues


CASES = [
    "https://app.example.com/callback",                        # ok
    "http://localhost:5000/callback",                          # ok (loopback)
    "http://app.example.com/callback",                         # 🚨 http auf öffentlichem Host
    "https://app.example.com/callback#extra",                  # 🚨 Fragment
    "https://app.example.com/oauth?redirect=evil.com",         # 🚨 Open-Redirector-Verdacht
    "https://app.*.example.com/callback",                      # 🚨 Wildcard
    "com.example.fototagger://oauth/callback",                 # ok (Native, RFC 8252)
    "https://app.example.com/auth/../etc/passwd",              # 🚨 Path-Traversal
]


if __name__ == "__main__":
    print(f"{'redirect_uri':60} status")
    print("-" * 80)
    for uri in CASES:
        problems = audit(uri)
        status = "✓ ok" if not problems else "✗ Probleme"
        print(f"{uri:60} {status}")
        for p in problems:
            print(f"    - {p}")
        print()
