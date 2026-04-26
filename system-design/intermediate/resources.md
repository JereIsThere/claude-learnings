# System Design Intermediate 🟡

Message Queues, Microservices, Rate Limiting, und Datenbank-Skalierung.

## Konzepte

| Thema | Was |
|-------|-----|
| Message Queue | Asynchrone Kommunikation (Kafka, RabbitMQ) |
| Microservices | Kleine, unabhängige Services |
| API Gateway | Einzelner Eintrittspunkt |
| Rate Limiting | Anfragen pro User/IP begrenzen |
| Database Sharding | Daten auf mehrere DBs aufteilen |
| Consistent Hashing | Sharding ohne massive Redistributionen |

## 📚 Ressourcen

1. **[ByteByteGo Newsletter](https://blog.bytebytego.com/)** ⭐ Tiefe Dives mit Diagrammen
2. **[Martin Fowler – Microservices](https://martinfowler.com/articles/microservices.html)** Originalartikel
3. **[Apache Kafka Intro](https://kafka.apache.org/intro)** Message Queue Standard
4. **[AWS Architecture Center](https://aws.amazon.com/architecture/)** Reale Referenz-Architekturen

## 💡 Wann Microservices NICHT?

```
Monolith zuerst. Microservices wenn:
✓ Team > 8 Personen pro Service
✓ Unterschiedliche Skalierungsanforderungen
✓ Unterschiedliche Release-Zyklen
✓ Klare Domain-Grenzen

Nicht wenn:
✗ Kleines Team
✗ Unklar wo die Grenzen sind
✗ Latenz zwischen Services ist Problem
```

## Rate Limiting Strategien

- **Token Bucket**: Tokens akkumulieren sich bis max
- **Sliding Window**: Requests in letzten N Sekunden zählen
- **Fixed Window**: Simple, aber susceptible zu burst

## 🎯 Checkliste

- [ ] Ich kenne mindestens eine Message Queue (Kafka/RabbitMQ)
- [ ] Ich verstehe Service Discovery
- [ ] Ich kann Rate Limiting implementieren
- [ ] Ich kenne Vor- und Nachteile von Microservices

## Weiter: [Advanced](../advanced/resources.md)
