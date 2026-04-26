# Databases Advanced 🔴

NoSQL, Sharding, Replikation, und CAP-Theorem.

## Themen

| Thema | Was |
|-------|-----|
| CAP-Theorem | Consistency, Availability, Partition Tolerance |
| Sharding | Horizontale Partitionierung |
| Replikation | Primary/Replica Setup |
| NoSQL | MongoDB, Redis, Cassandra |
| CQRS | Command Query Responsibility Segregation |
| Connection Pooling | DB-Verbindungen effizient verwalten |

## 📚 Ressourcen

1. **[Designing Data-Intensive Applications (Kleppmann)](https://dataintensive.net/)** ⭐ Das Standardwerk
2. **[MongoDB University (kostenlos)](https://university.mongodb.com/)**
3. **[Redis Docs – Data Types](https://redis.io/docs/data-types/)**
4. **[PlanetScale – How Sharding Works](https://planetscale.com/blog/)**

## 💡 Wann welche DB?

| Use Case | Empfehlung |
|----------|-----------|
| Transaktionen, Relations | PostgreSQL |
| Caching, Sessions | Redis |
| Flexible Dokumente | MongoDB |
| Write-heavy, distributed | Cassandra |
| Search | Elasticsearch |
| Analytics | ClickHouse / BigQuery |

## 🎯 Checkliste

- [ ] Ich verstehe CAP-Theorem und seine Kompromisse
- [ ] Ich kenne den Unterschied SQL vs. NoSQL
- [ ] Ich kann ein Primary-Replica Setup erklären
- [ ] Ich verstehe Connection Pooling
