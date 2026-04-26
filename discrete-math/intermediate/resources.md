# Diskrete Mathematik Intermediate 🟡

Graphentheorie, Rekurrenzrelationen, und Beweise.

## Konzepte

| Thema | Was |
|-------|-----|
| Graph | Knoten + Kanten |
| Baum | Zusammenhängender Graph ohne Zykel |
| Eulerpfad | Jede Kante genau einmal |
| Hamiltonpfad | Jeden Knoten genau einmal |
| Rekurrenzrelation | Folge durch vorherige Glieder definiert |
| Induktionsbeweis | Basis + Induktionsschritt |

## 📚 Ressourcen

1. **[Graph Theory (YouTube – Sarada Herke)](https://www.youtube.com/c/saradaherke)** ⭐
2. **[MIT – Mathematics for CS – Proofs](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/)**
3. **[Discrete Mathematics and Its Applications – Rosen](https://www.mheducation.com/highered/product/discrete-mathematics-its-applications-rosen/)**

## 💡 Graph in Python

```python
# Adjazenzliste
graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C"]
}

# BFS (Breitensuche)
from collections import deque

def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    while queue:
        node = queue.popleft()
        print(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```

## Rekurrenzrelationen

```
Fibonacci:  F(n) = F(n-1) + F(n-2),  F(0)=0, F(1)=1
Merge Sort: T(n) = 2T(n/2) + O(n)   → O(n log n)
```

## 🎯 Checkliste

- [ ] Ich kann BFS und DFS implementieren
- [ ] Ich verstehe Eulerpfad vs. Hamiltonpfad
- [ ] Ich kann einfache Induktionsbeweise führen
- [ ] Ich kenne Master-Theorem für Rekurrenzrelationen

## Weiter: [Advanced](../advanced/resources.md)
