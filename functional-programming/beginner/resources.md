# Functional Programming Beginner 🟢

Pure Functions, Immutability, und Higher-Order Functions.

## Konzepte

| Konzept | Was |
|---------|-----|
| Pure Function | Kein Side-Effect, gleicher Input → gleicher Output |
| Immutability | Daten nicht verändern, neue erstellen |
| First-class Functions | Funktionen als Werte behandeln |
| Higher-Order Function | Nimmt/gibt Funktionen zurück |
| map/filter/reduce | Kernoperationen auf Collections |
| Recursion | Funktion ruft sich selbst auf |

## 📚 Ressourcen

1. **[Professor Frisby's Mostly Adequate Guide (kostenlos)](https://mostly-adequate.gitbook.io/mostly-adequate-guide/)** ⭐ JavaScript FP
2. **[Haskell in Y Minutes](https://learnxinyminutes.com/docs/haskell/)** Sprache die FP erzwingt
3. **[Functional Python (Real Python)](https://realpython.com/python-functional-programming/)** FP in Python
4. **[Structure and Interpretation of Computer Programs (SICP)](https://mitpress.mit.edu/sites/default/files/sicp/index.html)** Klassiker, kostenlos

## 💡 FP in Python

```python
# Imperativ (mit Side-Effects)
numbers = [1, 2, 3, 4, 5]
result = []
for n in numbers:
    if n % 2 == 0:
        result.append(n * 2)

# Funktional (pure, keine Mutation)
result = list(map(lambda x: x * 2,
                  filter(lambda x: x % 2 == 0, numbers)))

# Noch klarer mit List Comprehension
result = [x * 2 for x in numbers if x % 2 == 0]

# reduce: summiere alle
from functools import reduce
total = reduce(lambda acc, x: acc + x, numbers, 0)
```

## 🎯 Checkliste

- [ ] Ich kann pure Functions von impure unterscheiden
- [ ] Ich nutze map/filter/reduce
- [ ] Ich schreibe rekursive Funktionen
- [ ] Ich vermeide globalen State

## Weiter: [Intermediate](../intermediate/resources.md)
