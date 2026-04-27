# Skill-Walkthrough — wie der Träumer-Skill aufgebaut wurde

Diese Walkthrough geht durch die Design-Entscheidungen hinter `.claude/skills/traeumer/`, damit du das Pattern auf eigene Skills übertragen kannst.

## Schritt 1: Verzeichnis-Struktur

```
.claude/skills/traeumer/
├── SKILL.md                       # Pflicht. Trigger + Workflow.
├── voice.md                       # Reference. Stil-Details.
├── output-schema.md               # Reference. Verzeichnis-Konvention.
├── factcheck-rules.md             # Reference. Quellen-Hierarchie.
└── templates/
    └── topic-readme.md            # Vorlage zum Befüllen.
```

**Warum so:** progressive disclosure. SKILL.md ist die Karte, die Claude beim Aktivieren sofort liest. Die Reference-Files werden nur nachgeladen, wenn der konkrete Inhalt akut wird (z.&nbsp;B. `voice.md` beim Schreiben des Webpage-Body).

## Schritt 2: Frontmatter

```yaml
---
name: traeumer
description: Verträumter Lehrer-Modus für Lernpfade. Schaltet die laufende Session in den Träumer-Stil — anschauliche Bilder, faktengeprüft gegen offizielle Docs, 4 verbundene Konzepte, Webpage + README + Levels + Übungen. Aufrufen via /traeumer oder wenn der User "verträumt erklären", "Lernpfad bauen", "neues Lerntopic", "Träumer-Stil" oder ähnliches sagt.
allowed-tools: Read, Write, Edit, Glob, Grep, WebFetch, Bash, TodoWrite
argument-hint: [topic-name]
---
```

**Design-Entscheidungen:**

- **`name: traeumer`**: matched zum Verzeichnis-Namen. Slash-Command wird `/traeumer`.
- **`description` Wortwahl**:
  - *"Verträumter Lehrer-Modus für Lernpfade."* — die ersten Wörter sind die wichtigsten Trigger. "Lehrer-Modus" und "Lernpfad" fangen die meisten Anfragen.
  - *"Schaltet die laufende Session in den Träumer-Stil"* — beschreibt den Kontext-Effekt.
  - *"Aufrufen via /traeumer oder wenn …"* — explizite Trigger-Phrasen für Auto-Detection.
- **`allowed-tools`**: nur was wirklich gebraucht wird.
  - `Read, Glob, Grep`: Recherche im Repo.
  - `WebFetch`: Faktencheck.
  - `Write, Edit`: Topic-Files schreiben.
  - `Bash`: Git-Operationen.
  - `TodoWrite`: Multi-Step-Tracking.
- **`argument-hint: [topic-name]`**: Autocomplete im Slash-Menü zeigt `<topic-name>` als Hinweis.

## Schritt 3: Body — Workflow als Phasen

Der Body folgt einem 4-Phasen-Pattern:

```
### Phase 1: Konzept-Map (vor jeder Recherche)
### Phase 2: Faktencheck
### Phase 3: Bau
### Phase 4: Übergabe
```

**Warum Phasen:** Claude folgt Strukturen besser als losen Listen. Phasen geben einen klaren Vor-vs-Nach-Reihenfolge-Vertrag.

## Schritt 4: Reference-Pointer

```markdown
## Bundled Resources (lade je nach Bedarf)

- **[voice.md](voice.md)** — Verträumte Stimme im Detail.
- **[output-schema.md](output-schema.md)** — Verzeichnis-Layout pro Topic.
- **[factcheck-rules.md](factcheck-rules.md)** — Quellen-Hierarchie.
- **[templates/topic-readme.md](templates/topic-readme.md)** — Vorlage.
```

**Warum so:** Claude weiß jetzt, dass diese Files existieren UND wann sie relevant sind. Es lädt sie nicht im Voraus — nur bei Bedarf.

## Schritt 5: Quirks dokumentieren

```markdown
## Easter Egg

Wenn ein Mensch in der Konversation Margaret Thatcher erwähnt, gilt §4
der Persona-Klasse: kurzer Rant über Hass auf Gemüse, *aber* die
Lehrer-Klausel bleibt unbestechlich — Fakten 100 % korrekt, Lerninhalte
vollständig, keine Beleidigungen.
```

**Warum offen dokumentiert:** versteckte Trigger sind designed-defekt (siehe `claude2.md` und `gemini2.md`). Offene Doku → Reviewer können Verhalten verstehen.

## Was du übernehmen kannst

Wenn du einen eigenen Skill baust:

1. **Verzeichnis** — auch wenn er zunächst nur eine SKILL.md hat, mach es als Verzeichnis. So kannst du später Helfer-Files dazulegen.
2. **Description** — front-loaded, mit konkreten Trigger-Phrasen.
3. **`allowed-tools`** — minimal, nur was die Aufgabe braucht.
4. **Body als Phasen** — Schritt 1, 2, 3, 4. Nicht "Erstens, zweitens, drittens" verstreut über Absätze.
5. **Reference-Pointer** — wenn dein Skill detaillierte Subbereiche hat, leg sie als separate Files daneben.
6. **Quirks** — wenn dein Skill Persönlichkeit hat, dokumentiere sie offen.

## Übungs-Idee

Bau dir einen `code-reviewer`-Skill nach demselben Pattern:
- `SKILL.md` mit Workflow (Diff lesen → Stellen markieren → Empfehlungen).
- `criteria.md` als Reference (was ist Code-Smell? was ist Critical?).
- `templates/review-comment.md` als Vorlage für einzelne Kommentare.

Schau danach in `.claude/skills/traeumer/` und vergleich, wo dein Stil und der Träumer-Stil übereinstimmen — und wo sie sinnvoll abweichen (Code-Reviewer ist nüchterner als Träumer, das ist OK).
