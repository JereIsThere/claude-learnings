# Operating Systems Advanced 🔴

Kernel-Entwicklung, eBPF, und OS-Optimierung.

## Themen

| Thema | Was |
|-------|-----|
| Kernel Modules | Kernel zur Laufzeit erweitern |
| eBPF | Programme im Kernel ausführen (sicher) |
| NUMA | Non-Uniform Memory Access bei multi-CPU |
| io_uring | Moderne async I/O in Linux |
| CGroups | Ressourcen für Prozessgruppen begrenzen |
| Namespaces | Isolation (Basis für Container) |

## 📚 Ressourcen

1. **[Linux Device Drivers (Free Book)](https://lwn.net/Kernel/LDD3/)** ⭐
2. **[eBPF.io](https://ebpf.io/)** ⭐ Alles über eBPF
3. **[Operating System: Three Easy Pieces (komplett)](https://pages.cs.wisc.edu/~remzi/OSTEP/)** Kompletter Kurs
4. **[xv6 – MIT Teaching OS](https://github.com/mit-pdos/xv6-public)** Kleines OS zum Studieren

## 💡 Container = Namespaces + CGroups

```bash
# Namespaces isolieren: PID, Network, Mount, User...
unshare --pid --fork --mount-proc /bin/bash

# CGroups begrenzen: CPU, Memory, I/O
echo 100M > /sys/fs/cgroup/memory/mygroup/memory.limit_in_bytes
```

## 🎯 Checkliste

- [ ] Ich verstehe wie Container intern funktionieren
- [ ] Ich kenne eBPF und seinen Anwendungsbereich
- [ ] Ich habe ein einfaches Kernel-Modul geschrieben
- [ ] Ich verstehe NUMA und seine Performance-Implikationen
