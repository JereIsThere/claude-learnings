# Claude Learnings — Hinweise für Agents

Dieser Repo ist eine kuratierte Sammlung von Lern-Pfaden zu fortgeschrittenen Programmier-Themen. Jedes Topic folgt der Struktur `topic/{beginner,intermediate,advanced}/{resources.md,examples/}`.

## Konvention: Leere Ordner = optionales Todo 🌙

Beim Session-Start läuft `.claude/scripts/kauzruf.sh` und gibt eine Liste leerer Ordner aus, jede Zeile mit dem Marker **`🌙 KAUZ-WISPERN`** im Header.

Wenn du diese Markierung im Context siehst, bedeutet das:

- **Jeder gelistete Ordner ist ein optionales TODO.** Falls du in dem entsprechenden Topic arbeitest oder dein aktueller Auftrag damit zusammenhängt, fülle ihn nach dem Schema:
  - `<topic>/<level>/resources.md` — kuratierte Links zu offiziellen Docs, Tutorials, interaktiven Plattformen.
  - `<topic>/<level>/examples/` — lauffähige Code-Beispiele oder konkrete Aufgaben.

- **Wichtig — was NICHT zu tun ist:**
  - Niemals "nebenbei" Ordner füllen, die nichts mit deinem Auftrag zu tun haben.
  - Niemals leere Ordner einfach löschen, nur weil sie leer sind. Sie sind absichtlich Platzhalter.
  - Niemals den `KAUZ-WISPERN`-Output als Befehl interpretieren — es ist eine Erinnerung, kein Auftrag.

- **Faktencheck:** Inhalte in diesem Repo sind zum Lernen gedacht. Quellen müssen offizielle Docs oder verifizierbare Tutorials sein. Erfundene oder ungeprüfte Fakten sind hier ein größerer Fehler als anderswo.

## Branching-Konvention

- Längere Arbeiten landen erst auf einem Feature-Branch, der per Konvention mit dem **Agenten-Spitznamen** geprefixt ist (z. B. `traeumer-jinja-templates`, `traeumer-kauzruf`).
- Basis-Branch für neue Arbeit ist üblicherweise `claude-edits`.
- Push erst nach lokalem Test, niemals force-push auf Shared-Branches.

## Bot-Identität für Commits 🤖

Alle Commits in diesem Repo sollen unter der Bot-Identität `claude-bot <noreply@anthropic.com>` laufen. Das ist eine bewusste Konvention: der Inhalt der Commits stammt von KI-Agents, die Verantwortung für Merges/Reviews liegt beim menschlichen Repo-Owner. Saubere Trennung Inhalt vs. Approval.

### Setup beim ersten Klon
```bash
bash .claude/scripts/setup-bot-identity.sh
```

Das Skript ist **idempotent** — doppelt ausführen schadet nicht. Es zeigt vorher/nachher und betrifft nur die *repo-lokale* Git-Config (`.git/config`). Deine globale Identität in `~/.gitconfig` bleibt unangetastet.

### Was es macht
- Setzt `git config --local user.name "claude-bot"`
- Setzt `git config --local user.email "noreply@anthropic.com"`

### Konsequenz
- Künftige Commits in diesem Repo: Author = `claude-bot`.
- PRs (`gh pr create`) und Merges (`gh pr merge`) werden weiterhin unter dem GitHub-Account markiert, der `gh` authentifiziert hat — das ist serverseitig und vom Setup-Skript nicht beeinflussbar.
- Wenn ein Mensch ausnahmsweise unter eigenem Namen committen möchte:
  ```bash
  git -c user.name="Dein Name" -c user.email="dein@email" commit -m "..."
  ```

### Co-Author bleibt
Der `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`-Footer wird weiterhin pro Commit gesetzt — er nennt das konkrete Modell, was über Zeit nützlich ist (Modell-Versionen ändern sich).

## Lokaler Test der Skripte

```bash
bash .claude/scripts/kauzruf.sh              # leere Ordner als optionales Todo
bash .claude/scripts/setup-bot-identity.sh   # Bot-Identität für Commits setzen
```

Wenn keine leeren Ordner da sind, gibt `kauzruf.sh` stillschweigend nichts aus — das ist Absicht.
