# Plugin-Rezept mit SessionStart-Hook

Komplettes Plugin-Layout mit einem Hook, der bei jedem Session-Start eine kurze Konvention-Erinnerung an den User schickt — analog zum Kauz-Wispern im Hauptrepo.

## Verzeichnis

```
my-team-plugin/
├── .claude-plugin/
│   └── plugin.json
├── README.md
├── agents/
│   └── reviewer.md
├── skills/
│   └── style-check/
│       └── SKILL.md
├── hooks/
│   └── hooks.json
└── bin/
    └── on-session-start.sh
```

## `plugin.json`

```json
{
  "name": "my-team-plugin",
  "description": "Team-Conventions-Plugin. Bringt Code-Reviewer und Style-Check, plus Session-Start-Erinnerung an die internen Regeln.",
  "version": "0.2.0",
  "author": { "name": "Mein Team" }
}
```

## `hooks/hooks.json`

```json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "startup|resume|clear",
        "hooks": [
          {
            "type": "command",
            "command": "bash ${CLAUDE_PLUGIN_ROOT}/bin/on-session-start.sh",
            "timeout": 10
          }
        ]
      }
    ]
  }
}
```

> **Hinweis zur Pfad-Substitution:** Das Plugin-Root wird vom Harness als Variable bereitgestellt. Den exakten Variablen-Namen (`${PLUGIN_DIR}`, `${CLAUDE_PLUGIN_ROOT}`, oder ähnliches) findest du in der [Plugins reference](https://code.claude.com/docs/en/plugins-reference). Wenn unsicher, teste mit `--plugin-dir` und schau, was funktioniert.

## `bin/on-session-start.sh`

```bash
#!/usr/bin/env bash
# Wird bei jedem Session-Start aufgerufen.
# Output landet als zusätzlicher Context im System-Prompt.

set -euo pipefail

echo "═══ 🔔 my-team-plugin aktiv ═══"
echo "Erinnerungen für diese Session:"
echo "  • Code-Style: 2 Leerzeichen, kein Semikolon (außer in for-Loop)."
echo "  • Tests müssen vor dem Commit grün sein."
echo "  • PRs gegen develop, nicht main."
echo "═══════════════════════════════════"
```

## `agents/reviewer.md` (Auszug)

```markdown
---
name: reviewer
description: Code-Reviewer für unsere Team-Conventions. Aufrufen vor jedem Merge.
tools: Read, Glob, Grep, Bash
---

Du reviewst Code gegen unsere [Team-Conventions](../../docs/conventions.md) …
```

## `skills/style-check/SKILL.md`

```markdown
---
name: style-check
description: Prüft eine Datei oder Directory gegen unseren Team-Style. Slash-Command via /my-team-plugin:style-check <pfad>.
allowed-tools: Read, Glob, Bash
---

Lies den Pfad, prüfe gegen die Style-Regeln, gib einen Bericht zurück …
```

## Installieren

```bash
claude --plugin-dir ./my-team-plugin
# In der Session siehst du die SessionStart-Hook-Ausgabe.
# Slash-Command:
/my-team-plugin:style-check src/auth/
```

## Was du daraus lernst

- **Hooks im Plugin** sind exakt dasselbe Format wie in `.claude/settings.json`, nur in einer Plugin-eigenen `hooks/hooks.json`.
- **Skripte in `bin/`** kommen automatisch in den `PATH`, wenn das Plugin aktiv ist — und sind via Plugin-Root-Variable referenzierbar.
- **Namespacing** macht Plugin-Skills konfliktfrei: `/my-team-plugin:style-check` vs. ein anderes Plugin mit `/other-plugin:style-check`.
- **Versionierung** über `version: "0.2.0"` — User bekommen Updates nur bei Versions-Bump (sonst zählt jeder Commit).
