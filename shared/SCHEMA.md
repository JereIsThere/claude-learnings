# Topic Schema

Jedes Topic liegt in `<topic>/site/` und besteht aus:
- **`data.js`** — definiert `window.TOPIC = {…}` mit allen Inhalten
- **`index.html`, `beginner.html`, `intermediate.html`, `advanced.html`** — Mini-Shims (~15 Zeilen), laden `data.js` + `../../shared/render.js`

Der Renderer baut die ganze Seite aus dem Schema. Keine Boilerplate pro Page.

## Top-Level Shape

```js
window.TOPIC = {
  id: "regex",                // slug — used for localStorage keys
  title: "RegEx",             // header logo text
  pages: ["index", "beginner", "intermediate", "advanced"],
  repoUrl: "https://github.com/...",  // for issue buttons (optional, falls back to default)

  index: { ... },
  beginner: { ... },
  intermediate: { ... },
  advanced: { ... }
};
```

## Page Shape

```js
{
  eyebrow: "// pattern matching mastery",     // small text above headline
  badge: "brand",                              // color: "brand"|"green"|"yellow"|"red"
  headline: { plain: "Regular ", gradient: "Expressions" },
  intro: "Vom ersten Metacharacter…",          // hero paragraph
  sections: [ ... ],                           // ordered list of sections
  prev: { href: "index.html", label: "← zurück", title: "Übersicht" },  // optional
  next: { href: "intermediate.html", label: "weiter →", title: "Intermediate" }  // optional
}
```

## Section Types

Each section is `{ type: "...", title?: "...", ...typeSpecificFields }`.

### `level-cards` (typically only on index page)
3 cards linking to beginner / intermediate / advanced.
```js
{ type: "level-cards", title: "Lernpfad", items: [
  { level: "beginner", badge: "● BEGINNER", title: "Grundlagen",
    desc: "...", href: "beginner.html", arrow: "Anfangen →" }
]}
```

### `concept-grid`
Grid of concept cards with symbol, title, desc, optional example.
```js
{ type: "concept-grid", title: "Konzepte", items: [
  { symbol: ".", title: "Beliebiges Zeichen",
    desc: "Matched jedes Zeichen außer Newline.",
    example: "<code>a.c</code> → \"abc\"" }   // example may contain HTML
]}
```

### `info-cards`
Generic cards with title + body (HTML-able).
```js
{ type: "info-cards", title: "Warum?", items: [
  { title: "Universal", body: "Funktioniert in jeder Sprache" }
]}
```

### `interactive` — `subtype: "regex-tester"`
Live RegEx-Tester with presets.
```js
{ type: "interactive", subtype: "regex-tester", title: "Live Tester",
  config: {
    pattern: "\\d+", flags: "g", text: "...",
    presets: [ { label: "\\d+", pattern: "\\d+", flags: "g", text: "..." } ]  // text optional
  },
  warning: "..."                              // optional red warning box above tester
}
```

### `interactive` — `subtype: "type-specimen"`
Typography Specimen — shows sample text in different font-stacks side by side.
```js
{ type: "interactive", subtype: "type-specimen", title: "Schriften vergleichen",
  config: {
    sample: "Aa Hamburgefonts 0123",
    specimens: [
      { label: "Serif", stack: "Georgia, Times, serif" },
      { label: "Sans",  stack: "Inter, Helvetica, sans-serif" }
    ]
  }
}
```

### `code-showcase`
Read-only code block with optional caption.
```js
{ type: "code-showcase", title: "Greedy vs lazy",
  caption: "Greedy nimmt so viel wie möglich…",
  code: "<.*>\n<.*?>"
}
```

### `exercises`
Exercise cards with collapsible solution.
```js
{ type: "exercises", title: "Übungen", items: [
  { difficulty: "easy"|"medium"|"hard",
    title: "Alle Ziffern finden",
    task: "Schreib ein Pattern…",            // HTML-able
    solution: "\\d+",                        // HTML-able (typically <code>)
    explanation: "..."                       // HTML-able
  }
]}
```

### `placeholders`
Placeholder cards for "Hier könnte deine Übung hin" + GitHub-Issue button.
```js
{ type: "placeholders", items: [
  { title: "Hier könnte deine Übung hin",
    desc: "Idee: Postleitzahl-Pattern",
    issueTitle: "[Beginner] Neue Übung: …",
    issueBody: "**Stufe**: Beginner\n…",    // newlines OK; will be URL-encoded
    labels: "exercise,beginner,regex" }
]}
```

### `quiz`
Multiple-choice quiz cards.
```js
{ type: "quiz", title: "Quiz", items: [
  { question: "Welches Pattern matched…",   // HTML-able
    options: [
      { value: "a", label: "ab*c" },
      { value: "b", label: "ab+c" }
    ],
    correct: "b",
    feedback: "+ verlangt mindestens 1…"
  }
]}
```

### `resources`
Numbered resource list with optional star, tags, descriptions.
```js
{ type: "resources", title: "Resources", items: [
  { url: "https://regex101.com",
    title: "regex101.com",
    star: true,                              // optional
    tags: ["interactive"],                   // optional, shown as small uppercase chips
    desc: "Live-Tester mit Erklärung…" }
]}
```

### `checklist`
Persistent checklist (state stored in `localStorage` under `<topicId>-check-<itemId>`).
```js
{ type: "checklist", title: "Beginner-Checkliste", items: [
  { id: "b1", label: "Ich verstehe die Quantoren" }    // label HTML-able
]}
```

## Notes

- **HTML escaping**: `desc`, `task`, `solution`, `explanation`, `body`, `feedback`, `label`, `question`, `caption` accept inline HTML. Pure-text fields (`title`, `eyebrow`, `intro`) are escaped.
- **Storage keys** are namespaced by `topic.id` to avoid clashes between topics.
- **Order** of sections is the order they appear in the page.
