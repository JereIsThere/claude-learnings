# Git Intermediate 🟡

Rebasing, Cherry-Picking, Merge-Konflikte lösen, und saubere Commits.

## Konzepte

| Befehl | Was |
|--------|-----|
| `git rebase` | Commit-History umschreiben |
| `git cherry-pick` | Einzelnen Commit übernehmen |
| `git stash` | Änderungen temporär parken |
| `git reset` | Commits rückgängig machen |
| `git bisect` | Buggy Commit binär suchen |
| `git blame` | Wer hat Zeile geändert? |

## 📚 Ressourcen

1. **[Atlassian – Merging vs. Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)** ⭐
2. **[Git Book – Branching Workflows](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)**
3. **[Oh Shit, Git!](https://ohshitgit.com/)** ⭐ Wenn etwas schiefläuft
4. **[Conventional Commits](https://www.conventionalcommits.org/)** Commit-Messages standardisieren

## 💡 Rebase vs. Merge

```bash
# Merge: erstellt einen Merge-Commit
git merge feature-branch

# Rebase: fügt Commits linear an (sauberere History)
git rebase main

# Interaktives Rebase: Commits umschreiben/squashen
git rebase -i HEAD~3
```

## Git Workflows

- **Feature Branch Workflow**: Ein Branch pro Feature, PR → Main
- **Gitflow**: develop, release, hotfix Branches
- **Trunk-Based**: Direkt auf Main mit Feature-Flags

## 🎯 Checkliste

- [ ] Ich kann Merge-Konflikte lösen
- [ ] Ich verstehe `git rebase` vs. `git merge`
- [ ] Ich nutze `git stash` effektiv
- [ ] Ich kann mit `git reset` Fehler beheben

## Weiter: [Advanced](../advanced/resources.md)
