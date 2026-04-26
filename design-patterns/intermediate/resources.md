# Design Patterns Intermediate 🟡

Strategy, Decorator, Adapter, Command und SOLID-Prinzipien.

## Patterns

| Pattern | Problem | Lösung |
|---------|---------|--------|
| Strategy | Algorithmus austauschen | Interface + konkrete Klassen |
| Decorator | Verhalten zur Laufzeit hinzufügen | Wrapper-Klassen |
| Adapter | Inkompatible Interfaces | Konverter-Klasse |
| Command | Aktion als Objekt kapseln | Execute/Undo Interface |
| Template Method | Algorithmus-Skelett festlegen | Abstrakte Basisklasse |

## 📚 Ressourcen

1. **[Refactoring Guru – alle Patterns](https://refactoring.guru/design-patterns)** ⭐
2. **[SOLID Principles in Python (Real Python)](https://realpython.com/solid-principles-python/)**
3. **[Head First Design Patterns (Buch)](https://www.oreilly.com/library/view/head-first-design/0596007124/)**

## 💡 Strategy Pattern

```python
from abc import ABC, abstractmethod

class SortStrategy(ABC):
    @abstractmethod
    def sort(self, data): pass

class BubbleSort(SortStrategy):
    def sort(self, data): return sorted(data)  # vereinfacht

class QuickSort(SortStrategy):
    def sort(self, data): return sorted(data, key=lambda x: x)

class Sorter:
    def __init__(self, strategy: SortStrategy):
        self.strategy = strategy
    
    def sort(self, data):
        return self.strategy.sort(data)
```

## SOLID in einem Satz pro Prinzip

- **S**: Eine Klasse, eine Aufgabe
- **O**: Offen für Erweiterung, geschlossen für Änderung
- **L**: Unterklassen müssen Oberklassen ersetzen können
- **I**: Kleine, spezifische Interfaces
- **D**: Abhängig von Abstraktionen, nicht Implementierungen

## 🎯 Checkliste

- [ ] Ich kann Strategy Pattern implementieren
- [ ] Ich verstehe alle SOLID-Prinzipien
- [ ] Ich erkenne Pattern-Verletzungen in Code
- [ ] Ich habe Decorator Pattern angewendet

## Weiter: [Advanced](../advanced/resources.md)
