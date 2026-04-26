# regex/_to_claude.md

Topic-spezifische Notizen für RegEx. Lies das, bevor du am Topic arbeitest.

---

## 2026-04-26 · Pilot-Topic

War das **erste Topic**, das eine HTML-Site bekommen hat. Erste Version war 4 vollwertige HTML-Pages mit ~350 Zeilen Boilerplate jeweils. Migriert auf Schema → `data.js` + 13-Zeilen-Shims.

**Inhalte stammen aus** `regex/{beginner,intermediate,advanced}/resources.md` — die Markdowns bleiben als Backup/Quelle.

## Inhaltliche Anmerkungen

- **Beginner**: 12 Konzepte, 5 Übungen, 3 Quiz, 2 Placeholder-Cards
- **Intermediate**: 12 Konzepte, 5 Übungen, 3 Quiz, 3 Placeholder-Cards
- **Advanced**: 8 Konzepte, 4 Übungen, 3 Quiz, 3 Placeholder-Cards
- Index hat 1 Live-Tester, Beginner 1 weiteren, Intermediate 1 weiteren, Advanced 1 weiteren mit Warnung wegen Catastrophic Backtracking

## Bekannte Schwächen

- **Email-Pattern in Beginner-Übung** ist absichtlich naiv (`\w+@\w+\.\w+`) — wird in Advanced relativiert. Ist eine Falle, falls jemand das ernsthaft als Email-Validator einsetzt.
- **Die `regex` JS RegExp Engine** unterstützt nicht alle Features die in Advanced gezeigt werden (Atomic Groups, Possessive Quantoren, `(?R)`, `\K`). Die Code-Beispiele sind als Theorie/PCRE markiert. Live-Tester scheitert da.

## Offene Fragen

- Sollten wir einen kleinen "Engine-Picker" im Live-Tester haben, der zwischen JS/PCRE-Theorie/Python umschaltet? Aktuell: nur JS. → Nur einbauen, wenn User danach fragt.
- Catastrophic-Backtracking-Demo könnte einen Timer haben, der die Suche nach 2s abbricht, damit man den Effekt safer demonstrieren kann. → Nice-to-have.
