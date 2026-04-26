"""Mittelstufe: Custom-Filter, Context-Processor, Macros, Loop-Vars, Block-Scoping.

Start:
    pip install Flask
    python app.py
"""
from flask import Flask, render_template

app = Flask(__name__)


# ---- Custom-Filter ---------------------------------------------------------

@app.template_filter("moneyize")
def moneyize(value):
    """1234.5 -> '1.234,50 €' (deutsches Währungsformat)."""
    try:
        n = float(value)
    except (TypeError, ValueError):
        return value
    # f"{n:,.2f}" erzeugt US-Format wie '1,234.50'.
    # Wir tauschen Komma <-> Punkt über einen Platzhalter.
    formatted = f"{n:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")
    return f"{formatted} €"


@app.template_filter("shouty")
def shouty(value):
    """'hallo welt' -> 'HALLO WELT!!!'"""
    return f"{str(value).upper()}!!!"


# ---- Context-Processor: Variablen, die jedes Template automatisch sieht ----

@app.context_processor
def inject_globals():
    return {
        "site_name": "Träumer-Shop",
        "current_year": 2026,
    }


# ---- Routes ----------------------------------------------------------------

@app.route("/")
def index():
    return (
        '<h1>Beispiele</h1><ul>'
        '<li><a href="/contact">/contact</a> – Macro + Custom-Filter</li>'
        '<li><a href="/loops">/loops</a> – loop.* Variablen</li>'
        '<li><a href="/scope">/scope</a> – Block-Scoping</li>'
        '</ul>'
    )


@app.route("/contact")
def contact():
    return render_template("contact.html", price=1234.5)


@app.route("/loops")
def loops():
    products = [
        {"name": "Notizbuch", "category": "Papier"},
        {"name": "Füller", "category": "Papier"},
        {"name": "Kaffee", "category": "Getränk"},
        {"name": "Tee", "category": "Getränk"},
        {"name": "Schokolade", "category": "Süßes"},
    ]
    return render_template("loops.html", products=products)


@app.route("/scope")
def scope():
    items = ["Apfel", "Birne", "Kirsche"]
    # Wir rendern die kaputte und die reparierte Version. Die kaputte
    # Variante wirft KEINEN Fehler — sie zeigt nur leere Items, weil
    # `item` im Block undefined ist. Das ist Jinjas Default-Verhalten.
    return render_template("scoping_fixed.html", items=items)


if __name__ == "__main__":
    app.run(debug=True)
