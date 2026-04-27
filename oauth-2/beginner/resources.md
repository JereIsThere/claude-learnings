# OAuth 2.0 · Beginner Resources

Lies in dieser Reihenfolge — jede Quelle baut auf der vorherigen auf.

## 1. Mentale Karte aufsetzen
- **[oauth.net — "What is OAuth"](https://oauth.net/2/)** — Aaron Pareckis Übersichtsseite. Lies "Roles", "Endpoints", "Tokens" — jeweils ein Absatz, schneller Einstieg.
- **[index.html](../index.html)** in diesem Repo: das Intro und Konzept 1 ("Rollen & Grant Types").

## 2. Standard zum ersten Mal anschauen
- **[RFC 6749 — OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749)** — *nur* §1 ("Introduction"), §1.1 ("Roles") und §1.3 ("Authorization Grant"). Zusammen ca. 6 Seiten. Du musst nichts auswendig können, nur die Wörter wiedererkennen.
- Das, was wir später ergänzen werden: **[RFC 9700](https://datatracker.ietf.org/doc/html/rfc9700)** ist heute die maßgebliche Sicherheits-Empfehlung. Beim ersten Mal nur den Abstract lesen.

## 3. PKCE verstehen
- **[RFC 7636 — PKCE](https://datatracker.ietf.org/doc/html/rfc7636)** — §1 (Motivation, ~1 Seite) und §4.1–§4.2 (wie `code_verifier` und `code_challenge` erzeugt werden).
- **[Aaron Parecki: "PKCE explained"](https://aaronparecki.com/oauth-2-simplified/#authorization-code-with-pkce)** — sehr klares Beispiel.

## 4. Visualisieren
- **[OAuth 2.0 Playground (Google)](https://developers.google.com/oauthplayground/)** — eine echte Web-UI, in der du einen Authorization Code Flow durchklicken kannst. Du siehst alle Requests live.

## 5. HTTP & TLS Grundlagen (falls nötig)
- **[MDN — HTTP-Grundlagen](https://developer.mozilla.org/de/docs/Web/HTTP/Overview)** — OAuth ist HTTP-basiert. Wenn du `Authorization`-Header, `application/x-www-form-urlencoded` oder Redirect-Codes (302) noch nicht entspannt liest: hier nachholen.

## Lernziele für dieses Level

Nach diesem Abschnitt kannst du:
- [ ] Die vier OAuth-Rollen (Resource Owner, Client, Auth Server, Resource Server) im konkreten Beispiel zuordnen.
- [ ] Den Unterschied zwischen Confidential und Public Clients erklären.
- [ ] Den Authorization Code Flow als Sequenz beschreiben (5 Schritte: Browser-Redirect → Login → Code-Redirect → Token-Tausch → API-Call).
- [ ] Erklären, warum PKCE existiert und welches Problem es löst.
- [ ] Selbst einen `code_verifier` und `code_challenge` in deiner Lieblingssprache erzeugen.

## Praktische Übung

Im Ordner [`examples/`](./examples/) liegt:
- `pkce_generator.py` — kleiner Stand-Alone-Generator. Erzeugt valide PKCE-Paare und prüft sie.
- `flow_walkthrough.md` — ein detaillierter Schritt-für-Schritt-Walkthrough des Authorization Code + PKCE Flows mit echten Beispiel-URLs und -Responses, ohne dass du irgendwo einen Account anlegen musst.

```bash
python examples/pkce_generator.py
# Gibt verifier + challenge aus, plus die Verifikation, dass SHA256+Base64URL korrekt war.
```

## Was du in diesem Level NICHT brauchst
- Eigenen Auth-Server aufsetzen (kommt später).
- JWT selber decoden (Konzept 4, intermediate/advanced).
- OIDC im Detail (intermediate).
