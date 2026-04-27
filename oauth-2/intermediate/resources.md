# OAuth 2.0 · Intermediate Resources

Voraussetzung: Beginner-Resources durch. Du kannst den Authorization Code + PKCE Flow auf dem Papier durchspielen und ein PKCE-Paar selbst erzeugen. Jetzt geht's um **echte Implementation** und **OIDC**.

## 1. OIDC verstehen
- **[OIDC Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)** — §1 (Introduction), §2 (ID Token), §3.1 (Authentication using the Authorization Code Flow), §5.1 (Standard Claims), §5.3 (UserInfo Endpoint). Etwa 1,5 Stunden.
- **[OIDC Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html)** — wie Clients den Provider entdecken (`/.well-known/openid-configuration`).
- **[index.html](../index.html)**: Konzept 3 (OIDC).

## 2. RFC 9700 ernst nehmen
- **[RFC 9700 — OAuth 2.0 Security Best Current Practice (2025)](https://datatracker.ietf.org/doc/html/rfc9700)** — §2 ("Best Practices") komplett. Das sind ca. 30 Seiten dichten Texts und absolut die Mühe wert. Wenn dir das Lesen schwerfällt: Pause nach jedem Unterabschnitt, eigene Worte aufschreiben, was die Empfehlung ist.

## 3. Token-Format
- **[RFC 7519 — JWT](https://datatracker.ietf.org/doc/html/rfc7519)** — §3 (Format), §4 (Claims), §7 (Validation).
- **[RFC 9068 — JWT Profile for OAuth Access Tokens](https://datatracker.ietf.org/doc/html/rfc9068)** — was im Access Token stehen sollte, wenn er ein JWT ist.

## 4. Library-Doku
- **[Authlib (Python)](https://docs.authlib.org/en/latest/client/oauth2.html)** — saubere Lib für OAuth-Clients, Server, JWT.
- **[python-jose](https://python-jose.readthedocs.io/)** oder **[PyJWT](https://pyjwt.readthedocs.io/)** — JWT-Bibliotheken. Achte auf die Algorithm-Whitelist!

## 5. Tools
- **[jwt.io](https://jwt.io)** — JWT decoder/inspector im Browser. Vorsicht: kein Token mit echtem Inhalt da reinpasten, der per HTTPS verschickt wird — das Tool macht clientseitig, aber dein Token ist eben in deiner Zwischenablage.
- **[oauth.tools](https://oauth.tools/)** (Curity) — OAuth-Flow-Visualizer. Sehr lehrreich.

## Lernziele für dieses Level

Nach diesem Abschnitt kannst du:
- [ ] Einen vollständigen OIDC-Login mit einer Library (Authlib o. ä.) gegen einen echten Provider implementieren.
- [ ] Den Unterschied zwischen ID Token und Access Token aus dem Stand erklären — inklusive `aud`-Semantik.
- [ ] Eine OIDC Discovery-Doc parsen und die wichtigsten Felder benennen (`authorization_endpoint`, `token_endpoint`, `userinfo_endpoint`, `jwks_uri`, `id_token_signing_alg_values_supported`).
- [ ] Einen ID Token korrekt validieren: Algorithm-Whitelist, Issuer, Audience, Expiry, Signatur.
- [ ] Den Refresh-Token-Flow erklären und einsetzen.

## Praktische Übung

Im Ordner [`examples/`](./examples/) findest du:
- `github_oidc_client.py` — ein vollständiger Flask-Client mit Authlib gegen **GitHub OAuth** (kein vollständiges OIDC-Provider, aber didaktisch nah genug). Inklusive State, PKCE, sicherer Session-Speicherung.
- `id_token_validator.py` — ein Stand-Alone-Validator für ID Tokens, der jeden der 5 Validierungs-Schritte aus OIDC Core §3.1.3.7 ausführt und kommentiert.
- `discovery_explorer.py` — lädt eine `/.well-known/openid-configuration` und gibt die wichtigsten Felder formatiert aus.

Für `github_oidc_client.py`:

```bash
# Erst eine OAuth-App auf GitHub erstellen (kostenlos):
# https://github.com/settings/developers → "New OAuth App"
#   Homepage URL:            http://localhost:5000
#   Authorization callback:  http://localhost:5000/callback
# Dann Client ID + Secret in Umgebungsvariablen:

export GITHUB_CLIENT_ID=...
export GITHUB_CLIENT_SECRET=...
pip install Flask Authlib requests
python github_oidc_client.py
# http://localhost:5000 öffnen
```

Für `id_token_validator.py` und `discovery_explorer.py`: einfach `pip install python-jose[cryptography] requests` und ausführen.
