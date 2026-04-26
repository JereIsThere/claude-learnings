"""SSTI (Server-Side Template Injection) — unsicher vs. sicher.

NUR LOKAL AUSFÜHREN. Die /unsafe-Route ist absichtlich verwundbar.
Niemals ins öffentliche Netz stellen.

Start:
    pip install Flask
    python ssti_demo.py
    # Dann zum Vergleich aufrufen:
    #   http://127.0.0.1:5000/unsafe?name=Welt
    #   http://127.0.0.1:5000/unsafe?name={{7*7}}        ← wird zu "Hallo 49!" (SSTI!)
    #   http://127.0.0.1:5000/safe?name=Welt
    #   http://127.0.0.1:5000/safe?name={{7*7}}          ← wird zu "Hallo {{7*7}}!" (escaped)
"""
from flask import Flask, render_template_string, request

app = Flask(__name__)


@app.route("/unsafe")
def unsafe():
    """ANTI-PATTERN. User-Input wird Teil der TEMPLATE-QUELLE.

    Über f-string-Konkatenation gelangt der User-Input vor Jinjas
    Parsing in den Quelltext. Jeder `{{ ... }}`-Ausdruck im Input wird
    als Jinja-Code ausgewertet, nicht als Daten escaped.
    """
    name = request.args.get("name", "")
    template = f"<h1>Hallo {name}!</h1>"     # ← AUTSCH
    return render_template_string(template)


@app.route("/safe")
def safe():
    """KORREKT. Template ist statisch. User-Input ist KONTEXT.

    `render_template_string` mit konstantem Template-String und
    Variablen-Übergabe als kwargs. Autoescape ist hier per Flask-Default
    AN (für ALLE Strings bei `render_template_string`).
    """
    name = request.args.get("name", "")
    return render_template_string("<h1>Hallo {{ name }}!</h1>", name=name)


@app.route("/")
def index():
    return (
        "<h1>SSTI-Demo</h1>"
        "<ul>"
        '<li><a href="/unsafe?name=Welt">/unsafe?name=Welt</a> — harmlos</li>'
        '<li><a href="/unsafe?name={{7*7}}">/unsafe?name={{7*7}}</a> — Probe!</li>'
        '<li><a href="/safe?name=Welt">/safe?name=Welt</a></li>'
        '<li><a href="/safe?name={{7*7}}">/safe?name={{7*7}}</a></li>'
        "</ul>"
    )


if __name__ == "__main__":
    # host explizit auf 127.0.0.1 — niemals 0.0.0.0 für diese Demo!
    app.run(host="127.0.0.1", port=5000, debug=True)
