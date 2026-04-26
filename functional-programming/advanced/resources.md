# Functional Programming Advanced 🔴

Category Theory, Dependent Types, und FP in der Produktion.

## Themen

| Thema | Was |
|-------|-----|
| Category Theory | Mathematische Grundlage von FP |
| Dependent Types | Typen, die von Werten abhängen (Idris, Agda) |
| Effect Systems | Seiteneffekte im Typsystem tracken |
| Free Monads | Programme als Datenstrukturen |
| CPS (Continuation Passing Style) | Kontrolle explizit übergeben |
| Property-Based Testing | Eigenschaften statt Beispiele testen |

## 📚 Ressourcen

1. **[Category Theory for Programmers – Bartosz Milewski](https://bartoszmilewski.com/2014/10/28/category-theory-for-programmers-the-preface/)** ⭐ Kostenlos, tiefgründig
2. **[Idris Language](https://www.idris-lang.org/)** Dependently typed FP
3. **[Hypothesis (Property-based Testing in Python)](https://hypothesis.readthedocs.io/)** ⭐ Sofort nutzbar
4. **[ZIO (Scala Effect System)](https://zio.dev/)** FP in der Produktion

## 💡 Property-Based Testing mit Hypothesis

```python
from hypothesis import given, strategies as st

@given(st.lists(st.integers()))
def test_reverse_is_idempotent(lst):
    # Für JEDE Liste die Hypothesis generiert:
    assert list(reversed(list(reversed(lst)))) == lst
    
@given(st.integers(), st.integers())
def test_addition_is_commutative(a, b):
    assert a + b == b + a  # Eigenschaft, nicht Beispiel
```

## 🎯 Checkliste

- [ ] Ich habe Property-Based Tests mit Hypothesis geschrieben
- [ ] Ich verstehe Category Theory Grundkonzepte (Objekte, Morphismen, Funktoren)
- [ ] Ich kenne Free Monads konzeptionell
- [ ] Ich kann CPS-Transformation erklären
