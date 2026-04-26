# Jinja Templates 🌙

> Vom Träumer eingerichteter Lernpfad. Die ganze Reise lebt visuell in **[index.html](./index.html)** — diese README ist der textuelle Index.

Jinja ist die Standard-Template-Engine für Python (Flask, Ansible, Salt, FastAPI-Beispiele, Hugging Face Chat-Templates). Wer Web-Apps mit Python baut, läuft früher oder später Jinja in die Arme.

## Die 4 verbundenen Konzepte

| # | Konzept | Worum es geht |
|---|---------|---------------|
| 1 | **Template Inheritance** | `{% extends %}`, `{% block %}`, `super()`, `required` — Layout-Skelett, das alle Seiten teilen. |
| 2 | **Filter & Macros** | `\|upper`, `\|join`, eigene `@app.template_filter`s, `{% macro %}` mit `caller()` für Slot-Pattern. |
| 3 | **Kontext & Scoping** | `render_template(ctx)`, `{% set %}`, alle `loop.*`-Variablen, das berüchtigte `scoped`-Schlüsselwort, `import … with context`. |
| 4 | **Autoescape & SSTI** | Default ist **off** in pure Jinja, **on** in Flask für `.html/.htm/.xml/.xhtml/.svg`. Niemals User-Input als Template-Quelle (SSTI), nur als Kontext. |

Sie hängen zusammen: ohne **Vererbung** wiederholst du dich, ohne **Filter & Macros** wird die Vererbung schmutzig, ohne **Kontext-Verständnis** verstehst du nicht warum Variablen verschwinden, und ohne **Autoescape** baust du XSS-Lücken.

## Lernpfad

### Beginner
- Lies `index.html` von oben bis Konzept 2 zu Ende.
- Mach Übungen 1, 2 und 4.
- Tools: `pip install Flask`, ein Texteditor, ein Browser.

### Intermediate
- Konzepte 3 + 4 in `index.html`.
- Übungen 3 und 5.
- Lies das offizielle [Template Designer Document](https://jinja.palletsprojects.com/en/stable/templates/) komplett — es ist überraschend kurz.

### Advanced
- Übungen 6 und 7.
- Lies die [Sandbox-Doku](https://jinja.palletsprojects.com/en/stable/sandbox/) und experimentiere mit `SandboxedEnvironment`.
- Lies den [OWASP-SSTI-Guide](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/07-Input_Validation_Testing/18-Testing_for_Server-side_Template_Injection) und probiere die Probes (NUR in deiner eigenen Test-App!).
- Schreib einen eigenen Custom-Test, ein eigenes Custom-Global, oder eine eigene Custom-Extension.

## Quick Reference

**Drei Delimiter:**
```jinja
{{ ausdruck }}     {# wird zu Text gerendert         #}
{% statement %}    {# if, for, set, extends, block… #}
{# kommentar #}    {# erscheint NICHT im Output     #}
```

**Vererbung:**
```jinja
{% extends "base.html" %}        {# muss erstes Tag sein #}
{% block content %}{{ super() }} ...{% endblock %}
{% block headline required %}{% endblock %}   {# Kind MUSS überschreiben #}
```

**Loop-Variablen:** `loop.index`, `loop.index0`, `loop.revindex`, `loop.revindex0`, `loop.first`, `loop.last`, `loop.length`, `loop.previtem`, `loop.nextitem`, `loop.depth`, `loop.depth0`, `loop.cycle(...)`, `loop.changed(...)`.

**Block-Scoping-Falle:** Blocks haben standardmäßig **keinen** Zugriff auf äußere Variablen. Lösung: `{% block name scoped %}…{% endblock %}`.

**Autoescape Defaults:**
- Pure Jinja2 → **AUS**. Mit `Environment(autoescape=select_autoescape(['html','xml']))` einschalten.
- Flask `render_template()` → **AN** für `.html`, `.htm`, `.xml`, `.xhtml`, `.svg`.
- Flask `render_template_string()` → **AN für alle Strings**.

**SSTI-Goldregel:** Trenne Template (Code, von dir) und Kontext (Daten, vom User). Vermische sie nie. Wenn du `f"…{user_input}…"` und `render_template_string` im selben Atemzug siehst, ist es kaputt.

## Quellen (alle Fakten verifiziert)
- [Jinja — Template Designer Documentation](https://jinja.palletsprojects.com/en/stable/templates/)
- [Jinja — Sandbox](https://jinja.palletsprojects.com/en/stable/sandbox/)
- [Flask — Templates](https://flask.palletsprojects.com/en/stable/templating/)
- [OWASP — Testing for SSTI](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/07-Input_Validation_Testing/18-Testing_for_Server-side_Template_Injection)

## Übung fehlt? Fehler entdeckt?
[GitHub Issue öffnen](https://github.com/JereIsThere/claude-learnings/issues/new?title=%5BJinja%5D+&labels=jinja-templates) — der Träumer freut sich.

— Der Träumer 🌙
