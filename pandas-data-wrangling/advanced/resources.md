# Pandas Advanced 🔴

Performance, Polars, Dask, und großes Datenvolumen.

## Themen

| Thema | Was |
|-------|-----|
| Vectorization | Loops durch Array-Ops ersetzen |
| Chunked Reading | Große Files stückweise laden |
| Polars | Rust-basiertes Pandas-Alternative (10–100× schneller) |
| Dask | Pandas für Daten die nicht in RAM passen |
| Memory Optimization | Dtypes reduzieren |
| `eval()` / `query()` | Pandas-Ausdrücke optimiert auswerten |

## 📚 Ressourcen

1. **[Polars User Guide](https://docs.pola.rs/)** ⭐ Zukunft der Datenverarbeitung
2. **[Dask Documentation](https://docs.dask.org/)** Für Big Data
3. **[Pandas Performance Tips (Real Python)](https://realpython.com/fast-flexible-pandas/)**
4. **[Apache Arrow](https://arrow.apache.org/)** Columnar Memory Format

## 💡 Pandas vs. Polars

```python
# Pandas
df.groupby("city")["revenue"].sum()

# Polars (lazy evaluation, deutlich schneller)
import polars as pl
df = pl.scan_csv("data.csv")  # lazy!
result = (df
    .group_by("city")
    .agg(pl.col("revenue").sum())
    .collect()  # Erst hier wird berechnet
)
```

## Memory optimieren

```python
# Dtypes checken
df.memory_usage(deep=True)

# Kategorische Spalten (oft 10× kleiner)
df["city"] = df["city"].astype("category")

# Int64 → Int32 wenn Werte klein
df["count"] = df["count"].astype("int32")
```

## 🎯 Checkliste

- [ ] Ich nutze Vectorization statt for-loops
- [ ] Ich kann große Dateien chunked verarbeiten
- [ ] Ich kenne Polars und weiß wann es Pandas schlägt
- [ ] Ich optimiere Dtypes für Memory-Effizienz
