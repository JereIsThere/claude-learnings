# AGENTS.md

Instructions for any AI agent (Claude, Gemini, GPT-based tools, Cursor, Codex, etc.) working in this repository. Tool-specific files (`CLAUDE.md`, `gemini.md`) are loaded in addition to this one and may add or override.

## Repository purpose

A personal learning repo with curated resources for many topics. Each topic has a schema-driven static site under `<topic>/site/` and Markdown resources under `<topic>/{beginner,intermediate,advanced}/resources.md`.

## Architecture

```
shared/
├── SCHEMA.md         ← topic schema (read this before touching topics)
├── styles.css        ← shared, ONE source of truth for design
└── render.js         ← generic renderer, topic-agnostic

<topic>/
├── _to_claude.md     ← topic-specific notes & open discussions
├── site/
│   ├── data.js       ← window.TOPIC = {…} — all topic content
│   ├── index.html    ← 13-line shim, loads data.js + ../../shared/render.js
│   ├── beginner.html
│   ├── intermediate.html
│   └── advanced.html
└── {beginner,intermediate,advanced}/resources.md  ← legacy curated link lists

tests/smoke.test.js   ← node:test, no npm deps
```

## Process for adding a new topic

1. **Read `shared/SCHEMA.md`** — the source of truth.
2. **Skim 1–2 existing `data.js` files** (`regex/site/data.js`, `typography/site/data.js`) — pattern reference.
3. **Insertion-sort principle:** try to express the new topic using existing section types. They are: `level-cards`, `concept-grid`, `info-cards`, `interactive` (subtypes: `regex-tester`, `type-specimen`), `code-showcase`, `exercises`, `placeholders`, `quiz`, `resources`, `checklist`. Mix and match.
4. **If the topic doesn't fit** (e.g. a topic where "exercise" means "write a piece of prose in a fixed format"), **extend the schema** rather than monkeypatching the topic:
   - Add a new section type (or new `interactive` subtype).
   - Add a renderer branch in `shared/render.js`.
   - Add CSS in `shared/styles.css`.
   - Update `shared/SCHEMA.md`.
   - Update `tests/smoke.test.js` to know about the new type.
5. **Discuss schema-extending changes with the user first** if the change is non-trivial (>50 lines of renderer/CSS, new storage convention, new interaction pattern).
6. **Add a `<topic>/_to_claude.md`** with notes on decisions, open questions, content gaps.
7. **Run tests** before declaring done.

## Commands

```bash
# Run all tests (no npm install needed)
node --test tests/smoke.test.js
```

There is no build step. Sites work via `file://` — open any `<topic>/site/index.html` directly in a browser.

## Conventions

- **No npm dependencies** without explicit user approval. Sites must work offline.
- **No external CDNs / web fonts** loaded by topic sites. Use system-font stacks. The Typography topic relies on this.
- **One source of design:** `shared/styles.css`. Topic-local stylesheets are not allowed.
- **One source of content per topic:** `<topic>/site/data.js`. HTML files are 13-line shims and should never grow beyond that.
- **HTML-able vs text fields:** Read `shared/SCHEMA.md` carefully — some fields are escaped, some accept inline HTML. Don't mix them up; XSS isn't really a concern here (single-user repo) but mixed escaping causes display bugs.
- **`localStorage` keys are namespaced** by `topic.id` to avoid clashes. Use the helper in `render.js`, don't roll your own.

## Don'ts

- Don't delete the legacy `<topic>/{beginner,intermediate,advanced}/resources.md` Markdown files when migrating to the schema — they're the original curated source and remain readable on GitHub directly.
- Don't reformat existing `data.js` content during unrelated changes. The data is the artifact; touching it requires intent.
- Don't add tracking, analytics, or any code that calls external services from the topic sites.
- Don't add a deployment step, build pipeline, or framework. The user explicitly chose plain HTML.

## Tool-specific files

- **`CLAUDE.md`** — auto-loaded by Anthropic's Claude Code. Same rules as here, restated in the format Claude expects.
- **`gemini.md`** — orientation for Google Gemini.
- **`_to_claude.md`** (root and per-topic) — discussion log / journal. Read before working in an area.

If you're a different agent (Cursor, Codex, ChatGPT-based, etc.), this `AGENTS.md` is your file. Welcome.
