# Functional Programming Intermediate 🟡

Currying, Monaden, Funktoren, und Typsysteme.

## Konzepte

| Konzept | Was |
|---------|-----|
| Currying | f(a, b) → f(a)(b) |
| Partial Application | Funktion mit einem Argument vorbefüllen |
| Functor | Map-barer Container (z.B. Maybe) |
| Monad | Chainbarer Kontext (Maybe, Either, IO) |
| Lazy Evaluation | Nur berechnen wenn gebraucht |
| Algebraic Data Types | Sum Types & Product Types |

## 📚 Ressourcen

1. **[Learn You a Haskell (kostenlos)](http://learnyouahaskell.com/)** ⭐ Monaden intuitiv erklärt
2. **[Fantasy Land Spec (JavaScript)](https://github.com/fantasyland/fantasy-land)** FP-Interfaces in JS
3. **[Elm Guide](https://guide.elm-lang.org/)** FP im Web, sehr zugänglich
4. **[Functional Programming in Scala](https://www.manning.com/books/functional-programming-in-scala)** Rigoros

## 💡 Maybe Monad in Python

```python
class Maybe:
    def __init__(self, value):
        self.value = value
    
    def map(self, fn):
        if self.value is None:
            return Maybe(None)  # Kein Crash auf None!
        return Maybe(fn(self.value))
    
    def get_or(self, default):
        return self.value if self.value is not None else default

# Sicher verketten ohne if-None-Checks überall
result = (Maybe({"user": {"name": "Alice"}})
    .map(lambda x: x.get("user"))
    .map(lambda x: x.get("name"))
    .map(str.upper)
    .get_or("UNKNOWN"))
# → "ALICE"
```

## 🎯 Checkliste

- [ ] Ich verstehe Currying und Partial Application
- [ ] Ich kenne das Maybe/Option-Pattern
- [ ] Ich kann Monaden in eigenen Worten erklären
- [ ] Ich habe eine Sprache mit echtem Typsystem ausprobiert (Haskell/Elm)

## Weiter: [Advanced](../advanced/resources.md)
