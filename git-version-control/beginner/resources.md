# Git für Beginner 🟢

Commits, Branches, und der grundlegende Workflow.

## Konzepte

| Begriff | Was |
|---------|-----|
| Repository | Ordner mit Git-Tracking |
| Commit | Gespeicherter Snapshot |
| Branch | Parallele Arbeitskopie |
| Merge | Branches zusammenführen |
| Remote | Server-Kopie (z.B. GitHub) |
| Clone | Repo herunterladen |
| Pull | Remote-Änderungen holen |
| Push | Lokal → Remote senden |

## 📚 Ressourcen

1. **[The Odin Project – Git Basics](https://www.theodinproject.com/lessons/foundations-git-basics)** ⭐ Interaktiv, praxisnah
2. **[Git Official – Getting Started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)** Offizielle Doku
3. **[Learn Git Branching](https://learngitbranching.js.org/)** ⭐ Visualisiertes interaktives Tutorial
4. **[GitHub Skills](https://skills.github.com/)** Geführte Hands-on Kurse
5. **[Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)** Sehr gut erklärt

## 💡 Der tägliche Workflow

```bash
git status                  # Was hat sich geändert?
git add datei.py            # Datei stagen
git add .                   # Alles stagen
git commit -m "Beschreibung" # Snapshot erstellen
git push                    # Auf Remote pushen
git pull                    # Änderungen holen
```

## 🎯 Checkliste

- [ ] Ich kann ein Repo initialisieren (`git init`)
- [ ] Ich kann committen und pushen
- [ ] Ich kann einen Branch erstellen und wechseln
- [ ] Ich verstehe `git status` und `git log`

## Weiter: [Intermediate](../intermediate/resources.md)
