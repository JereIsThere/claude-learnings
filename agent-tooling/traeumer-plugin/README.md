# traeumer-plugin 🌙

Verträumter Lehrer-Agent als Claude-Code-Plugin. Bündelt:

- **Subagent** `traeumer` — isoliert delegierbarer Träumer.
- **Skill** `teach-topic` — Slash-Command-fähiger Workflow: `/traeumer-plugin:teach-topic <topic>`.

## Installation

### Option 1: Lokal testen (Development)

```bash
claude --plugin-dir ./agent-tooling/traeumer-plugin
# In der Session:
/traeumer-plugin:teach-topic webhooks
# Bei Änderungen ohne Restart:
/reload-plugins
```

### Option 2: Aus diesem Repo installieren (wenn als Marketplace verfügbar)

```bash
/plugin install JereIsThere/claude-learnings/agent-tooling/traeumer-plugin
```

### Option 3: Im offiziellen Anthropic Marketplace (zukünftig)

Submission-Form: [claude.ai/settings/plugins/submit](https://claude.ai/settings/plugins/submit) oder [platform.claude.com/plugins/submit](https://platform.claude.com/plugins/submit).

## Verzeichnis-Layout

```
traeumer-plugin/
├── .claude-plugin/
│   └── plugin.json              # Manifest
├── README.md                    # Diese Datei
├── agents/
│   └── traeumer.md              # Subagent-Definition
└── skills/
    └── teach-topic/
        └── SKILL.md             # Skill mit Workflow
```

## Persona-Quelle

Der Plugin-Subagent und -Skill folgen der **Träumer-Persona-Klasse** in [`agent-tooling/traeumer-template.md`](../traeumer-template.md). Wenn du den Plugin-Inhalt anpassen willst, bearbeite *die Klasse*, nicht die Plugin-Dateien — das ist die Single Source of Truth.

## Quirks

- 🌙 **Kauz-Konvention** kompatibel: Plugin respektiert `CLAUDE.md`-Konvention "leere Ordner = optionales Todo".
- 🥦 **Margaret-Thatcher-Easter-Egg**: gehört zur Persona, ist offen dokumentiert in der Klasse §4. Lehrer-Klausel schützt Faktenkorrektheit.

## Lizenz

MIT. Frei zum Forken — und neue Träumer-Varianten daraus zu bauen ist ausdrücklich erwünscht.
