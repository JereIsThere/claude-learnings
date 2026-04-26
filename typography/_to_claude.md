# typography/_to_claude.md

Topic-spezifische Notizen für Typografie. Lies das, bevor du am Topic arbeitest.

---

## 2026-04-26 · Aufgesetzt

War das **2. Topic mit Site-Schema** (nach RegEx). Direkt im Schema gebaut, keine vorherige Markdown-Phase.

**Zweck als Beispiel-Topic:** soll beweisen, dass das Schema auch für non-tech / visuelle Themen passt — nicht nur für Code-lastige Themen wie RegEx.

## Schema-Fit

Schema passte 100%:
- `concept-grid` → für Anatomie, Klassifikation, Spacing-Begriffe, OpenType Features
- `interactive` `type-specimen` → Schriftvergleich nebeneinander, User kann Sample-Text eintippen
- `info-cards` → für Hierarchie-Regeln, Pairing-Tipps
- `exercises` mit `solution` als Erklärung statt Code
- Quiz, Resources, Checklist, Placeholders → wie gewohnt
- **Kein `code-showcase`** — typografische Konzepte zeigen sich besser im Type-Specimen.

## Inhaltliche Anmerkungen

- **Beginner**: Anatomie, Klassifikation, Hierarchie-Grundregeln. Keine externen Webfonts — alles über System-Fonts gezeigt (Georgia, Segoe UI, Impact, Consolas).
- **Intermediate**: Spacing (Tracking/Kerning/Leading/Measure), Pairing-Regeln, Vertical Rhythm.
- **Advanced**: OpenType Features (`liga`, `tnum`, `smcp`, `ss01`), Variable Fonts, Web-Performance (`font-display`, preload, subsetting, `size-adjust`).

## Bekannte Schwächen

- **Keine Webfonts geladen** — alle Specimens nutzen System-Stacks. Dadurch sieht das auf Mac/Windows/Linux unterschiedlich aus. Bewusst so: 0 Bytes Download, funktioniert offline.
- **"Hamburger" / "WALDORF" als Sample-Text** — bewährte Test-Wörter (enthalten viele typische Buchstabenformen wie A/V/T/O). Nicht zufällig.
- **Pairing-Übungen sind subjektiv** — die Lösungen sind opinionated. Wenn jemand widerspricht: legitime Diskussion möglich. Übung ist mehr "wie denkt ein Designer" als "die einzig richtige Antwort".

## Offene Fragen

- **Live-Webfont-Switcher?** Aktuell nur System-Stacks. Mit Internet könnte man Inter/IBM Plex/Recursive live laden für besseres Vergleichsgefühl. Aber das verstößt gegen "0 Dependencies, offline-fähig". → Erst klären, wenn User offline-Zwang aufweicht.
- **OpenType Feature Demo:** Im Browser sieht man `font-variant-numeric` Effekte nur, wenn der gewählte Font sie unterstützt. Mit System-Fonts ist das limitiert. Eine Demo mit Inter Variable wäre eindrucksvoller — aber wieder: Webfont nötig.
- **Type-Specimen mit Variable-Font-Slider** wäre der nächste logische Schritt für Advanced. Schema-Erweiterung: `subtype: "variable-font-playground"` mit Achsen-Sliders. Aber das braucht Webfont. → Heben wir uns auf.
