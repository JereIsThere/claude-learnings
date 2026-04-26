# Computer Networks Intermediate 🟡

TCP tiefer, TLS/HTTPS, Load Balancing, CDNs.

## Konzepte

| Thema | Was |
|-------|-----|
| TLS Handshake | Verschlüsselungs-Aushandlung |
| HTTP/2 & HTTP/3 | Multiplexing, QUIC |
| Load Balancer | Traffic verteilen |
| CDN | Inhalte näher zum User |
| NAT | Private IPs → Public IP |
| Subnet | Netzwerksegmentierung |

## 📚 Ressourcen

1. **[Julia Evans – Networking Zines](https://wizardzines.com/zines/networking/)** ⭐ Perfekt illustriert
2. **[High Performance Browser Networking (O'Reilly, kostenlos)](https://hpbn.co/)** ⭐ Goldstandard
3. **[Cloudflare Blog](https://blog.cloudflare.com/)** Sehr technische, reale Beispiele
4. **[Computer Networking: A Top-Down Approach](https://gaia.cs.umass.edu/kurose_ross/)** Kapitel 3–5

## 💡 TLS Handshake (vereinfacht)

```
Client → Server: "Welche Cipher Suites supportest du?"
Server → Client: Zertifikat + Public Key
Client → Server: Session Key (mit Public Key verschlüsselt)
Beide:           Kommunizieren mit Session Key (symmetrisch)
```

## HTTP/2 Vorteile vs HTTP/1.1

- **Multiplexing**: Mehrere Requests über eine Verbindung
- **Header Compression**: Weniger Overhead
- **Server Push**: Server schickt Ressourcen proaktiv

## 🎯 Checkliste

- [ ] Ich kann TLS Handshake erklären
- [ ] Ich verstehe HTTP/2 Multiplexing
- [ ] Ich kenne den Unterschied TCP vs. UDP (wirklich)
- [ ] Ich verstehe wie Load Balancer arbeiten

## Weiter: [Advanced](../advanced/resources.md)
