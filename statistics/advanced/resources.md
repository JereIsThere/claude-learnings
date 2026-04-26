# Statistik Advanced 🔴

Causal Inference, Bayesian Networks, und ML-Statistik.

## Themen

| Thema | Was |
|-------|-----|
| Causal Inference | Kausale statt korrelative Schlüsse |
| DAGs | Directed Acyclic Graphs für Kausalmodelle |
| Bootstrapping | Konfidenzintervalle ohne Annahmen |
| MCMC | Bayesian Posterior samplen |
| Survival Analysis | Zeit-bis-Ereignis Modelle |
| Multiple Testing | Bonferroni, FDR-Korrektur |

## 📚 Ressourcen

1. **[The Book of Why – Judea Pearl](http://bayes.cs.ucla.edu/WHY/)** ⭐ Causal Inference Bibel
2. **[Statistical Rethinking – Richard McElreath](https://xcelab.net/rm/statistical-rethinking/)** ⭐ Bayesian Data Analysis
3. **[PyMC – Probabilistic Programming](https://www.pymc.io/welcome.html)** Bayes in Python
4. **[Causal Inference: The Mixtape](https://mixtape.scunning.com/)** Kostenlos online

## 💡 Bootstrapping

```python
import numpy as np

data = [2.3, 3.1, 2.7, 4.0, 3.5, 2.9]

# 10.000 Bootstrap-Stichproben
bootstrap_means = []
for _ in range(10_000):
    sample = np.random.choice(data, size=len(data), replace=True)
    bootstrap_means.append(np.mean(sample))

ci_low  = np.percentile(bootstrap_means, 2.5)
ci_high = np.percentile(bootstrap_means, 97.5)
print(f"95% CI: [{ci_low:.2f}, {ci_high:.2f}]")
```

## 🎯 Checkliste

- [ ] Ich verstehe Causal Inference und DAGs
- [ ] Ich kann Bootstrapping implementieren
- [ ] Ich kenne MCMC auf konzeptioneller Ebene
- [ ] Ich weiß wann Multiple-Testing Korrekturen nötig sind
