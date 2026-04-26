# Jinja Templates · Advanced Resources

Voraussetzung: Beginner + Intermediate sitzen. Hier wird's ernst — wir reden über Sicherheit, Sandboxing und Erweiterung der Engine selbst.

## 1. Sicherheit: SSTI verstehen
- **[OWASP — Testing for Server-side Template Injection](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/07-Input_Validation_Testing/18-Testing_for_Server-side_Template_Injection)** — der kanonische Einstieg: was es ist, wie man es testet, warum es so gefährlich ist.
- **[PortSwigger Web Security Academy — Server-side template injection](https://portswigger.net/web-security/server-side-template-injection)** — exzellente strukturierte Erklärung mit Übungen (Labs gegen ihre Test-Server, *nicht* gegen fremde!).
- **[PayloadsAllTheThings — SSTI/Jinja2](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Server%20Side%20Template%20Injection/README.md)** — Referenz für Pentest-Payloads. Lies's nur als Verteidigungs-Wissen.

## 2. Die Sandbox
- **[Jinja — Sandbox](https://jinja.palletsprojects.com/en/stable/sandbox/)** — `SandboxedEnvironment` und `ImmutableSandboxedEnvironment`. Der Doc beschreibt explizit, welche Operationen blockiert werden.
- **CVE-Hintergrund (zur Erinnerung, dass Sandboxes brüchig sind):** Such nach `CVE jinja2 sandbox bypass` — historisch wurden mehrfach Bypass-Wege gefunden. Sandbox ist Defense-in-Depth, nicht Defense-in-Single.

## 3. Engine-Tieferlegung
- **[Jinja — API](https://jinja.palletsprojects.com/en/stable/api/)** — `Environment`, `Loader`-Varianten (`FileSystemLoader`, `PackageLoader`, `DictLoader`, `ChoiceLoader`), Bytecode-Caches, async support, `select_autoescape`.
- **[Jinja — Extensions](https://jinja.palletsprojects.com/en/stable/extensions/)** — eigene Tags (`{% mein_tag %}`), Filter und Tests einbauen, die das Parsen selbst beeinflussen.
- **[Jinja — Switching from other Template Engines](https://jinja.palletsprojects.com/en/stable/switching/)** — falls du aus Django/Mako kommst.

## Lernziele für dieses Level

Nach diesem Abschnitt kannst du:
- [ ] Eine SSTI-Lücke in einem Code-Snippet erkennen und korrekt fixen (User-Input nur als Kontext, niemals als Template-Quelle).
- [ ] Erklären, warum `render_template_string(f"...{user}")` unsicher ist, aber `render_template_string("Hi {{ name }}", name=user)` (in der Standard-Konfiguration) sicher.
- [ ] Eine `SandboxedEnvironment` aufsetzen und ihre Grenzen beschreiben.
- [ ] Den Unterschied zwischen `select_autoescape(...)` und manuellem `autoescape=True` benennen.
- [ ] Eine eigene Jinja-Extension zumindest *lesen* und ihre Bestandteile (`tags`, `parse()`) erklären.
- [ ] Performance-Aspekte ansprechen: Bytecode-Cache, `async_environment`, Streaming.

## Praktische Übung
Im Ordner [`examples/`](./examples/):
- `ssti_demo.py` — die unsichere und die sichere Version nebeneinander, mit Kommentaren.
- `sandbox_demo.py` — `SandboxedEnvironment` in Aktion, inkl. einer blockierten Operation.
- `select_autoescape_demo.py` — wie man Autoescape sauber konfiguriert (in pure Jinja, ohne Flask).

> ⚠️ **Wichtig:** Die SSTI-Demo zeigt absichtlich eine Lücke. Führe sie nur lokal auf `127.0.0.1` aus. Stelle sie niemals ins öffentliche Netz, auch nicht "zum Testen".
