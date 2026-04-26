# Web Performance Beginner 🟢

Warum ist meine Seite langsam? Grundlegende Optimierungen.

## Konzepte

| Begriff | Was |
|---------|-----|
| Core Web Vitals | LCP, FID, CLS — Googles Metriken |
| LCP | Largest Contentful Paint — wie schnell sieht man Inhalt |
| CLS | Cumulative Layout Shift — springt Layout? |
| TTI | Time to Interactive |
| Minification | JS/CSS komprimieren |
| Caching | Browser/Server Caching |

## 📚 Ressourcen

1. **[web.dev – Learn Performance](https://web.dev/learn/performance)** ⭐ Google, kostenlos
2. **[PageSpeed Insights](https://pagespeed.web.dev/)** ⭐ URL eingeben, Analyse kriegen
3. **[Lighthouse (Chrome DevTools)](https://developer.chrome.com/docs/lighthouse/)** Audit im Browser
4. **[MDN – Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)**

## 💡 Quick Wins

```html
<!-- Bilder lazy loaden -->
<img src="hero.jpg" loading="lazy" alt="...">

<!-- Kritisches CSS inline -->
<style>body{margin:0} .hero{...}</style>

<!-- Fonts preloaden -->
<link rel="preload" href="font.woff2" as="font" crossorigin>

<!-- Scripts am Ende / defer -->
<script src="app.js" defer></script>
```

## 🎯 Checkliste

- [ ] Ich habe Lighthouse auf meiner Seite ausgeführt
- [ ] Ich nutze lazy loading für Bilder
- [ ] Ich kenne Core Web Vitals
- [ ] Ich komprimiere JS und CSS

## Weiter: [Intermediate](../intermediate/resources.md)
