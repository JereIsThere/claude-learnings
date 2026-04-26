# CLAUDE.md

Project-level rules for Claude Code working in this repo.

## Process rules — neue Topics anlegen

**Wenn der User ein neues Topic möchte, immer in dieser Reihenfolge:**

1. **Lies `shared/SCHEMA.md`.** Das ist die Quelle der Wahrheit für die Topic-Struktur.
2. **Schau dir 1-2 existierende `data.js` Dateien an** (z.B. `regex/site/data.js`, `typography/site/data.js`) — als Referenz wie das Schema in der Praxis aussieht.
3. **Insertion-Sort-Prinzip:** Versuch das neue Topic ins existierende Schema zu pressen. Section-Typen sind `level-cards`, `concept-grid`, `info-cards`, `interactive` (mit subtypes), `code-showcase`, `exercises`, `placeholders`, `quiz`, `resources`, `checklist`. Mische und matche.
4. **Wenn das Topic NICHT passt** (z.B. SCP-Lore, Backrooms-Wiki, Kunst-Critique — Themen, wo "Übung" anders aussieht):
   - **Erweitere das Schema**, statt das Topic zu hacken.
   - Neuer Section-Typ → neuer Renderer-Branch in `shared/render.js` → CSS in `shared/styles.css` → Doku-Update in `shared/SCHEMA.md`.
   - Vorteil: alle existierenden Topics profitieren automatisch.
5. **Wenn das Schema sich ändert**, prüf ob existierende Topics davon betroffen sind. Tests sollten beim Schema-Update das Topic-Schema gegen `shared/SCHEMA.md` validieren.
6. **Vorher mit dem User reden**, wenn die Schema-Erweiterung nicht-trivial ist (>50 Zeilen Renderer/CSS, neue Storage-Konvention, neues Interaction-Pattern). Nicht einfach loslegen.

## Pro Topic: `_to_claude.md`

Jedes Topic-Verzeichnis (z.B. `regex/`) hat eine `_to_claude.md` Datei mit:
- Diskussionen die wir zu dem Topic geführt haben
- Offene Fragen
- Entscheidungen + Begründung
- "Erinnerungen für die nächste Session"

**Vor jeder Arbeit an einem Topic: lies dessen `_to_claude.md`.**

## Layout

- `shared/` — `SCHEMA.md`, `styles.css`, `render.js` (Topic-agnostisch)
- `<topic>/_to_claude.md` — Topic-spezifische Notizen (Markdown, kein Code)
- `<topic>/site/data.js` — der ganze Inhalt des Topics als `window.TOPIC = {…}`
- `<topic>/site/{index,beginner,intermediate,advanced}.html` — 13-Zeilen-Shims, laden `data.js` + `../../shared/render.js`
- `<topic>/site/README.md` — How-to-open
- `<topic>/{beginner,intermediate,advanced}/resources.md` — die alten Markdown-Resourcen, bleiben als Backup/Quelle

## Tests

Vor dem Commit / vor "fertig melden":

```
node --test tests/smoke.test.js
```

Tests prüfen:
- Jede `data.js` parsbar und entspricht dem Schema
- Jede HTML ist ein Shim mit erwarteter Struktur
- `shared/render.js` ist syntaktisch valide

## Don'ts

- **Nicht** topic-spezifisches CSS in lokale `<topic>/site/styles.css` packen — das gehört nach `shared/styles.css`. Lokale Styles nur für echte topic-spezifische Edge-Cases (dann mit `[data-topic="x"]` Scope).
- **Nicht** den existierenden `<topic>/{beginner,intermediate,advanced}/resources.md` Markdown-Content löschen, wenn das Topic ins Site-Schema migriert wird. Die Markdowns sind Quelle der Inhalte und auf GitHub direkt lesbar.
- **Keine** externe Dependencies (npm install, CDN-Links, Web-Fonts) ohne explizite User-Zustimmung. Site muss offline (`file://`) funktionieren.
