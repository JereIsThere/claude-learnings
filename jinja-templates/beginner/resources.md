# Jinja Templates · Beginner Resources

Lies das hier in dieser Reihenfolge — jede Quelle baut auf der vorherigen auf.

## 1. Die offizielle Tour
- **[Jinja — Template Designer Documentation](https://jinja.palletsprojects.com/en/stable/templates/)**
  Die Quelle der Wahrheit. Lies "Synopsis", "Variables", "Filters", "Tests", "Comments", "Whitespace Control" und "Template Inheritance". Das sind ~30 Minuten und du hast 80 % der Sprache drauf.

## 2. Jinja im Kontext sehen
- **[Flask — Quickstart](https://flask.palletsprojects.com/en/stable/quickstart/)** — der Abschnitt "Rendering Templates". Zeigt, wie ein Template tatsächlich von Python aus gerendert wird.
- **[Flask — Templates](https://flask.palletsprojects.com/en/stable/templating/)** — wie Flask Jinja konfiguriert (Autoescape on für `.html` etc., Standard-Globals).

## 3. Tutorial-Format (für die, die lieber Beispiele lesen)
- **[Real Python — Primer on Jinja Templating](https://realpython.com/primer-on-jinja-templating/)** — Schritt-für-Schritt mit Flask, sehr einsteigerfreundlich.

## 4. HTML-Grundlagen (falls noch nicht sattelfest)
- **[MDN — HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)** — Jinja produziert HTML. Ohne HTML-Grundkenntnisse fühlt sich Jinja willkürlich an.

## Lernziele für dieses Level

Nach diesem Abschnitt kannst du:
- [ ] Die drei Delimiter (`{{ }}`, `{% %}`, `{# #}`) auseinanderhalten und korrekt einsetzen.
- [ ] Mit `render_template()` aus Flask ein einfaches Template mit Variablen rendern.
- [ ] `{% if %}`, `{% for %}` und `{% set %}` benutzen.
- [ ] Eine `base.html` mit `{% block %}` schreiben und sie mit `{% extends %}` erweitern.
- [ ] Mindestens 5 eingebaute Filter auswendig (z. B. `upper`, `length`, `default`, `join`, `safe`).

## Praktische Übung
Im Ordner [`examples/`](./examples/) liegt ein minimales Flask-Projekt:
- `app.py` — die Mini-App
- `templates/base.html` — Eltern-Layout
- `templates/hello.html` — Kind, das `base.html` erweitert

So startest du es:
```bash
pip install Flask
python app.py
# dann http://127.0.0.1:5000/?name=Alice im Browser öffnen
```

Spielwiese:
- Ändere `hello.html`, ergänze einen weiteren Block.
- Füge einen Filter wie `|upper` hinzu.
- Bau einen `{% if %}` rein, der "Hallo, Fremder!" zeigt, wenn kein `name` da ist.
