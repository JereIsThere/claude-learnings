# RFC 9700 Compliance-Checkliste

Prüfe deine bestehende OAuth-Implementation Punkt für Punkt gegen die Sicherheitsempfehlungen aus **[RFC 9700 — OAuth 2.0 Security Best Current Practice (2025)](https://datatracker.ietf.org/doc/html/rfc9700)**. Jede Zeile mit einem Spec-Pointer.

## Authorization Server / Provider-Seite

- [ ] **Exact-String-Match auf `redirect_uri`.** Keine Wildcards, kein Pfad-Prefix-Match. *§2.1*
- [ ] **HTTPS-Pflicht** für alle OAuth-URLs außer Loopback. *§2.1.1*
- [ ] **PKCE wird unterstützt** (`code_challenge_methods_supported` enthält `S256`). *§2.1.1*
- [ ] **PKCE wird für Public Clients erzwungen** (Authorization Code ohne Challenge wird abgelehnt). *§2.1.1*
- [ ] **Implicit Grant nicht angeboten** (`response_types_supported` enthält weder `token` noch `id_token token`). *§2.1.2*
- [ ] **ROPC-Grant abgeschaltet** (`grant_types_supported` enthält nicht `password`). *§2.4*
- [ ] **Authorization Codes sind kurzlebig** (≤ 1 Minute) und nur einmal einlösbar. *§2.1.1*
- [ ] **Refresh Token Rotation** — bei Refresh wird der alte Refresh Token invalidiert und ein neuer ausgegeben. *§2.2.2*
- [ ] **Refresh Token sender-constrained** (mTLS oder DPoP) für Public Clients. *§2.2.2*
- [ ] **Access Token audience-restricted** (`aud`-Claim auf den spezifischen Resource-Server). *§2.3*
- [ ] **Sender-Constraining angeboten** (mTLS / DPoP / Token-Binding). *§2.2.1*
- [ ] **Token Introspection / Revocation Endpoints vorhanden**. (Optional, aber heute Standard.)

## Client-Seite

- [ ] **`state`-Parameter** wird mit jedem Authorize-Request gesendet, gegen gespeicherten Wert geprüft. *§4.7*
- [ ] **PKCE-Verwendung** mit `code_challenge_method=S256`. *§2.1.1*
- [ ] **`code_verifier` zufällig** mit ≥ 256 Bit Entropie, sicher gespeichert (sessionStorage SPA / Server-Session Backend). *§2.1.1, RFC 7636 §4.1*
- [ ] **`redirect_uri` exact match** zur registrierten URL. *§2.1*
- [ ] **Niemals Tokens im URL-Pfad oder Query** (außer im Authorize-Response, der als Bearer-Token sofort weiterverarbeitet wird). *§4.3*
- [ ] **Access Token im `Authorization: Bearer`-Header**, nicht im Query-String oder Body. *§4.3.1, RFC 6750*
- [ ] **HTTPS-Validierung aktiv** (kein `InsecureRequestWarning` ignorieren).
- [ ] **Refresh Token in HttpOnly+Secure+SameSite=Strict-Cookie**, nicht in `localStorage`. *§4.4–§4.6*
- [ ] **Access Token in JS-Memory** (nicht in `localStorage`/`sessionStorage` bei XSS-Risiko).
- [ ] **Logout invalidiert lokale State + Refresh Token serverseitig.** *§4.5*
- [ ] **Algorithm-Whitelist beim JWT-Validieren** — niemals "decoder, der dem Header glaubt". *RFC 8725 §3.1, §3.2*

## OIDC-spezifisch (falls relevant)

- [ ] **`scope=openid`** im Authorize-Request gesetzt.
- [ ] **`nonce` wird gesetzt** (zufällig, ≥ 128 Bit Entropie) und gegen `nonce`-Claim im ID Token geprüft. *OIDC Core 1.0 §3.1.2.1, §3.1.3.7*
- [ ] **ID-Token-Validierung** — alle 5 Schritte aus *OIDC Core §3.1.3.7*: alg-Whitelist, Signing-Key vom Issuer, Signatur, Issuer/Audience/Expiry/Nonce-Claims.
- [ ] **`acr` und `amr`** werden gegen Erwartung geprüft, falls dein Use-Case bestimmte Authentication-Methoden verlangt.
- [ ] **Logout per RP-Initiated Logout** (OIDC Session Management) implementiert, falls Provider unterstützt.

## Native Apps (RFC 8252) — falls Mobile/Desktop

- [ ] **System-Browser** statt eingebettete WebView für `/authorize`. *RFC 8252 §6*
- [ ] **PKCE Pflicht.**
- [ ] **Custom-Scheme oder App-Claimed-HTTPS-URI** als Redirect.
- [ ] **Loopback-Loopback-Listener** als Redirect für CLI/Desktop akzeptiert.

## Erweiterte Profile (falls relevant)

- [ ] **DPoP (RFC 9449)** für Public Clients ohne mTLS.
- [ ] **PAR (RFC 9126)** wenn Authorization-Request-Parameter sensitiv sind.
- [ ] **Token Exchange (RFC 8693)** in Service-Ketten statt naiver Token-Forwarding.
- [ ] **FAPI 2.0** Profil komplett, falls regulierter Bereich (Banken, eHealth).

---

## Wie du diese Liste benutzt

1. Lies die Liste einmal ohne Wertung — bekommst du ein Gefühl für die Themen?
2. Geh sie mit deinem System durch, jeden Punkt ehrlich abhakend.
3. Für jeden offenen Punkt: lies die zitierte Spec-Section. Verstehe, *warum* es eine Empfehlung ist.
4. Priorisiere: zuerst die `MUST`-Punkte, dann `SHOULD`, dann `MAY`. Die genaue Sprache des BCPs steht im RFC-Text.
5. Plane Migration. Manche Punkte (z. B. Refresh-Token-Rotation) brauchen serverseitige Anpassungen — also Vendor-Issue oder eigenes Backend.

> Diese Checkliste ersetzt **keinen** echten Security-Audit durch jemanden, der OAuth in der Tiefe reviewt. Sie ist ein erstes Sieb, kein Gütesiegel.
