# System Design Beginner 🟢

Wie baut man Systeme die skalieren? Grundkonzepte.

## Konzepte

| Begriff | Was |
|---------|-----|
| Vertical Scaling | Stärkere Maschine |
| Horizontal Scaling | Mehr Maschinen |
| Load Balancer | Traffic verteilen |
| Cache | Häufige Daten schnell abrufen |
| CDN | Statische Inhalte nahe am User |
| Database | Persistente Datenspeicherung |

## 📚 Ressourcen

1. **[System Design Primer (GitHub)](https://github.com/donnemartin/system-design-primer)** ⭐ Das Beste kostenlose Kompendium
2. **[ByteByteGo – System Design (YouTube)](https://www.youtube.com/@ByteByteGo)** ⭐ Sehr visual
3. **[Designing Data-Intensive Applications (Kleppmann)](https://dataintensive.net/)** Das Standardwerk
4. **[High Scalability Blog](http://highscalability.com/)** Fallstudien realer Systeme

## 💡 Einfache Web-Architektur

```
User → [CDN] → [Load Balancer] → [App Server 1]
                               → [App Server 2]
                                       ↕
                               [Cache (Redis)]
                                       ↕
                               [Primary DB] → [Replica DB]
```

## Wann brauche ich was?

- **Cache**: Gleiche Daten oft gelesen, selten geschrieben
- **CDN**: Statische Dateien (Bilder, JS, CSS)
- **Load Balancer**: Ab 2 Servern nötig
- **Read Replica**: Lese-Last zu hoch für eine DB

## 🎯 Checkliste

- [ ] Ich kenne den Unterschied horizontal vs. vertical Scaling
- [ ] Ich kann eine einfache 3-Tier-Architektur erklären
- [ ] Ich verstehe wofür Caching genutzt wird
- [ ] Ich kenne den CAP-Theorem Grundgedanken

## Weiter: [Intermediate](../intermediate/resources.md)
