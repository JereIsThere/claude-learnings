# Agent Tooling · Advanced Resources

Voraussetzung: Beginner + Intermediate. Du hast einen Subagent und einen Skill gebaut, das Pattern sitzt. Jetzt: **Plugins** als Distribution + **Persona-Klassen** als Pattern für Wartbarkeit.

## 1. Plugin-Doku komplett
- **[Create plugins](https://code.claude.com/docs/en/plugins)** — Quickstart + Develop-more-complex-plugins-Sektion.
- **[Plugins reference](https://code.claude.com/docs/en/plugins-reference)** — vollständige technische Spezifikation. Lies §"Plugin manifest schema", §"Plugin directory structure", §"Hooks", §"Monitors".
- **[Plugin marketplaces](https://code.claude.com/docs/en/plugin-marketplaces)** — wie du verteilst.
- **[Discover and install plugins](https://code.claude.com/docs/en/discover-plugins)** — wie User installieren.

## 2. Hooks
- **[Hooks](https://code.claude.com/docs/en/hooks)** — Event-Lifecycle, `SessionStart`, `PreToolUse`, `PostToolUse`, `Stop`.
- Im Repo schon im Einsatz: `.claude/settings.json` mit `SessionStart`-Hook (Kauz-Wispern).

## 3. MCP & LSP im Plugin
- **[MCP](https://code.claude.com/docs/en/mcp)** — Model Context Protocol. Wie du externe Tool-Server in dein Plugin einbettest.
- **[LSP servers](https://code.claude.com/docs/en/plugins-reference#lsp-servers)** — Language-Server-Protocol-Plugins für Code-Intelligence.

## 4. Persona-Klasse als Pattern
- Lies in diesem Repo: [`agent-tooling/traeumer-template.md`](../traeumer-template.md). Beachte: Sektionen §1 (Wer der Träumer ist), §2 (Methode), §3 (Workflow), §4 (Easter Egg + Lehrer-Klausel), §5 (Erweiterungspunkte).
- Vergleiche, wie Subagent (`.claude/agents/traeumer.md`) und Skill (`.claude/skills/traeumer/SKILL.md`) auf §-Pointer verweisen statt zu kopieren.

## 5. Cowork & Marketplace
- **[Anthropic Plugin Submission](https://claude.ai/settings/plugins/submit)** — die offizielle Marketplace-Pipeline.
- Cowork als Anthropic-Produkt nutzt das gleiche Plugin-Format. Es gibt kein "Cowork-spezifisches" Plugin-Format.

## Lernziele für dieses Level

Nach diesem Abschnitt kannst du:
- [ ] Ein Plugin mit Manifest, Subagent und Skill von Grund auf bauen.
- [ ] Hooks im Plugin konfigurieren (SessionStart, PreToolUse, PostToolUse).
- [ ] Eine Persona-Klasse schreiben und drei Tool-Instanzen daraus ableiten.
- [ ] Erklären, warum Namespacing in Plugins wichtig ist.
- [ ] Versionierungs-Strategie wählen (explizite `version` vs. git-SHA).

## Praktische Übung

Im Ordner [`examples/`](./examples/) liegt:
- `plugin-recipe-with-hook.md` — komplettes Plugin-Rezept mit `SessionStart`-Hook (analog zum Kauz-Hook im Hauptrepo).
- `traeumer-5-instance.md` — eine zweite Träumer-Instanz, die die Klasse referenziert (Algorithmen-Spezialist).

Im Hauptrepo schon einsatzbereit zum Studieren:
- [`agent-tooling/traeumer-plugin/`](../traeumer-plugin/) — vollständiges Plugin.
- [`agent-tooling/traeumer-template.md`](../traeumer-template.md) — die Klasse.
- [`.claude/agents/traeumer.md`](../../.claude/agents/traeumer.md) — Subagent-Instanz.
- [`.claude/skills/traeumer/`](../../.claude/skills/traeumer/) — Skill-Instanz.

> ⚠️ **Caveat:** Plugins entwickeln sich aktiv weiter. Vergleiche bei jedem ernsthaften Plugin den aktuellen Stand der [Plugins reference](https://code.claude.com/docs/en/plugins-reference) — neue Felder oder Direktiven können auftauchen.
