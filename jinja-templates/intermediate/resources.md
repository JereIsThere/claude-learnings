# Jinja Templates · Intermediate Resources

Voraussetzung: Du hast die Beginner-Resources durch und kannst eine Flask-App mit Vererbung schreiben. Jetzt geht es um **Wiederverwendung** (Filter, Macros) und **Datenfluss** (Kontext, Scoping).

## 1. Filter & Tests vertiefen
- **[Jinja — Built-in Filters](https://jinja.palletsprojects.com/en/stable/templates/#list-of-builtin-filters)** — die vollständige Liste, durchscrollen.
- **[Jinja — Built-in Tests](https://jinja.palletsprojects.com/en/stable/templates/#list-of-builtin-tests)** — Tests sind die `is`-Familie: `{% if x is defined %}`, `{% if x is iterable %}`, `{% if x is divisibleby 3 %}`. Oft eleganter als Filter-Vergleiche.

## 2. Macros — die ganze Familie
- **[Jinja — Macros](https://jinja.palletsprojects.com/en/stable/templates/#macros)** — auch das `{% call %}`-Tag mit `caller()`, plus die magischen `varargs`/`kwargs`-Variablen.
- **[Jinja — Import](https://jinja.palletsprojects.com/en/stable/templates/#import)** — Macros aus anderen Dateien importieren, plus die wichtige Unterscheidung `with context` vs. `without context`.

## 3. Custom Filters & Globals (Flask-Integration)
- **[Flask — Templates: Registering Filters](https://flask.palletsprojects.com/en/stable/templating/#registering-filters)** — `@app.template_filter()` Decorator.
- **[Flask — Templates: Context Processors](https://flask.palletsprojects.com/en/stable/templating/#context-processors)** — Variablen oder Funktionen automatisch in *jedes* Template injizieren.
- **[Flask API — `Flask.template_filter`](https://flask.palletsprojects.com/en/stable/api/#flask.Flask.template_filter)** und [`template_global`](https://flask.palletsprojects.com/en/stable/api/#flask.Flask.template_global) — die zwei Wege, eigene Helfer einzuhängen.

## 4. Loop-Variablen & Block-Scoping
- **[Jinja — For Loops](https://jinja.palletsprojects.com/en/stable/templates/#for)** — die komplette `loop.*`-Tabelle (index, revindex, first, last, length, previtem, nextitem, depth, cycle, changed).
- **[Jinja — Block Nesting and Scope](https://jinja.palletsprojects.com/en/stable/templates/#block-nesting-and-scope)** — *die* Stelle, wo das `scoped`-Schlüsselwort dokumentiert ist.

## Lernziele für dieses Level

Nach diesem Abschnitt kannst du:
- [ ] Mindestens 3 verkettete Filter sinnvoll kombinieren.
- [ ] Einen Custom-Filter in Flask registrieren und im Template benutzen.
- [ ] Ein Macro mit `caller()` schreiben (Slot-Pattern).
- [ ] Macros über `{% from … import … with context %}` korrekt importieren und den Unterschied zu `without context` erklären.
- [ ] Erklären, warum eine Variable aus einer äußeren `{% for %}`-Schleife in einem inneren `{% block %}` nicht sichtbar ist — und mit `scoped` reparieren.
- [ ] Mindestens 5 `loop.*`-Variablen benutzen (insb. `loop.first`, `loop.last`, `loop.cycle`, `loop.previtem`).

## Praktische Übung
Im Ordner [`examples/`](./examples/) findest du:
- `app.py` — Flask-App mit zwei Custom-Filtern (`moneyize`, `shouty`) und einem Context-Processor.
- `templates/_forms.html` — Macro-Bibliothek (Input-Felder).
- `templates/contact.html` — nutzt das Macro und einen Custom-Filter.
- `templates/loops.html` — zeigt `loop.*` in Aktion.
- `templates/scoping_broken.html` — *kaputtes* Beispiel als Vergleich.
- `templates/scoping_fixed.html` — mit `scoped` repariert.

Start:
```bash
pip install Flask
python app.py
# http://127.0.0.1:5000/contact
# http://127.0.0.1:5000/loops
# http://127.0.0.1:5000/scope
```
