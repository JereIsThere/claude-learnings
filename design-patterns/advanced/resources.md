# Design Patterns Advanced 🔴

Architekturmuster, Event Sourcing, CQRS, und Microservice-Patterns.

## Themen

| Muster | Was |
|--------|-----|
| Event Sourcing | State als Ereignisfolge speichern |
| CQRS | Read/Write-Modell trennen |
| Saga Pattern | Verteilte Transaktionen |
| Circuit Breaker | Fehler isolieren |
| Domain-Driven Design | Fachdomäne zuerst |
| Hexagonal Architecture | Port/Adapter Pattern |

## 📚 Ressourcen

1. **[Martin Fowler – Patterns of Enterprise Application Architecture](https://martinfowler.com/eaaCatalog/)** ⭐
2. **[Microsoft – Cloud Design Patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/)**
3. **[DDD Community Resources](https://dddcommunity.org/)**
4. **[Refactoring Guru – Architektur](https://refactoring.guru/)**

## 💡 Circuit Breaker

```python
class CircuitBreaker:
    def __init__(self, failure_threshold=5):
        self.failures = 0
        self.threshold = failure_threshold
        self.open = False
    
    def call(self, func, *args):
        if self.open:
            raise Exception("Circuit is OPEN — fast fail")
        try:
            result = func(*args)
            self.failures = 0
            return result
        except Exception:
            self.failures += 1
            if self.failures >= self.threshold:
                self.open = True
            raise
```

## 🎯 Checkliste

- [ ] Ich verstehe Event Sourcing und seine Vor-/Nachteile
- [ ] Ich kenne CQRS und wann es sinnvoll ist
- [ ] Ich kann Circuit Breaker erklären und implementieren
- [ ] Ich verstehe Hexagonal Architecture
