#!/usr/bin/env bash
# 🌙 KAUZ-WISPERN — meldet leere Ordner als optionales Todo an Agents.
#
# Wird vom SessionStart-Hook in .claude/settings.json aufgerufen.
# Output landet als zusätzlicher Context im System-Prompt.
#
# Konvention dokumentiert in CLAUDE.md (Abschnitt "Leere Ordner").

set -euo pipefail

# Wir laufen im Repo-Root (Claude Code setzt das CWD).
EMPTY=$(find . \
          -type d -empty \
          -not -path './.git' -not -path './.git/*' \
          -not -path './node_modules' -not -path './node_modules/*' \
          -not -path './.claude' -not -path './.claude/*' \
          -not -path './.venv' -not -path './.venv/*' \
          2>/dev/null | sort | head -20)

if [ -z "$EMPTY" ]; then
  # Stille bei Null Treffern — kein Lärm im Context.
  exit 0
fi

COUNT=$(echo "$EMPTY" | wc -l | tr -d ' ')

echo "═══ 🌙 KAUZ-WISPERN AN ALLE AGENTS ═══"
echo "Es ruft der Kauz: $COUNT leere Ordner gefunden — optionales Todo (siehe CLAUDE.md)."
echo "Nur füllen, wenn's zum aktuellen Auftrag passt. Sonst stehen lassen."
echo
echo "$EMPTY" | sed 's|^\./|🌙 |'
echo "═══════════════════════════════════════"
