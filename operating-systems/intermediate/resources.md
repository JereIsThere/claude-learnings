# Operating Systems Intermediate 🟡

Deadlocks, Speicherverwaltung, Dateisysteme.

## Konzepte

| Thema | Was |
|-------|-----|
| Deadlock | Prozesse warten gegenseitig aufeinander |
| Semaphore | Synchronisations-Primitiv |
| Virtual Memory | Mehr RAM durch Paging simulieren |
| Page Fault | Zugriff auf ausgelagerte Seite |
| Inode | Metadaten einer Datei im Dateisystem |
| System Call | Userspace → Kernelspace Aufruf |

## 📚 Ressourcen

1. **[Three Easy Pieces – Concurrency](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf)** ⭐
2. **[Linux Kernel – How It Works](https://www.kernel.org/doc/html/latest/)**
3. **[Julia Evans – Linux Internals Zines](https://wizardzines.com/)** ⭐ Sehr zugänglich
4. **[OSDev Wiki](https://wiki.osdev.org/)** Für Eigenbau-OS Enthusiasten

## 💡 Deadlock-Bedingungen (alle 4 müssen gelten)

```
1. Mutual Exclusion   – Ressource kann nicht geteilt werden
2. Hold and Wait      – Prozess hält Ressource und wartet auf weitere
3. No Preemption      – Ressource kann nicht entzogen werden
4. Circular Wait      – Zirkuläre Abhängigkeitskette
```

## Python Threading + Lock

```python
import threading

lock = threading.Lock()
counter = 0

def increment():
    global counter
    with lock:       # Mutual Exclusion
        counter += 1

threads = [threading.Thread(target=increment) for _ in range(1000)]
[t.start() for t in threads]
[t.join()  for t in threads]
print(counter)  # Immer 1000
```

## 🎯 Checkliste

- [ ] Ich kann alle 4 Deadlock-Bedingungen nennen
- [ ] Ich verstehe den Unterschied Mutex vs. Semaphore
- [ ] Ich kann Virtual Memory erklären
- [ ] Ich verstehe was ein System Call ist

## Weiter: [Advanced](../advanced/resources.md)
