# Output-Schema — Reference

Wie die Verzeichnisstruktur eines Träumer-Topics auszusehen hat. Wird vom Skill nachgeladen, wenn ein neues Topic gebaut wird.

## Verzeichnis pro Topic

```
<topic>/
├── README.md              # Index + Quick Reference. Erste Anlaufstelle für Text-Leser.
├── index.html             # Verträumte Lern-Webpage. Eine Datei. Kein Build-Step.
├── beginner/
│   ├── resources.md       # Kuratierte Links zu offiziellen Quellen.
│   └── examples/          # Lauffähige Mini-Projekte (mit README/Doc-Strings).
├── intermediate/
│   ├── resources.md
│   └── examples/
└── advanced/
    ├── resources.md
    └── examples/
```

## Pflichten pro Datei

### `README.md`
- Begrüßung + Verweis auf `index.html`.
- 4-Konzept-Tabelle.
- Standards-Tabelle (falls relevant: RFCs, Specs).
- Lernpfad nach Levels.
- Quick Reference (häufige Befehle, Flow-Schritte, Validierungs-Checklisten).
- Quellen-Block.
- Issue-Link.

### `index.html`
- Self-contained (eine Datei, keine externen JS/CSS-Frameworks außer Google Fonts).
- Header: Skyline mit Mond, "📓 Der Träumer · Folge N", Lead-Paragraph, In-Page-TOC.
- 4 Konzept-Cards mit Zahlenkreis.
- "Bild:" / "Fakt:" / "Stolperstein:" / "Was sagen die Specs:" Boxen.
- Übungen als `<details>`-Elemente, Lösung darunter.
- CTA-Card + Quellen-Footer.

### `beginner/resources.md`
- Lese-Reihenfolge in 3–5 Schritten.
- Lernziele als Checkliste.
- Verweis auf `examples/`.
- "Was du in diesem Level NICHT brauchst"-Sektion.

### `*/examples/`
- Pro Datei: ein Doc-String / Header-Kommentar mit Setup-Anleitung.
- Code muss tatsächlich laufen (oder, wenn nicht ausführbar wie Markdown-Walkthroughs: explizit als Lese-Übung markiert).
- Dependencies aus dem Standard-Ökosystem (`pip install Flask`, `npm install`, etc.).

## Konventionen

### Faktencheck-Pointer
In jedem Konzept eine "Was sagen die Specs:"-Box mit Section-Pointern (z.&nbsp;B. *RFC 9700 §2.1.1*, *OIDC Core 1.0 §3.1.3.7*). Niemals nur "siehe Doku".

### Übungs-Eskalation
- Mind. 5 Übungen, idealerweise 7.
- Verteilung: ca. 2× Einsteiger, 3× Mittel, 2× Fortgeschritten.
- Jede mit ausklappbarer Lösung.
- Letzte Übung darf eine "Architektur-Entscheidung"-Frage sein, die Trade-offs verlangt.

### Quellen-Block
- Footer der Webpage + Sektion in `README.md` + jeweils in `resources.md`.
- Dieselbe Liste, formatiert für den Kontext.
- Niemals ungeprüfte Sekundärquellen.

## Cross-Topic-Links

Wenn ein Topic auf ein anderes verweist (z.&nbsp;B. OAuth verweist auf JWT): Link relativ (`../jwt/README.md`), nicht absolut. Hält das Repo portabel.

## Wenn kein Beispiel existiert

Wenn dir keine sinnvolle Übung mehr einfällt oder ein Konzept zu abstrakt für ein lauffähiges Beispiel ist: GitHub-Issue-Link einbauen ("Schreib uns ein Beispiel-Issue, wir bauen's gemeinsam").
