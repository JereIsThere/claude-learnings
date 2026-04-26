# Git Advanced 🔴

Hooks, Submodules, Worktrees, und Git-Interna.

## Themen

| Thema | Was |
|-------|-----|
| Git Hooks | Skripte bei Events (pre-commit, post-push) |
| Submodules | Repos in Repos |
| Worktrees | Mehrere Branches gleichzeitig auschecken |
| Git Internals | Blobs, Trees, Commits als Objekte |
| Reflog | Gelöschte Commits wiederherstellen |
| Sparse Checkout | Nur Teile eines Repos auschecken |

## 📚 Ressourcen

1. **[Git Book – Git Internals](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain)** ⭐ Wie Git wirklich funktioniert
2. **[GitHub – Managing Large Repos](https://github.blog/engineering/)**
3. **[Git Hooks Guide (Atlassian)](https://www.atlassian.com/git/tutorials/git-hooks)**
4. **[Pre-commit Framework](https://pre-commit.com/)** Hooks einfach verwalten

## 💡 Praktische Hooks

```bash
# .git/hooks/pre-commit (ausführbar machen!)
#!/bin/sh
python -m pytest tests/ || exit 1  # Tests müssen grün sein
```

## Nützliche Aliase

```bash
git config --global alias.lg "log --graph --oneline --all"
git config --global alias.undo "reset HEAD~1 --soft"
```

## 🎯 Checkliste

- [ ] Ich habe einen pre-commit Hook eingerichtet
- [ ] Ich verstehe wie Git Objekte intern speichert
- [ ] Ich kann `git worktree` nutzen
- [ ] Ich kann mit `git reflog` Commits wiederherstellen
