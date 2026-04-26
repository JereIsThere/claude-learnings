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

## Lokaler Test des Kauzrufs

```bash
bash .claude/scripts/kauzruf.sh
```

Wenn keine leeren Ordner da sind, gibt das Skript stillschweigend nichts aus — das ist Absicht.
