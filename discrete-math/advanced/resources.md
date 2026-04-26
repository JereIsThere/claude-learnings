# Diskrete Mathematik Advanced 🔴

NP-Vollständigkeit, Kryptographische Grundlagen, und Formale Sprachen.

## Themen

| Thema | Was |
|-------|-----|
| P vs. NP | Das Millennium-Problem |
| NP-vollständig | Schwerste Probleme in NP |
| Reduktion | Problem A auf B reduzieren |
| Reguläre Sprachen | Erkannt von endlichen Automaten |
| Kontextfreie Sprachen | Erkannt von Kellerautomaten |
| Turing Machine | Universelles Berechnungsmodell |

## 📚 Ressourcen

1. **[Introduction to the Theory of Computation – Sipser](https://www.cengage.com/c/introduction-to-the-theory-of-computation-3e-sipser/)** ⭐ Standardwerk
2. **[P vs. NP Problem (Clay Math)](https://www.claymath.org/millennium/p-vs-np/)** Das Problem selbst
3. **[Automata Theory (Stanford Coursera)](https://www.coursera.org/learn/automata)**
4. **[MIT – Theory of Computation](https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/)**

## 💡 Warum P vs. NP so wichtig ist

```
P:  Probleme die effizient (polynomial) lösbar sind
NP: Probleme deren Lösung effizient verifizierbar ist

Wenn P = NP:
  - RSA-Verschlüsselung bricht zusammen (Faktorisierung in P)
  - Protein-Faltung, Optimierung... alles effizient lösbar
  - Die meisten Kryptographen glauben: P ≠ NP

NP-vollständige Probleme (jedes kann auf alle anderen reduziert werden):
  - SAT (Boolean Satisfiability)
  - Traveling Salesman
  - Graph Coloring
  - Rucksack-Problem
```

## 🎯 Checkliste

- [ ] Ich verstehe den Unterschied P, NP, NP-vollständig, NP-schwer
- [ ] Ich kann eine einfache Reduktion erklären
- [ ] Ich kenne reguläre Ausdrücke und endliche Automaten (Zusammenhang!)
- [ ] Ich kann eine Turing Machine konzeptionell beschreiben
