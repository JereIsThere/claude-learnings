# Databases Intermediate 🟡

Indexe, JOINs, Transaktionen, und Query-Optimierung.

## Konzepte

| Thema | Was |
|-------|-----|
| Index | Beschleunigt Lesezugriffe |
| EXPLAIN | Query-Plan analysieren |
| Transaktion | ACID-konforme Operationen |
| JOIN-Typen | INNER, LEFT, RIGHT, FULL |
| Normalisierung | Redundanz eliminieren (1NF–3NF) |
| Foreign Key | Referentielle Integrität |

## 📚 Ressourcen

1. **[Use The Index, Luke!](https://use-the-index-luke.com/)** ⭐ Index-Optimierung, kostenlos
2. **[PostgreSQL – EXPLAIN Tutorial](https://www.postgresql.org/docs/current/using-explain.html)**
3. **[SQLBolt – Advanced Queries](https://sqlbolt.com/)**
4. **[Database Normalization Guide](https://www.guru99.com/database-normalization.html)**

## 💡 Index-Grundregeln

```sql
-- Index auf häufig gefilterte Spalte
CREATE INDEX idx_users_email ON users(email);

-- Composite Index (Reihenfolge wichtig!)
CREATE INDEX idx_orders ON orders(user_id, created_at);

-- Query-Plan anschauen
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@ex.com';
```

## ACID Transaktionen

```sql
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- oder ROLLBACK bei Fehler
```

## 🎯 Checkliste

- [ ] Ich weiß wann und wo Indexe helfen
- [ ] Ich kann EXPLAIN/EXPLAIN ANALYZE lesen
- [ ] Ich verstehe ACID-Transaktionen
- [ ] Ich kenne die JOIN-Typen auswendig

## Weiter: [Advanced](../advanced/resources.md)
