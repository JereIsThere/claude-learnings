# OAuth 2.0 🌙

> Vom Träumer eingerichteter Lernpfad. Die ganze verträumte Reise lebt visuell in **[index.html](./index.html)** — diese README ist der textuelle Index plus Quick Reference.

OAuth ist *Autorisierung* (was darf eine App im Namen des Users tun?), nicht Authentication (wer ist der User?). Letzteres macht **OpenID Connect (OIDC)**, das oben drauf sitzt. Diese Verwechslung ist der Ursprung der meisten OAuth-Bugs der letzten 15 Jahre — die räumen wir hier auf.

## Die 4 verbundenen Konzepte

| # | Konzept | Worum es geht |
|---|---------|---------------|
| 1 | **Rollen & Grant Types** | Resource Owner, Client (confidential vs public), Authorization Server, Resource Server. Welcher Grant wann passt — und welche tot sind (Implicit, ROPC). |
| 2 | **Authorization Code + PKCE** | Der moderne Default-Flow. Wie der Auth-Code zum Access Token wird. Warum PKCE per RFC 9700 für Public Clients Pflicht ist. `state` gegen CSRF, PKCE gegen Code-Diebstahl. |
| 3 | **OpenID Connect (OIDC)** | Authentication-Layer auf OAuth. ID Token vs Access Token. Pflicht-Claims (`iss`, `sub`, `aud`, `exp`, `iat`). UserInfo-Endpoint. Discovery-Doc. |
| 4 | **JWTs & Validierung** | Header.Payload.Signature. Validierungs-Reihenfolge. Die drei klassischen Fallen: `alg=none`, RS256/HS256-Confusion, Issuer-Key-Mismatch. Token-Storage im Browser. |

## Standards-Landkarte

OAuth ist eine ganze Bibliothek von RFCs/Specs. Die wichtigsten:

| Schicht | Dokument | Was drin steht |
|---------|----------|----------------|
| **Foundation** | [RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) | OAuth 2.0 Authorization Framework — der Kern. |
| **Foundation** | [RFC 6750](https://datatracker.ietf.org/doc/html/rfc6750) | Bearer Token Usage. |
| **Extension** | [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636) | PKCE — Proof Key for Code Exchange. |
| **Extension** | [RFC 8252](https://datatracker.ietf.org/doc/html/rfc8252) | OAuth for Native Apps. |
| **Extension** | [RFC 9068](https://datatracker.ietf.org/doc/html/rfc9068) | JWT Profile for OAuth Access Tokens. |
| **Identity Layer** | [OIDC Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) | OpenID Connect. |
| **Token-Format** | [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) / [7515](https://datatracker.ietf.org/doc/html/rfc7515) / [7517](https://datatracker.ietf.org/doc/html/rfc7517) | JWT, JWS, JWK. |
| **Best Current Practice** | **[RFC 9700](https://datatracker.ietf.org/doc/html/rfc9700)** (2025) | OAuth Security BCP — wenn du nur eine Spec liest, dann diese. |
| **Best Current Practice** | [RFC 8725](https://datatracker.ietf.org/doc/html/rfc8725) | JWT BCP. |
| **Im Kommen** | [OAuth 2.1 Draft](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1) | Konsolidierung: PKCE pflicht, Implicit/ROPC raus. |

**Lese-Reihenfolge für Eilige:** RFC 6749 §1–§4.1 → RFC 7636 → **RFC 9700** → OIDC Core 1.0 §2–§3 → RFC 8725. Ca. 3,5 Stunden — und du kennst OAuth besser als 95 % der Entwickler.

## Lernpfad

### Beginner — [`beginner/`](./beginner/)
- Lies in `index.html` Intro + Konzepte 1 und 2.
- Übungen 1 (Rollen-Quiz) und 2 (PKCE selbst rechnen).
- Folge dem `examples/`-Walkthrough: Authorization Code + PKCE Flow gegen einen lokalen Mock-Server.

### Intermediate — [`intermediate/`](./intermediate/)
- Konzept 3 (OIDC) in `index.html`.
- Übungen 3, 4, 5.
- `examples/`: ein vollständiger Flask-Client gegen GitHub OAuth, plus ID-Token-Validierung mit `python-jose`.

### Advanced — [`advanced/`](./advanced/)
- Konzept 4 (JWT-Fallen) in `index.html` + die "Lies-die-Standards"-Sektion.
- Übungen 6 und 7.
- `examples/`: alg=none-Demolierung, Algorithm-Confusion-Demo, redirect_uri-Tricks.

## Quick Reference

**Vier Rollen:** Resource Owner, Client, Authorization Server, Resource Server.

**Endpoints (am Auth-Server):**
```
/authorize    Browser-Redirect, User loggt sich ein, Code wird ausgegeben
/token        Backend-Call, Code wird gegen Access Token getauscht
/userinfo     OIDC: Access Token einlösen, User-Profil holen
/.well-known/openid-configuration   Discovery-Doc mit allen URLs
/.well-known/jwks.json              Public-Keys zur Signatur-Verifikation
```

**PKCE in 3 Zeilen Python:**
```python
verifier = secrets.token_urlsafe(64)
challenge = base64.urlsafe_b64encode(
    hashlib.sha256(verifier.encode()).digest()
).decode().rstrip('=')
```

**ID-Token-Validierung — die 5 Schritte:**
1. Header parsen → `alg` gegen Whitelist prüfen.
2. Signing Key holen (vom konfigurierten Issuer, nicht aus dem Token!).
3. Signatur verifizieren mit dem korrekten Algorithmus.
4. Claims prüfen: `iss` matched, `aud` enthält dich, `exp` in der Zukunft, `nonce` matched (wenn gesetzt).
5. Erst dann Payload vertrauen.

**Was du heute nicht mehr nutzt:** Implicit Grant (`response_type=token`), Resource Owner Password Credentials Grant (ROPC). Beide tot per RFC 9700 / OAuth 2.1.

**Was nicht im Token steht:** das Passwort des Users. Das war der ganze Punkt von OAuth.

## Quellen (alle Fakten verifiziert)
Alle in der Standards-Landkarte oben verlinkt — plus:
- [oauth.net](https://oauth.net) — Aaron Pareckis kuratierter Hub.
- [openid.net/developers](https://openid.net/developers/how-connect-works/) — OIDC-Einführung.

## Übung fehlt? Fehler entdeckt?
[GitHub Issue öffnen](https://github.com/JereIsThere/claude-learnings/issues/new?title=%5BOAuth%5D+&labels=oauth-2) — der Träumer baut weiter.

— Der Träumer 🌙
