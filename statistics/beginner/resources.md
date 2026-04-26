# Statistik für Beginner 🟢

Deskriptive Statistik, Wahrscheinlichkeit, und erste Verteilungen.

## Konzepte

| Begriff | Was |
|---------|-----|
| Mean/Median/Mode | Lagemaße einer Verteilung |
| Varianz / Stddev | Streuungsmaße |
| Wahrscheinlichkeit | P(A) zwischen 0 und 1 |
| Normalverteilung | Glockenkurve, überall in der Natur |
| p-Wert | Wahrscheinlichkeit unter H₀ |
| Konfidenzintervall | Bereich um den Schätzer |

## 📚 Ressourcen

1. **[StatQuest with Josh Starmer (YouTube)](https://www.youtube.com/@statquest)** ⭐ Beste Statistik-Videos überhaupt
2. **[Khan Academy – Statistics](https://www.khanacademy.org/math/statistics-probability)** Interaktiv, kostenlos
3. **[Think Stats (Buch, kostenlos)](https://greenteapress.com/thinkstats2/)** Python-basiert
4. **[Seeing Theory (Visual)](https://seeing-theory.brown.edu/)** ⭐ Visualisierte Statistik

## 💡 Grundstatistik in Python

```python
import numpy as np
import scipy.stats as stats

data = [2, 4, 4, 4, 5, 5, 7, 9]

print(f"Mean:   {np.mean(data):.2f}")      # 5.0
print(f"Median: {np.median(data):.2f}")    # 4.5
print(f"Std:    {np.std(data):.2f}")       # 1.85
print(f"Var:    {np.var(data):.2f}")       # 3.43

# Normalverteilung
x = np.linspace(-4, 4, 100)
pdf = stats.norm.pdf(x, loc=0, scale=1)  # μ=0, σ=1
```

## 🎯 Checkliste

- [ ] Ich kann Mean, Median, Stddev erklären und berechnen
- [ ] Ich verstehe Normalverteilung
- [ ] Ich kenne den Unterschied Wahrscheinlichkeit vs. Häufigkeit
- [ ] Ich habe StatQuest-Videos angeschaut

## Weiter: [Intermediate](../intermediate/resources.md)
