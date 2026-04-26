# Statistik Intermediate 🟡

Hypothesis Testing, Bayes, Regression, und A/B Testing.

## Konzepte

| Thema | Was |
|-------|-----|
| Hypothesis Testing | H₀ vs. H₁, Fehler Typ I/II |
| t-Test | Mittelwerte vergleichen |
| Chi²-Test | Kategoriale Variablen |
| Bayes Theorem | P(A\|B) = P(B\|A)·P(A) / P(B) |
| Lineare Regression | Linearer Zusammenhang modellieren |
| Korrelation vs. Kausalität | Einer der häufigsten Fehler |

## 📚 Ressourcen

1. **[StatQuest – Hypothesis Testing](https://www.youtube.com/@statquest)** ⭐
2. **[Bayesian Methods for Hackers (GitHub, kostenlos)](https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers)** ⭐
3. **[An Introduction to Statistical Learning (Buch, kostenlos)](https://www.statlearning.com/)** Goldstandard
4. **[Evan Miller – A/B Testing](https://www.evanmiller.org/ab-testing/)** Praxis

## 💡 Einfacher t-Test

```python
from scipy import stats

control = [102, 98, 105, 97, 103]
treatment = [110, 108, 112, 109, 115]

t_stat, p_value = stats.ttest_ind(control, treatment)
print(f"p-value: {p_value:.4f}")

if p_value < 0.05:
    print("Signifikant! Unterschied ist nicht zufällig.")
else:
    print("Nicht signifikant. H₀ beibehalten.")
```

## Bayes-Intuition

```
Prior:    Was ich vorher glaube
Likelihood: Was die Daten sagen
Posterior: Updated Überzeugung nach Daten

P(H|D) ∝ P(D|H) · P(H)
```

## 🎯 Checkliste

- [ ] Ich verstehe p-Werte richtig (nicht als "Wahrscheinlichkeit dass H₀ wahr")
- [ ] Ich kann einen t-Test durchführen und interpretieren
- [ ] Ich kenne Bayes Theorem und kann es anwenden
- [ ] Ich verstehe Korrelation ≠ Kausalität

## Weiter: [Advanced](../advanced/resources.md)
