# Authorization Code + PKCE — Schritt-für-Schritt-Walkthrough

Dieser Walkthrough zeigt einen vollständigen Authorization Code + PKCE Flow mit realistischen Beispiel-Werten. Du musst keinen Account irgendwo anlegen — wir simulieren auf dem Papier, damit du jeden Schritt im Detail verstehst.

> **Annahmen:** Wir bauen eine SPA "FotoTagger", die Google-Photos lesen darf. SPA = Public Client.
> - `client_id` = `1234.apps.googleusercontent.com`
> - `redirect_uri` = `https://fototagger.example/callback`
> - `scope` = `https://www.googleapis.com/auth/photoslibrary.readonly`

---

## Schritt 0 — In der App: PKCE-Paar erzeugen

Beim Klick auf "Mit Google verbinden":

```python
verifier  = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"   # 43+ Zeichen
challenge = "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM"   # SHA256 + Base64URL-NoPad
```

Den `verifier` speichert die App temporär (z. B. in `sessionStorage`). Den `challenge` schickt sie gleich an Google.

Außerdem: ein `state`-Wert gegen CSRF, ebenfalls zufällig:
```
state = "xyzABC123"
```

---

## Schritt 1 — Browser-Redirect zum `/authorize`-Endpoint

Die App führt einen Redirect aus:

```http
HTTP/1.1 302 Found
Location: https://accounts.google.com/o/oauth2/v2/auth
  ?response_type=code
  &client_id=1234.apps.googleusercontent.com
  &redirect_uri=https%3A%2F%2Ffototagger.example%2Fcallback
  &scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fphotoslibrary.readonly
  &state=xyzABC123
  &code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM
  &code_challenge_method=S256
```

(Alles in einer URL, Newlines hier nur zur Lesbarkeit.)

Der Nutzer landet auf Googles Login-Seite, loggt sich ein, sieht den Consent-Bildschirm ("FotoTagger möchte deine Fotos lesen — Zustimmen?"), und klickt zustimmend.

---

## Schritt 2 — Google redirected zurück zur App, mit Code

```http
HTTP/1.1 302 Found
Location: https://fototagger.example/callback
  ?code=4/0AeaYSHA-cMvQzj...           ← der Authorization Code
  &state=xyzABC123                      ← muss matchen mit gespeichertem state
  &scope=https%3A%2F%2F...photoslibrary.readonly
```

**Was die App jetzt prüft, BEVOR sie weitermacht:**
1. Ist der `state` derselbe, den sie in Schritt 1 erzeugt hat? Wenn nein → Abbruch (CSRF-Verdacht).
2. Existiert ein `error`-Parameter statt `code`? Wenn ja → User hat abgelehnt oder es gab ein Problem.

---

## Schritt 3 — App tauscht Code gegen Token (Backend-zu-Backend)

Die App schickt einen `POST` an den `/token`-Endpoint:

```http
POST /token HTTP/1.1
Host: oauth2.googleapis.com
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code
&code=4/0AeaYSHA-cMvQzj...
&redirect_uri=https%3A%2F%2Ffototagger.example%2Fcallback
&client_id=1234.apps.googleusercontent.com
&code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk
```

> **Was Google jetzt serverseitig prüft:** Stimmt `client_id` mit dem Auth-Code überein? Ist der Code noch nicht eingelöst? Ist das `redirect_uri` exakt das aus Schritt 1? **Und vor allem:** ist `BASE64URL(SHA256(code_verifier)) == code_challenge` aus Schritt 1? — das ist die PKCE-Prüfung.

Wenn alles passt:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "access_token": "ya29.a0AfH6SMC...",
  "expires_in": 3599,
  "token_type": "Bearer",
  "scope": "https://www.googleapis.com/auth/photoslibrary.readonly",
  "refresh_token": "1//04dqL..."     ← optional, je nach Provider
}
```

---

## Schritt 4 — App ruft die API mit dem Access Token

```http
GET /v1/albums HTTP/1.1
Host: photoslibrary.googleapis.com
Authorization: Bearer ya29.a0AfH6SMC...
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "albums": [
    {"id": "AGj1ep...", "title": "Urlaub 2025", "mediaItemsCount": "127"},
    ...
  ]
}
```

---

## Was wäre passiert, wenn jemand den Code abgefangen hätte?

Sagen wir, eine bösartige App auf demselben Gerät hat den Redirect aus Schritt 2 abgefangen. Sie hat jetzt:
- Den `code`
- Vielleicht sogar die `client_id` (öffentlich, nicht geheim)

**Was sie nicht hat:** den `code_verifier`. Der lebt nur im `sessionStorage` der echten App.

Wenn die bösartige App den Token-Tausch (Schritt 3) versucht, muss sie einen `code_verifier` mitschicken. Sie kennt ihn nicht. Sie kann auch nicht aus der `code_challenge` zurückrechnen, weil das eine SHA-256-Vorbild-Suche wäre — das ist genau der Punkt einer kryptografischen Hash-Funktion: nicht umkehrbar.

→ Token-Tausch scheitert. Der Code ist nutzlos. Genau das, was PKCE leisten soll.

---

## Wichtige Spec-Verweise zu diesem Flow

- [**RFC 6749 §4.1**](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1) — der ursprüngliche Authorization Code Flow.
- [**RFC 7636 §4**](https://datatracker.ietf.org/doc/html/rfc7636#section-4) — PKCE-Erweiterung.
- [**RFC 9700 §2.1**](https://datatracker.ietf.org/doc/html/rfc9700#section-2.1) — Sicherheits-Empfehlungen für diesen Flow (exact-match Redirect URI, PKCE-Pflicht für Public Clients).
- [**RFC 6749 §10.12**](https://datatracker.ietf.org/doc/html/rfc6749#section-10.12) — `state` gegen CSRF.

## Übungs-Idee

Nimm Schritt 1 (die Authorize-URL) und schreibe sie in deinem Editor mit deinen *eigenen* erfundenen Werten (`client_id`, eigener `redirect_uri`, eigener `state`, eigenes PKCE-Paar aus `pkce_generator.py`). Dann formuliere Schritt 3 als `curl`-Befehl. Du musst nichts ausführen — Ziel ist, die Form im Kopf zu haben.
