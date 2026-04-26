# Web Performance Intermediate 🟡

Caching-Strategien, Code Splitting, und Rendering-Optimierung.

## Konzepte

| Thema | Was |
|-------|-----|
| Browser Cache | HTTP Cache-Control Header |
| Service Worker | Offline-Fähigkeit + Cache-Kontrolle |
| Code Splitting | JS nur laden wenn gebraucht |
| Tree Shaking | Ungenutzten Code entfernen |
| Critical Rendering Path | Was muss geladen sein für 1. Paint |
| Resource Hints | preload, prefetch, preconnect |

## 📚 Ressourcen

1. **[web.dev – Network Reliability](https://web.dev/reliable/)** ⭐ Service Worker Guide
2. **[Bundle Analyzer (webpack-bundle-analyzer)](https://github.com/webpack-contrib/webpack-bundle-analyzer)**
3. **[Smashing Magazine – Performance](https://www.smashingmagazine.com/category/performance/)**
4. **[Jake Archibald – Service Workers](https://jakearchibald.com/)**

## 💡 Cache-Control Header

```
Cache-Control: max-age=31536000, immutable
# → Ein Jahr cachen, nie revalidieren (für gehashte Assets)

Cache-Control: no-cache
# → Immer revalidieren (für HTML)

Cache-Control: no-store
# → Nie cachen (sensitive Daten)
```

## Critical Rendering Path

```
HTML parsen → DOM
CSS parsen  → CSSOM
DOM + CSSOM → Render Tree → Layout → Paint
                ↑
         Hier blockiert render-blocking CSS/JS!
```

## 🎯 Checkliste

- [ ] Ich setze korrekte Cache-Control Header
- [ ] Ich nutze Code Splitting (React.lazy / dynamic import)
- [ ] Ich kenne den Critical Rendering Path
- [ ] Ich habe einen Bundle-Analyzer eingesetzt

## Weiter: [Advanced](../advanced/resources.md)
