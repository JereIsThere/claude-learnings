# Typography Learning Site

Statische Site, gerendert aus dem gemeinsamen Schema. Komplett offline, kein Build, keine Dependencies.

## Öffnen

Doppelklick auf `index.html` — fertig.

## Files

- **`data.js`** — Topic-Inhalt als `window.TOPIC = {…}` (siehe `../../shared/SCHEMA.md`)
- **`index.html` · `beginner.html` · `intermediate.html` · `advanced.html`** — 13-Zeilen-Shims

CSS und Renderer leben in `../../shared/`.

## Besonderheit

Type-Specimens nutzen ausschließlich **System-Fonts** (Georgia, Segoe UI, Impact, Consolas etc.) — keine Webfont-Downloads. Dadurch sieht das Topic auf Mac/Windows/Linux unterschiedlich aus, was zur Übung "Schriften erkennen" eigentlich passt.
