# _to_claude.md (root)

Tagebuch / Diskussionsspeicher für globale Entscheidungen und Architektur.
Pro-Topic-Notizen liegen in `<topic>/_to_claude.md`.

---

## 2026-04-26 · Schema-Architektur etabliert

**Entscheidung:** Statisches HTML, kein Build, ein gemeinsames Schema in `shared/SCHEMA.md`.

**Layout:**
- `shared/` — `SCHEMA.md`, `styles.css`, `render.js`
- `<topic>/site/data.js` — Inhalte als `window.TOPIC`
- `<topic>/site/*.html` — 13-Zeilen-Shims

**Begründung:** Der erste Pilot (RegEx) hatte 350+ Zeilen HTML-Boilerplate pro Page × 4 Pages = unwartbar bei 30+ Topics. Schema + Renderer reduziert das auf eine `data.js` pro Topic.

**Hard rules** stehen in `CLAUDE.md` (wird automatisch geladen). Diese Datei hier ist das Tagebuch.

## 2026-04-26 · Topics in der Pipeline

User hat genannt:
- ✅ **RegEx** — Pilot, fertig migriert
- 🟡 **Typography** — als 2. Pilot (visuelles Topic, beweist dass Schema auch für non-tech passt)
- 🔲 **Design** — geplant, noch nicht angefangen
- 🔲 **SCP** — geplant, **braucht Diskussion** über Übungs-Format ("schreib einen SCP-Eintrag im richtigen Format" passt nicht 1:1 zu unserem Quiz/Exercise-Schema)
- 🔲 **Backrooms** — geplant, ähnliche Diskussion wie SCP nötig
- 🔲 mehr kommt vom User

## 2026-04-26 · "Bei neuen Topics: insertion-sort"

User-Wunsch: bei neuen Topics erst Schema überfliegen, einsortieren, sonst Schema erweitern.
→ Ist als Process-Regel in `CLAUDE.md` festgehalten.

## Offene Fragen

- **SCP/Backrooms**: brauchen wir einen neuen Section-Typ wie `template-writing` (User schreibt einen Eintrag im Format und vergleicht mit Beispiel)?
- **Issue-Buttons offline**: aktuell brauchen sie Internet (öffnen GitHub-URL). Falls 100% offline ein Anforderung wird → localStorage-Sammelbox + Export-Button. Aber: yagni bis es kommt.
- **Browser-Tests**: aktuell nur `node:test` mit Schema-Validierung. Echte E2E-Tests (Playwright/Puppeteer) wären besser, brauchen aber `npm install`. Hoch heben bis es nötig wird.
