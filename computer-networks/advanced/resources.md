# Computer Networks Advanced 🔴

BGP, QUIC, Netzwerk-Programmierung, und Distributed Systems Networking.

## Themen

| Thema | Was |
|-------|-----|
| BGP | Routing zwischen Autonomen Systemen |
| QUIC / HTTP/3 | UDP-basiertes next-gen Protokoll |
| WebRTC | P2P Real-Time Communication |
| eBPF | Kernel-Level Netzwerk-Programmierung |
| Service Mesh | Istio, Envoy für Microservices |
| Anycast | Ein Ziel, viele Server |

## 📚 Ressourcen

1. **[The TCP/IP Guide (Online)](http://www.tcpipguide.com/)** Komplett kostenlos, extrem detailliert
2. **[Beej's Guide to Network Programming](https://beej.us/guide/bgnet/)** ⭐ C Sockets, kostenlos
3. **[QUIC Working Group (IETF)](https://quicwg.org/)** Offizielles Protokoll-Dokument
4. **[Julia Evans – How Traceroute Works](https://jvns.ca/)** Tiefe Dives in Netzwerk-Internals

## 💡 Raw Socket in Python

```python
import socket

# TCP Server
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('0.0.0.0', 8080))
server.listen(5)

conn, addr = server.accept()
data = conn.recv(1024)
conn.send(b"HTTP/1.1 200 OK\r\n\r\nHello!")
```

## 🎯 Checkliste

- [ ] Ich verstehe BGP auf hohem Niveau
- [ ] Ich kann einen TCP-Server in C oder Python schreiben
- [ ] Ich kenne QUIC und dessen Vorteile
- [ ] Ich verstehe wie ein CDN mit Anycast arbeitet
