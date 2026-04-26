"""select_autoescape — Autoescape ohne Flask, sauber konfiguriert.

In pure Jinja2 ist Autoescape per Default AUS. Die offizielle Empfehlung
ist `select_autoescape`, das nach Datei-Endung entscheidet — analog zu
Flasks Verhalten.

Start:
    pip install Jinja2
    python select_autoescape_demo.py
"""
from jinja2 import Environment, DictLoader, select_autoescape


# Wir benutzen DictLoader, damit das Beispiel ohne externe Dateien läuft.
templates = {
    "safe.html": "<p>{{ user_input }}</p>",
    "raw.txt":   "Plain text: {{ user_input }}",
}

# select_autoescape:
#   - enabled_extensions: Endungen, bei denen Autoescape AN ist (Default: html, htm, xml)
#   - default_for_string: Verhalten für from_string() — Default False
#   - default: Fallback wenn keine Endung passt
env = Environment(
    loader=DictLoader(templates),
    autoescape=select_autoescape(enabled_extensions=("html", "xml"), default=False),
)


user_input = "<script>alert(1)</script>"

print("=== safe.html (Endung .html → Autoescape AN) ===")
print(env.get_template("safe.html").render(user_input=user_input))
# Erwartet: <p>&lt;script&gt;alert(1)&lt;/script&gt;</p>

print("\n=== raw.txt (Endung .txt → Autoescape AUS) ===")
print(env.get_template("raw.txt").render(user_input=user_input))
# Erwartet: Plain text: <script>alert(1)</script>
# Das ist KORREKT für eine .txt-Datei (E-Mail-Plaintext z. B.) — Achtung:
# wenn du das Ergebnis später in HTML einbettest, ist die Lücke wieder da!

print("\nLehre: Die Endung steuert Autoescape — Konsistenz mit dem")
print("Endpunkt-Format ist deine Verantwortung.")
