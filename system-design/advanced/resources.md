# System Design Advanced 🔴

Distributed Consensus, Event Sourcing, und Real-World Trade-offs.

## Themen

| Thema | Was |
|-------|-----|
| Raft / Paxos | Distributed Consensus Algorithmen |
| Event Sourcing | State als Ereignislog |
| Sagas | Verteilte Transaktionen ohne 2PC |
| CRDT | Conflict-free Replicated Data Types |
| Chaos Engineering | Systeme absichtlich brechen |
| SLO/SLA/SLI | Reliability-Metriken |

## 📚 Ressourcen

1. **[Designing Data-Intensive Applications – Kleppmann](https://dataintensive.net/)** ⭐⭐ Pflichtbuch
2. **[The Raft Consensus Algorithm](https://raft.github.io/)** Mit Visual-Demo!
3. **[Netflix Tech Blog](https://netflixtechblog.com/)** ⭐ Real-World Fallstudien
4. **[Chaos Engineering – Principles](https://principlesofchaos.org/)**

## 💡 Interview-Framework: System Design

```
1. Requirements klären (5 min)
   – Funktional: Was soll es tun?
   – Non-funktional: Scale, Latenz, Availability?

2. Grobe Schätzung (2 min)
   – DAU, Requests/s, Storage/Tag

3. High-Level Design (10 min)
   – Komponenten skizzieren

4. Deep Dive (15 min)
   – Bottlenecks, kritische Pfade

5. Trade-offs (5 min)
   – Was würde ich anders machen?
```

## 🎯 Checkliste

- [ ] Ich kann Raft auf hohem Niveau erklären
- [ ] Ich verstehe Event Sourcing und CQRS zusammen
- [ ] Ich kann ein System Design Interview strukturiert durchführen
- [ ] Ich kenne SLO/SLA/SLI Unterschiede
