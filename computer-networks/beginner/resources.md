# Computer Networks Beginner 🟢

Was passiert wenn du eine URL eintippst? HTTP, TCP, DNS.

## Konzepte

| Begriff | Was |
|---------|-----|
| IP-Adresse | Eindeutige Adresse eines Geräts |
| DNS | Übersetzt Domain → IP |
| TCP | Zuverlässige Verbindung (Handshake) |
| UDP | Schnell, unzuverlässig (Streaming) |
| HTTP/S | Web-Protokoll |
| Port | Kanal (80=HTTP, 443=HTTPS, 22=SSH) |
| Packet | Datenpäckchen im Netzwerk |

## 📚 Ressourcen

1. **[How DNS Works (Comic)](https://howdns.works/)** ⭐ Superlustiger Comic
2. **[Cloudflare Learning Center](https://www.cloudflare.com/learning/)** ⭐ Alle Basics super erklärt
3. **[Computer Networks: A Top-Down Approach (Kurose)](https://gaia.cs.umass.edu/kurose_ross/)** Klassisches Lehrbuch
4. **[Crash Course – Computer Networks (YouTube)](https://www.youtube.com/watch?v=3QhU9jd03a0)**

## 💡 Was passiert bei google.com?

```
1. Browser → DNS: "Was ist die IP von google.com?"
2. DNS → Browser: "142.250.74.46"
3. Browser → Server (TCP Handshake): SYN → SYN-ACK → ACK
4. Browser → Server (HTTP): GET / HTTP/1.1
5. Server → Browser: HTTP 200 OK + HTML
6. Browser rendert die Seite
```

## 🎯 Checkliste

- [ ] Ich kann TCP/IP in eigenen Worten erklären
- [ ] Ich verstehe wie DNS funktioniert
- [ ] Ich kenne wichtige Ports (80, 443, 22, 5432)
- [ ] Ich verstehe HTTP Request/Response Zyklus

## Weiter: [Intermediate](../intermediate/resources.md)
