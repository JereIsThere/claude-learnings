# RegEx Learning Site

Statische Site, gerendert aus dem gemeinsamen Schema. Komplett offline, kein Build, keine Dependencies.

## Öffnen

Doppelklick auf `index.html` — fertig. Funktioniert in jedem modernen Browser via `file://`.

## Files

- **`data.js`** — Topic-Inhalt als `window.TOPIC = {…}` (siehe `../../shared/SCHEMA.md`)
- **`index.html` · `beginner.html` · `intermediate.html` · `advanced.html`** — 13-Zeilen-Shims, laden `data.js` + `../../shared/render.js`

CSS und Renderer leben in `../../shared/` und werden zwischen allen Topics geteilt.

## Inhalte editieren

Alle Texte, Übungen, Quizfragen sind in `data.js`. Ändern, Browser refreshen, fertig.

Bei Schema-Änderungen (neuer Section-Typ etc.): siehe `../../CLAUDE.md` und `../../shared/SCHEMA.md`.

## Tests

Vom Repo-Root:
```
node --test tests/smoke.test.js
```
