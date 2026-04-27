# Agent Tooling · Intermediate Resources

Voraussetzung: Beginner-Resources durch. Du verstehst Subagents und kannst eine minimale `*.md` schreiben. Jetzt: **Skills** mit gebündelten Resources, Trigger-Wording, und Tool-Permissions.

## 1. Skills im Detail
- **[Skills](https://code.claude.com/docs/en/skills)** — komplett, inkl. §"Bundle resources", §"Tool restrictions", §"Argument substitution".
- **[Skill Discovery](https://code.claude.com/docs/en/skills#how-skills-are-discovered)** — wie Claude die Description liest.

## 2. Trigger-Wording
- Schau dir 5–10 Skills auf [github.com/anthropics/claude-skills](https://github.com/anthropics/claude-skills) (oder Marketplace) an. Lies nur die `description`-Zeilen. Welche fühlen sich präzise an, welche zu generisch?

## 3. Markdown-Pattern für Skills
- Skill-Größe halten: SKILL.md unter ~500 Zeilen, Detail in separate Dateien daneben.
- Reference-Pattern: in SKILL.md auf `[reference.md](reference.md)`, `[examples.md](examples.md)` linken — Claude lädt nur, was es tatsächlich braucht ("progressive disclosure").

## 4. Tool-Permission-Modell
- **[allowed-tools](https://code.claude.com/docs/en/skills#allowed-tools)** — wenn der Skill aktiv ist, darf er diese Tools ohne Permission-Prompt verwenden. Restriktiv halten — nur was wirklich nötig ist.
- Vergleich zum Subagent: Subagent hat `tools` (welche überhaupt verfügbar), Skill hat `allowed-tools` (welche frei).

## Lernziele für dieses Level

Nach diesem Abschnitt kannst du:
- [ ] Einen Skill mit präziser, trigger-tauglicher `description` schreiben.
- [ ] Helper-Files in der Skill-Directory neben SKILL.md ablegen und referenzieren.
- [ ] Den Unterschied zwischen `description` und `when_to_use` korrekt einsetzen.
- [ ] `allowed-tools` minimal halten und begründen, warum jedes Tool drin ist.
- [ ] Erklären, wann ein Skill auto-triggert vs. wann ein Slash-Command nötig ist.

## Praktische Übung

Schau dir den Träumer-Skill an:

```bash
ls -la .claude/skills/traeumer/
# SKILL.md
# voice.md
# output-schema.md
# factcheck-rules.md
# templates/topic-readme.md
```

Lies die `SKILL.md` — wie verweist sie auf die anderen Files? Welche werden genannt, welche nur indirekt verwendet? Wie ist die Datei strukturiert (Phase 1 → 2 → 3 → 4)?

Im Ordner [`examples/`](./examples/) liegt:
- `skill-walkthrough.md` — eine Schritt-für-Schritt-Anleitung, wie der Träumer-Skill aufgebaut wurde, mit Begründung jeder Design-Entscheidung.
