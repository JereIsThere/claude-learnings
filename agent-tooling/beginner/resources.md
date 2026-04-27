# Agent Tooling · Beginner Resources

Lies in dieser Reihenfolge — jede Quelle baut auf der vorherigen.

## 1. Mentale Karte aufsetzen
- **[index.html](../index.html)** in diesem Repo — Intro + Konzept 1 (Subagent) + die Vergleichstabelle der drei Wege.

## 2. Offizielle Subagent-Doku
- **[Custom Subagents](https://code.claude.com/docs/en/subagents)** — komplett. Lies §"What are subagents", §"File format", §"Tool restrictions". Ca. 15 Minuten.

## 3. Skills im Überblick
- **[Skills](https://code.claude.com/docs/en/skills)** — §"What is a skill", §"Frontmatter", §"Invocation". Auch ca. 15 Minuten.

## 4. Markdown + YAML Frontmatter
- **[YAML Spec — Frontmatter Section](https://yaml.org/spec/1.2.2/)** — du musst die Spec nicht ganz lesen. Verstehe nur: was sind Strings, Listen, Booleans, wann brauchst du Quotes.
- **[Jekyll Front Matter](https://jekyllrb.com/docs/front-matter/)** — gibt eine sehr handfeste Einführung in das Pattern, das auch Claude Code nutzt.

## Lernziele für dieses Level

Nach diesem Abschnitt kannst du:
- [ ] Den Unterschied zwischen Subagent und Skill in einem Satz erklären.
- [ ] Eine minimale `traeumer.md`-Subagent-Datei verstehen.
- [ ] Erklären, was `description` macht und warum die Wortwahl wichtig ist.
- [ ] Sagen, wo Subagents leben (Project- vs User-Scope) und welcher gewinnt.
- [ ] Einen Subagent mit `@agent-name` aufrufen.

## Praktische Übung

Im Ordner [`examples/`](./examples/) liegt:
- `minimal-subagent.md` — die einfachste mögliche Subagent-Definition, kommentiert. Studiere sie Zeile für Zeile.

```bash
# Schau dir den echten Träumer-Subagent an:
cat .claude/agents/traeumer.md

# Vergleiche mit der minimalen Version:
cat agent-tooling/beginner/examples/minimal-subagent.md
```

## Was du in diesem Level NICHT brauchst
- Plugin-Manifest schreiben (kommt in advanced/).
- Skill mit gebündelten Resources bauen (kommt in intermediate/).
- Hook-Konfiguration (kommt in advanced/).
