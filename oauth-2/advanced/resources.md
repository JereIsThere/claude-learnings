# OAuth 2.0 · Advanced Resources

Voraussetzung: Beginner + Intermediate. Du hast einen echten OAuth-Client gebaut, validierst ID Tokens manuell, und hast RFC 9700 mindestens einmal überflogen. Jetzt: Sicherheit ernst nehmen.

## 1. Security im Detail
- **[RFC 9700 — OAuth 2.0 Security BCP (2025)](https://datatracker.ietf.org/doc/html/rfc9700)** — diesmal **vollständig**, inkl. §3 (Threat Model), §4 (alle Detail-Recommendations). Mindestens 2 Stunden, gerne mit Notizen.
- **[RFC 8725 — JWT Best Current Practices](https://datatracker.ietf.org/doc/html/rfc8725)** — komplett. ~15 Seiten, jede Empfehlung wert ist ihres Geldes.
- **[RFC 6819 — OAuth 2.0 Threat Model and Security Considerations](https://datatracker.ietf.org/doc/html/rfc6819)** — der ältere, aber immer noch nützliche Threat-Katalog. RFC 9700 ergänzt, ersetzt nicht.

## 2. Erweiterungen, die fortgeschrittene Stacks brauchen
- **[RFC 9449 — DPoP](https://datatracker.ietf.org/doc/html/rfc9449)** — Demonstrating Proof-of-Possession. Sender-Constrained Tokens ohne mTLS.
- **[RFC 8705 — Mutual TLS](https://datatracker.ietf.org/doc/html/rfc8705)** — die andere Sender-Constraining-Variante. Für hochregulierte Umgebungen (Banken, FAPI).
- **[RFC 9126 — PAR](https://datatracker.ietf.org/doc/html/rfc9126)** — Pushed Authorization Requests. Statt alle Parameter im URL-Fragment zu schicken, push erst, dann nur eine Request-URI.
- **[RFC 9396 — RAR](https://datatracker.ietf.org/doc/html/rfc9396)** — Rich Authorization Requests. Strukturierte Fein-Granulare Berechtigungen jenseits flacher Scopes.
- **[RFC 8693 — Token Exchange](https://datatracker.ietf.org/doc/html/rfc8693)** — wie ein Service in einer Aufrufkette an einen passenden Token kommt.
- **[FAPI 2.0 (Financial-grade API)](https://openid.net/specs/fapi-2_0-security-profile.html)** — strenges Profil für Banken, Open Banking. Kombiniert PKCE + PAR + DPoP/mTLS + RAR.

## 3. Angriffsmuster
- **[OAuth 2.0 Threat Model — RFC 6819 §4](https://datatracker.ietf.org/doc/html/rfc6819#section-4)** — Liste der bekannten Angriffe.
- **[PortSwigger Web Security Academy — OAuth](https://portswigger.net/web-security/oauth)** — exzellent didaktische Erklärungen mit interaktiven Labs (auf deren Test-Servern, nicht in der Wildbahn!).
- **[Aaron Parecki — OAuth attacks](https://oauth.net/articles/authentication/)** — speziell der OAuth-vs-OIDC-Verwechslungsangriff.

## 4. Tooling & Audit
- **[oauth-pretender / oauthx-cli](https://github.com/curityio/oauth-tools)** und **[oidcat](https://github.com/wagoodman/oidcat)** — CLI-Tools zum Inspizieren echter Flows.
- **[Burp Suite](https://portswigger.net/burp)** — für aktives Pen-Testing.

## Lernziele für dieses Level

Nach diesem Abschnitt kannst du:
- [ ] Mindestens 5 OAuth-Angriffe namentlich nennen und ihre Mitigation beschreiben (Code-Interception, CSRF auf Redirect, alg=none, Algorithm-Confusion, Token-Replay, Issuer-Confusion, …).
- [ ] Eine Security-Code-Review eines OAuth-Clients machen — du erkennst typische Fehler in 5 Minuten.
- [ ] Erklären, wann DPoP vs mTLS vs Bearer Tokens — Trade-offs.
- [ ] Eine Architektur-Entscheidung für einen Multi-Service-Stack treffen und mit RFCs untermauern.
- [ ] Einen OIDC-Provider so konfigurieren, dass er zu RFC 9700 / OAuth 2.1 konform ist.

## Praktische Übung

Im Ordner [`examples/`](./examples/):
- `attack_alg_none.py` — zeigt, wie ein naiv gebauter Validator von einem `alg=none`-Token reingelegt wird, plus den korrekten Validator zum Vergleich.
- `attack_alg_confusion.py` — die RS256/HS256-Confusion. Demonstration in Python, **nur lokal**, mit Demo-Schlüsseln.
- `redirect_uri_audit.py` — automatisches Prüfprogramm, das eine Redirect-URI gegen RFC 9700 §2.1 validiert (exact-match, kein open redirect, keine Wildcard).
- `bcp_checklist.md` — Checkliste basierend auf RFC 9700, die du gegen einen bestehenden Client/Server abklopfen kannst.

> ⚠️ **Wichtig:** Die Angriffs-Demos sind explizit auf Demo-Daten und lokale Loops beschränkt. Niemals gegen fremde Server ausführen — das ist illegal.
