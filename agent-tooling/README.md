# Agent Tooling 🌙

> Vom Träumer eingerichteter Lernpfad. Die ganze verträumte Reise lebt visuell in **[index.html](./index.html)** — diese README ist der textuelle Index plus Quick Reference.

Wie man eine Persona (z.&nbsp;B. den Träumer selbst) als wiederverwendbares Werkzeug in Claude Code baut. Drei Wege, plus ein Pattern, das sie verbindet.

## Die 4 verbundenen Konzepte

| # | Konzept | Worum es geht |
|---|---------|---------------|
| 1 | **Subagent** | `.claude/agents/<name>.md` — isolierte Verkörperung. Du delegierst eine ganze Aufgabe, der Subagent liefert mit Bericht zurück. |
| 2 | **Skill** | `.claude/skills/<name>/SKILL.md` — Workflow + bundled Resources. Auto-trigger via Description, oder `/<name>` als Slash-Command. |
| 3 | **Plugin** | Ordner mit `.claude-plugin/plugin.json` — Container für Skills + Agents + Hooks + MCP + LSP. Marketplace-fähig. |
| 4 | **Persona-Klasse** | Die *Vorlage* — eine kanonische Markdown-Datei, aus der Subagent, Skill und Plugin alle die Persona referenzieren statt zu kopieren. |

**Roter Faden:** Subagent (1) und Skill (2) sind zwei verschiedene Aufruf-Modi für dieselbe Persona. Ein Plugin (3) bündelt beide für Distribution. Eine Persona-Klasse (4) hält die Persona-Definition an einer Stelle, sodass Edits an allen Instanzen wirken.

## Standards-Tabelle

| Schicht | Dokument | Was drin steht |
|---------|----------|----------------|
| Subagent-Spec | [code.claude.com/docs/en/subagents](https://code.claude.com/docs/en/subagents) | Frontmatter-Schema, Locations, Invocation. |
| Skill-Spec | [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) | Frontmatter-Schema, Bundled Resources, Trigger-Wording. |
| Plugin-Übersicht | [code.claude.com/docs/en/plugins](https://code.claude.com/docs/en/plugins) | Verzeichnis-Layout, Manifest, Quickstart. |
| Plugin-Reference | [code.claude.com/docs/en/plugins-reference](https://code.claude.com/docs/en/plugins-reference) | Vollständige technische Spezifikation. |
| Plugin-Discovery | [code.claude.com/docs/en/discover-plugins](https://code.claude.com/docs/en/discover-plugins) | Wie User Plugins installieren. |

## Was im Repo direkt einsetzbar ist

| Pfad | Was es ist |
|------|-----------|
| [`.claude/agents/traeumer.md`](../.claude/agents/traeumer.md) | Subagent — sofort einsetzbar via `@agent-traeumer` |
| [`.claude/skills/traeumer/`](../.claude/skills/traeumer/) | Skill — `/traeumer` aufrufen oder Auto-Trigger |
| [`agent-tooling/traeumer-plugin/`](./traeumer-plugin/) | Plugin — `claude --plugin-dir ./agent-tooling/traeumer-plugin` |
| [`agent-tooling/traeumer-template.md`](./traeumer-template.md) | Persona-Klasse — Single Source of Truth für alle Instanzen |

## Lernpfad

### Beginner — [`beginner/`](./beginner/)
- Lies `index.html` Konzept 1 (Subagent) ganz.
- Übung 1 (Subagent rufen) und Übung 2 (Skill mit Slash-Command).
- `examples/`: minimale Subagent-Vorlage zum Studieren.

### Intermediate — [`intermediate/`](./intermediate/)
- Konzept 2 (Skill) in `index.html`.
- Übungen 3, 4, 5.
- `examples/`: Skill mit gebündelten Resources, Walkthrough.

### Advanced — [`advanced/`](./advanced/)
- Konzept 3 (Plugin) und Konzept 4 (Persona-Klasse) in `index.html`.
- Übungen 6 und 7.
- `examples/`: vollständige Plugin-Rezept-Sammlung, Hook-Pattern.

## Quick Reference

**Subagent rufen:**
```
@agent-traeumer baue mir einen Lernpfad zu webhooks
claude --agent traeumer
```

**Skill rufen:**
```
/traeumer mach mir Webhooks verträumt
/reload-plugins   # nach Änderungen
```

**Plugin laden (lokal):**
```
claude --plugin-dir ./agent-tooling/traeumer-plugin
/traeumer-plugin:teach-topic webhooks
```

**Subagent-Frontmatter (minimal):**
```yaml
---
name: <slug>
description: <wann delegieren>
tools: Read, Write, Edit, Glob, Grep, WebFetch, Bash
model: inherit
---
```

**Skill-Frontmatter (minimal):**
```yaml
---
name: <slug>
description: <was + wann (Trigger-Wording!)>
allowed-tools: Read, Write, Edit, Glob, Grep, WebFetch, Bash
---
```

**Plugin-Manifest (minimal):**
```json
{
  "name": "<plugin-name>",
  "description": "<was + wofür>",
  "version": "0.1.0",
  "author": { "name": "<dein name>" }
}
```

## Quellen (alle Aussagen verifiziert)
Alle in der Standards-Tabelle oben. Plus:
- [Anthropic Plugin Submission (claude.ai)](https://claude.ai/settings/plugins/submit)
- [Anthropic Plugin Submission (Console)](https://platform.claude.com/plugins/submit)

## Übung fehlt? Fehler entdeckt?
[GitHub Issue öffnen](https://github.com/JereIsThere/claude-learnings/issues/new?title=%5BAgent-Tooling%5D+&labels=agent-tooling) — der Träumer baut weiter.

— Der Träumer 🌙
