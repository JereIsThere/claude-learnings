# Pandas Intermediate 🟡

GroupBy, Merge/Join, Pivot Tables, und String-Operationen.

## Konzepte

| Operation | Was |
|-----------|-----|
| `groupby` | Daten gruppieren + aggregieren |
| `merge` | DataFrames zusammenführen (wie SQL JOIN) |
| `pivot_table` | Kreuztabelle erstellen |
| `apply` | Funktion auf jede Zeile/Spalte anwenden |
| `str` Accessor | String-Operationen auf Spalten |
| `pd.to_datetime` | Strings in Datumswerte |

## 📚 Ressourcen

1. **[Pandas GroupBy Guide (Real Python)](https://realpython.com/pandas-groupby/)** ⭐
2. **[Effective Pandas – Matt Harrison](https://store.metasnake.com/effective-pandas-book)** Sehr empfehlenswert
3. **[Pandas Merge, Join, Concat](https://pandas.pydata.org/docs/user_guide/merging.html)**
4. **[Polars vs Pandas](https://pola.rs/)** Schnellere Alternative kennenlernen

## 💡 GroupBy Pattern

```python
# Umsatz pro Stadt und Monat
result = (df
    .assign(month=df["date"].dt.to_period("M"))
    .groupby(["city", "month"])
    .agg(
        total_revenue=("revenue", "sum"),
        order_count=("id", "count"),
        avg_order=("revenue", "mean")
    )
    .reset_index()
    .sort_values("total_revenue", ascending=False)
)
```

## Merge (JOIN Äquivalent)

```python
# Inner Join
pd.merge(orders, customers, on="customer_id")

# Left Join
pd.merge(orders, customers, on="customer_id", how="left")
```

## 🎯 Checkliste

- [ ] Ich kann groupby mit mehreren Aggregationen nutzen
- [ ] Ich verstehe alle Merge-Typen (inner, left, right, outer)
- [ ] Ich kann Zeitreihen mit datetime-Index bearbeiten
- [ ] Ich kann apply() für komplexe Transformationen nutzen

## Weiter: [Advanced](../advanced/resources.md)
