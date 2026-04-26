# Web Performance Advanced 🔴

V8-Internals, WASM, Edge Computing, und Real User Monitoring.

## Themen

| Thema | Was |
|-------|-----|
| WebAssembly (WASM) | Native Speed im Browser |
| Edge Computing | Code näher zum User ausführen |
| HTTP/3 + QUIC | Next-gen Protokoll |
| RUM | Real User Monitoring (echte Nutzer messen) |
| V8 Optimization | Wie JavaScript-Engine optimiert |
| Memory Leaks | Finden und beheben |

## 📚 Ressourcen

1. **[WebAssembly.org](https://webassembly.org/)** ⭐
2. **[V8 Blog](https://v8.dev/blog)** ⭐ JS-Engine Internals
3. **[web.dev – Measure Performance with PerformanceObserver](https://web.dev/articles/performance-observer)**
4. **[Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)** Edge Computing

## 💡 Performance Observer API

```javascript
// Echte User-Metriken messen
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach(entry => {
    if (entry.entryType === 'largest-contentful-paint') {
      console.log('LCP:', entry.startTime);
      // An Analytics senden
    }
  });
});
observer.observe({ type: 'largest-contentful-paint', buffered: true });
```

## Memory Leak finden

```javascript
// Chrome DevTools → Memory → Heap Snapshot
// Vorher/Nachher vergleichen nach User-Aktion
// Wachsende Arrays, Event Listener die nicht entfernt werden,
// Closures die DOM-Referenzen halten → häufigste Ursachen
```

## 🎯 Checkliste

- [ ] Ich habe WebAssembly ausprobiert
- [ ] Ich messe echte User-Metriken (RUM)
- [ ] Ich kann Memory Leaks in Chrome DevTools finden
- [ ] Ich kenne Edge Computing und wann es Sinn macht
