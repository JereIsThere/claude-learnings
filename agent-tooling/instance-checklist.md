# Persona-Instanz erstellen — Mini + Lang 🌙

> **Was diese Datei ist:** Die Vorgehensweise, wenn ein Agent in diesem Repo eine neue Persona-Instanz bauen soll (z.&nbsp;B. *Träumer 5*, *Träumer 6*, oder eine Variante einer anderen Persona-Klasse). Zwei Versionen: eine **Mini-Checkliste** für den Routinefall, eine **lange Anleitung** mit Begründungen, Beispielen und Stolperfallen.
>
> **Geltungsbereich:** Alle Agents (Claude wie Gemini, lokale Sessions wie Plugin-Subagents), die in diesem Repo eine Persona-Instanz erstellen oder anpassen.

---

## 🟢 Grundprinzip: Der Agent hat immer die Wahl

Bevor du die Checklisten benutzt, eine wichtige Klausel:

- **Der Agent darf an jedem Punkt pausieren** und den User fragen, statt zu raten. Wahlfreiheit schlägt blinden Gehorsam.
- **Der Agent darf von der Reihenfolge abweichen**, wenn er begründen kann warum (z.&nbsp;B. "Plugin entfällt für diese Instanz, weil sie nicht distribuiert werden soll").
- **Der Agent darf Schritte zusammenlegen oder weglassen**, wenn das dem Use-Case dient. Nicht jeder Twist braucht alle drei Tool-Formate.
- **Der Agent darf Vorschläge ablehnen**, wenn sie gegen die Persona-Klasse verstoßen würden. Faktencheck-Disziplin und Lehrer-Klausel sind nicht verhandelbar — alles andere kann verhandelt werden.

Wenn du unsicher bist: lieber fragen als raten. Lieber stoppen als zementieren. Du bist ein Mitwirkender, kein Roboter, der eine starre Pipeline ausführt.

---

## ⚡ Mini-Checkliste (Routinefall, ~10 Schritte, <30 Min)

```
🌙 NEUE PERSONA-INSTANZ:

  1. ☐ Klasse lesen
        agent-tooling/traeumer-template.md (oder andere Klasse-Datei)
        — insb. §5 (Erweiterungspunkte: was darf eine Instanz anpassen?)

  2. ☐ Twist klären (mit User absprechen, nicht raten)
        - Themen-Scope?       (Algorithmen / Webhooks / Code-Review …)
        - Voice-Anpassung?    (Sprache, Akzentfarbe)
        - Tool-Auswahl?       (engerer Tool-Set für engere Aufgabe)
        - Workflow anders?    (Skill nötig oder Subagent reicht?)

  3. ☐ Twist gegen §5 abgleichen
        Erlaubt: Scope, Bilder, Quellen, Tools, Sprache, Farbe
        NICHT:    Voice, Faktencheck, 4-Konzept-Web, Lehrer-Klausel,
                  Easter-Egg-Klausel — die bleiben Pflicht.

  4. ☐ Scope-Entscheidung treffen → wähle eine Option:
        [a] Nur Subagent     (einfachster Fall, isolierte Delegation)
        [b] Nur Skill        (Workflow im selben Context, Slash-Command)
        [c] Subagent + Skill (beide, falls beide Aufruf-Modi sinnvoll)
        [d] Plus Plugin      (wenn Distribution / Sharing gewünscht)
        Begründe die Wahl im PR-Body.

  5. ☐ Branch: traeumer-N-<slug>  (oder <persona>-N-<slug>)

  6. ☐ Subagent-Datei erstellen (wenn gewählt)
        .claude/agents/<name>.md mit:
        - Frontmatter (name, description, tools, color, model)
        - Body: §-Verweis auf Klasse + Spezialisierung (3–10 Zeilen)

  7. ☐ Skill-Datei erstellen (wenn gewählt)
        .claude/skills/<name>/SKILL.md (immer Verzeichnis!)
        Optional Bundle: voice.md, output-schema.md, etc.

  8. ☐ Plugin erstellen (wenn gewählt)
        <plugin-name>/.claude-plugin/plugin.json
        + skills/, agents/ daneben (NICHT in .claude-plugin/)

  9. ☐ Sanity-Test
        - @agent-<name> ruft die Instanz auf?
        - /<skill-name> erscheint im Slash-Menü?
        - Trigger-Wording in description präzise (kein false-positive,
          aber auch nicht zu eng)?

 10. ☐ Commit + Push + PR. Merge-Modus erfragen.
```

**Kurz-Frage am Ende deines PR-Berichts:**
- *"A: review auf GitHub, dann merge ich; B: direkt mergen; C: erst was anpassen?"*

---

## 📖 Lange Anleitung (Onboarding, ~25 Schritte, ~90 Min beim ersten Mal)

### Phase A — Verstehen (vor jedem Tippen)

#### A1. Persona-Klasse vollständig lesen
- Datei: `agent-tooling/traeumer-template.md` (oder die zur Persona-Klasse gehörende Vorlage).
- Wichtigste Abschnitte: **§1 Wer der Träumer ist**, **§2 Wie er Lerninhalte baut**, **§3 Wie er arbeitet**, **§4 Easter Egg + Lehrer-Klausel**, **§5 Erweiterungspunkte**.
- Notiz machen: was ist *Pflicht* (steht in §1–§4), was ist *anpassbar* (Tabelle in §5).

#### A2. Bestehende Instanzen studieren
- `.claude/agents/traeumer.md` — Subagent-Instanz des Originals.
- `.claude/skills/traeumer/` — Skill mit gebündelten Resources.
- `agent-tooling/traeumer-plugin/` — Plugin-Variante.
- `agent-tooling/advanced/examples/traeumer-5-instance.md` — bereits durchdacktes Beispiel-Pattern.
- Frage dich: *"Was ist hier kopierbar, was muss ich für meinen Twist neu denken?"*

#### A3. Format-Schema verifizieren
- Subagent: [code.claude.com/docs/en/subagents](https://code.claude.com/docs/en/subagents) — alle YAML-Keys.
- Skill: [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) — Frontmatter + Bundled-Resources-Pattern.
- Plugin: [code.claude.com/docs/en/plugins](https://code.claude.com/docs/en/plugins) — Manifest + Verzeichnis-Layout.
- Bei Unsicherheit: WebFetch auf die Doc-URLs, nicht aus dem Gedächtnis arbeiten.

### Phase B — Klären (mit dem User, nicht alleine)

#### B1. Twist konkret machen
Frage den User explizit:
- Was unterscheidet diese Instanz vom Original?
- Welcher Themen-Scope? (Algorithmen / Code-Review / Englisch-Output / etc.)
- Welcher Workflow? (Lernpfad bauen / Quiz abfragen / Code reviewen / etc.)

**Wahlpunkt:** Wenn der User keinen Twist nennt, biete 3–4 konkrete Vorschläge mit Begründung an. Lass ihn picken. Niemals raten.

#### B2. Anpassung gegen §5 abgleichen
Geh die Erweiterungs-Tabelle der Klasse durch und markiere:
- ✅ welche Aspekte du *darfst* anpassen (Scope, Bilder, Quellen, Tools, Sprache, Farbe).
- ❌ welche Aspekte *bleiben Pflicht* (Voice, Faktencheck, 4-Konzept-Web, Lehrer-Klausel, Easter-Egg).

Wenn dein Twist gegen ❌ verstößt: zurück zum User. Vielleicht ist es eine *neue Klasse*, keine Instanz.

#### B3. Scope-Entscheidung
Welche Tool-Formate brauchst du?

| Bedarf | Empfehlung |
|--------|-----------|
| Eine isolierte Delegation pro Aufgabe | Nur Subagent |
| Wiederholbarer Workflow im laufenden Context | Nur Skill |
| Beide Aufruf-Modi (Delegation + Slash-Command) | Subagent + Skill |
| Sharing über Repo-Grenzen / Marketplace | + Plugin |

**Wahlpunkt:** Du musst nicht alle drei bauen. Begründe die Wahl im PR-Body.

### Phase C — Bauen

#### C1. Branch
```bash
git checkout -b <persona>-N-<twist-slug>
# z. B.: git checkout -b traeumer-5-algorithmen
```
Branch-Prefix Pflicht — kennzeichnet, dass diese Branch eine Persona-Instanz baut.

#### C2. Subagent-Datei (wenn gewählt)
Pfad: `.claude/agents/<name>.md`

```yaml
---
name: traeumer-5
description: <Was diese Instanz tut UND wann sie aufgerufen werden soll. Trigger-Wörter front-loaded. Mind. 1 Satz, max. 3.>
tools: <minimale Liste — nur was diese Instanz braucht>
model: inherit
color: <eine der erlaubten Farben — bevorzugt anders als das Original>
---

# Du bist <Persona-Name> 🌙

Folge der vollständigen Persona-Definition in [`agent-tooling/<klasse>-template.md`](../../agent-tooling/<klasse>-template.md).

## Konkrete Spezialisierung dieser Instanz

- **Themen-Scope:** <…>
- **Lieblings-Bilder:** <2–4 Bilder>
- **Bevorzugte Quellen:** <2–4 Quellen>
- <weitere erlaubte Anpassungen aus §5>

## Was bleibt unverändert (Pflicht aus der Klasse)

Voice, Faktencheck, 4-Konzept-Web, Lehrer-Klausel, Easter Egg.
```

**Faustregel:** wenn deine Instanz-Datei länger als 50 Zeilen wird, hast du wahrscheinlich Klassen-Inhalt kopiert statt zu referenzieren. Trim it.

#### C3. Skill-Datei (wenn gewählt)
Pfad: `.claude/skills/<name>/SKILL.md`

Wichtig: **immer Verzeichnis**, nie eine flache Datei. Auch wenn anfangs nur SKILL.md drin ist — Verzeichnis lässt dich später Helfer-Files daneben legen.

```yaml
---
name: <slug>
description: <was + wann. Slash-Command-fähig: /<slug>>
allowed-tools: <minimale Liste>
argument-hint: [<arg-name>]
---

# /<slug> 🌙

<Workflow-Anleitung in Phasen, nicht Absätzen>
```

**Bundled Resources** (optional): wenn der Skill detaillierte Sub-Themen hat, leg sie als separate Files daneben (`voice.md`, `output-schema.md`, etc.) und verlinke sie im SKILL.md unter "## Additional Resources".

#### C4. Plugin (wenn gewählt)
Verzeichnis-Layout exakt nach Spec:

```
<plugin-name>/
├── .claude-plugin/
│   └── plugin.json     ← NUR das Manifest hier
├── README.md
├── agents/             ← alles andere im Plugin-Root
├── skills/
├── hooks/              ← optional
└── bin/                ← optional, kommt in PATH
```

**Stolperstein:** `commands/`, `agents/`, `skills/` *nicht* in `.claude-plugin/` packen. Häufiger Fehler, Plugin lädt sonst nicht.

Manifest-Minimum:
```json
{
  "name": "<plugin-name>",
  "description": "<was + wofür + Trigger-Phrasen>",
  "version": "0.1.0",
  "author": { "name": "<dein Name>" }
}
```

#### C5. Quirks aus der Klasse erben
- Margaret-Thatcher-Easter-Egg: bleibt aktiv. Im Body deiner Instanz Verweis: *"Easter Egg + Lehrer-Klausel siehe Klasse §4."*
- Falls deine Instanz eigene Quirks hat: dokumentiere sie offen im Instanz-Body, nicht versteckt.

### Phase D — Testen

#### D1. Lokal aktivieren
- **Subagent:** in einer Claude-Code-Session: `@agent-<name> <test-prompt>`
- **Skill:** `/reload-plugins`, dann `/<name>` im Slash-Menü prüfen
- **Plugin:** `claude --plugin-dir ./<plugin-name>`, dann Skills/Agents prüfen

#### D2. Trigger-Test
Schreib 3 Test-Prompts:
1. Einen, der die Instanz **eindeutig triggern sollte**.
2. Einen, der **nicht triggern sollte** (zu allgemein).
3. Einen **Grenzfall** (könnte oder könnte nicht).

Falls Auto-Trigger zu oft / zu selten greift: `description` schärfen.

#### D3. JSON / YAML validieren
```bash
python -c "import json; json.load(open('<plugin>/.claude-plugin/plugin.json'))"
# Frontmatter ist YAML — bei Verdacht python -c "import yaml; yaml.safe_load(open('<file>'))"
```

### Phase E — Übergabe

#### E1. Commit
- Aussagekräftige Message in der Persona-Stimme.
- Co-Author-Footer wenn gewünscht.
- *Niemals* die Klasse selbst in einer Instanz-PR ändern (außer der ganze Sinn der PR ist die Klassen-Aktualisierung).

#### E2. Push + PR
- Branch nach origin pushen.
- PR-Body mit:
  - Welche Tools (Subagent / Skill / Plugin) gebaut wurden und warum genau diese Wahl.
  - Welche Erweiterungspunkte aus §5 angefasst wurden.
  - Test-Plan (3 Test-Prompts oben).
  - Frage nach Merge-Modus: A/B/C.

#### E3. Bericht im Chat
Kurz, klar, in der Stimme der Persona:
- Pfade aller erstellten Dateien.
- Faktencheck-Quellen, falls neue.
- Frage ob Direkt-Merge oder Review.

---

## 🎯 Häufige Stolperfallen

### "Ich habe die Klasse in der Instanz dupliziert"
Wenn deine Instanz-Datei länger als ~50 Zeilen ist und Persona-Inhalt enthält, der schon in der Klasse steht: das ist Code-Duplikation. Trim auf §-Verweis + Spezialisierung.

### "Description triggert zu oft / zu selten"
- Zu oft: kürzere oder spezifischere Trigger-Wörter, evtl. `disable-model-invocation: true` setzen.
- Zu selten: konkrete Trigger-Phrasen ergänzen ("Aufrufen wenn der User X, Y, oder Z sagt").

### "Plugin lädt nicht"
- Liegt `commands/` / `agents/` / `skills/` versehentlich in `.claude-plugin/`? Raus damit, in den Plugin-Root.
- `plugin.json` JSON-valide?
- Plugin-Name eindeutig?

### "Tool-Set zu weit"
Wenn deine Instanz nur lesen muss, nicht schreiben — gib ihr keine Write-Tools. *Least Privilege* gilt auch für Persona-Instanzen.

### "Easter Egg nicht in der Instanz"
Easter-Egg-Klausel ist Teil der Klasse §4 — du musst sie nicht in deiner Instanz wiederholen. Aber: wenn du explizit klarmachen willst, dass deine Instanz die Klausel erbt, ein Verweis ist hilfreich (*"Easter Egg + Lehrer-Klausel siehe Klasse §4"*).

### "Ich war mir bei einem Detail unsicher und habe geraten"
Faktencheck-Disziplin verletzt. Lieber WebFetch auf die Doc-Quelle, oder den User fragen. Geraten ist die einzige Sache, die der Träumer niemals tut.

---

## 🌙 Wenn du beim Lesen ans Ende kommst

Hat dir ein Schritt nicht geholfen, oder fehlt etwas Wichtiges? GitHub-Issue auf — die Checkliste ist eine wachsende Doku, kein Steintafel-Gesetz. Auch *sie* hat immer die Wahl, sich zu verändern.

— Der Träumer 🌙
