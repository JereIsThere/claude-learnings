# Pandas Beginner 🟢

DataFrames laden, inspizieren, filtern, und transformieren.

## Konzepte

| Begriff | Was |
|---------|-----|
| DataFrame | 2D-Tabelle (Rows × Columns) |
| Series | Eine Spalte/Zeile |
| Index | Zeilenbezeichner |
| NaN | Fehlender Wert |
| dtype | Datentyp einer Spalte |

## 📚 Ressourcen

1. **[Pandas Official Tutorial](https://pandas.pydata.org/docs/getting_started/intro_tutorials/)** ⭐
2. **[Kaggle – Pandas Course](https://www.kaggle.com/learn/pandas)** ⭐ Kostenlos, sehr praxisnah
3. **[Real Python – Pandas Tutorial](https://realpython.com/pandas-dataframe/)**
4. **[Pandas Cheat Sheet (DataCamp)](https://www.datacamp.com/cheat-sheet/pandas-cheat-sheet-for-data-science-in-python)**

## 💡 Die wichtigsten Befehle

```python
import pandas as pd

df = pd.read_csv("data.csv")

# Überblick
df.head(10)        # Erste 10 Zeilen
df.info()          # Dtypes, NaN-Counts
df.describe()      # Statistiken für numerische Spalten
df.shape           # (rows, cols)

# Filtern
df[df["age"] > 25]                  # Zeilen filtern
df[df["city"].isin(["Berlin", "HH"])]
df.loc[0:5, ["name", "age"]]        # loc: Label-based

# Fehlende Werte
df.isnull().sum()                   # NaN pro Spalte
df.fillna(0)                        # NaN ersetzen
df.dropna()                         # Zeilen mit NaN löschen
```

## 🎯 Checkliste

- [ ] Ich kann CSV/Excel/JSON in einen DataFrame laden
- [ ] Ich kann Spalten filtern und auswählen
- [ ] Ich verstehe den Unterschied loc vs. iloc
- [ ] Ich kann mit NaN-Werten umgehen

## Weiter: [Intermediate](../intermediate/resources.md)
