#!/usr/bin/env bash
# 🤖 Bot-Identität für dieses Repo setzen.
#
# Setzt repo-lokal user.name und user.email so, dass alle Commits in
# diesem Repo als "claude-bot" gemacht werden — egal ob von einem
# KI-Agent oder manuell. Globale Git-Identität bleibt unangetastet.
#
# Verwendung:
#   bash .claude/scripts/setup-bot-identity.sh
#
# Idempotent: doppelt ausführen schadet nicht. Zeigt vor und nach.
#
# Konvention dokumentiert in CLAUDE.md (Abschnitt "Bot-Identität").

set -euo pipefail

# --- Konfiguration ----------------------------------------------------
# Diese beiden Zeilen anpassen, falls du andere Werte willst.
BOT_NAME="claude-bot"
BOT_EMAIL="noreply@anthropic.com"

# --- Ausführung -------------------------------------------------------

# Sicherheitscheck: sind wir wirklich in einem Git-Repo?
if ! git rev-parse --git-dir > /dev/null 2>&1; then
  echo "❌ Kein Git-Repo gefunden. Skript abgebrochen."
  exit 1
fi

# Aktuellen Stand zeigen (kann leer sein — dann schluckt Git das mit ||)
CURRENT_NAME=$(git config --local --get user.name 2>/dev/null || echo "(nicht gesetzt)")
CURRENT_EMAIL=$(git config --local --get user.email 2>/dev/null || echo "(nicht gesetzt)")

echo "🤖 Bot-Identity-Setup für $(git rev-parse --show-toplevel)"
echo
echo "VORHER (repo-lokal):"
echo "  user.name  = $CURRENT_NAME"
echo "  user.email = $CURRENT_EMAIL"
echo

# Setzen
git config --local user.name "$BOT_NAME"
git config --local user.email "$BOT_EMAIL"

echo "NACHHER (repo-lokal):"
echo "  user.name  = $(git config --local --get user.name)"
echo "  user.email = $(git config --local --get user.email)"
echo
echo "✓ Bot-Identität gesetzt. Alle künftigen Commits in diesem Repo"
echo "  werden als '$BOT_NAME <$BOT_EMAIL>' attribuiert."
echo
echo "ℹ Wenn du als Mensch ausnahmsweise unter eigenem Namen committen"
echo "  willst:"
echo "    git -c user.name='Dein Name' -c user.email='dein@email' commit ..."
echo
echo "ℹ Globale Git-Identität (~/.gitconfig) bleibt unverändert:"
echo "  user.name  = $(git config --global --get user.name 2>/dev/null || echo '(nicht gesetzt)')"
echo "  user.email = $(git config --global --get user.email 2>/dev/null || echo '(nicht gesetzt)')"
