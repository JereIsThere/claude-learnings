"""Flask + Authlib OAuth-Client gegen GitHub.

GitHub OAuth ist *kein* vollständiger OIDC-Provider (kein ID Token, kein
Discovery-Doc), aber didaktisch ist es der einfachste Einstieg in einen
echten Authorization Code Flow:

- Kostenloser App-Setup unter https://github.com/settings/developers
- Authorize-Endpoint:  https://github.com/login/oauth/authorize
- Token-Endpoint:      https://github.com/login/oauth/access_token
- "User-Info"-API:     https://api.github.com/user

Setup:
    1. https://github.com/settings/developers → "New OAuth App"
       Homepage URL:    http://localhost:5000
       Callback URL:    http://localhost:5000/callback
    2. Notiere Client ID und Client Secret.
    3. Setze Umgebungsvariablen:
         export GITHUB_CLIENT_ID=...
         export GITHUB_CLIENT_SECRET=...
    4. pip install Flask Authlib requests
    5. python github_oidc_client.py
    6. Browser → http://localhost:5000

Hinweis: GitHub OAuth unterstützt PKCE seit 2023, akzeptiert es aber
optional. Wir senden es trotzdem — Best Practice bleibt Best Practice.
"""
import os
import secrets
from flask import Flask, redirect, request, session, url_for
from authlib.integrations.flask_client import OAuth


app = Flask(__name__)
# Session-Cookie wird signiert mit diesem Secret. In Produktion: aus Env, fester Wert.
app.secret_key = os.environ.get("FLASK_SECRET", secrets.token_urlsafe(32))

oauth = OAuth(app)
oauth.register(
    name="github",
    client_id=os.environ["GITHUB_CLIENT_ID"],
    client_secret=os.environ["GITHUB_CLIENT_SECRET"],
    access_token_url="https://github.com/login/oauth/access_token",
    authorize_url="https://github.com/login/oauth/authorize",
    api_base_url="https://api.github.com/",
    client_kwargs={
        "scope": "read:user user:email",
        # Authlib aktiviert PKCE per `code_challenge_method='S256'`:
        "code_challenge_method": "S256",
    },
)


@app.route("/")
def index():
    user = session.get("user")
    if user:
        return (
            f'<h1>Hallo, {user["login"]}!</h1>'
            f'<p>Deine GitHub-Mail: {user.get("email", "(privat oder nicht freigegeben)")}</p>'
            f'<p><a href="/logout">Logout</a></p>'
        )
    return '<h1>Demo</h1><a href="/login">Mit GitHub anmelden</a>'


@app.route("/login")
def login():
    # `state` und PKCE übernimmt Authlib automatisch.
    redirect_uri = url_for("callback", _external=True)
    return oauth.github.authorize_redirect(redirect_uri)


@app.route("/callback")
def callback():
    # Authlib prüft `state` und führt den Token-Tausch mit code_verifier durch.
    token = oauth.github.authorize_access_token()
    # GitHub User-Info per Access Token holen:
    resp = oauth.github.get("user", token=token)
    user = resp.json()
    session["user"] = user
    return redirect(url_for("index"))


@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("index"))


if __name__ == "__main__":
    if "GITHUB_CLIENT_ID" not in os.environ or "GITHUB_CLIENT_SECRET" not in os.environ:
        print("Bitte GITHUB_CLIENT_ID und GITHUB_CLIENT_SECRET als Env-Vars setzen.")
        print("Siehe Header dieser Datei für Setup-Schritte.")
        raise SystemExit(1)
    # localhost ist für GitHub OAuth-Apps explizit erlaubt
    app.run(host="127.0.0.1", port=5000, debug=True)
