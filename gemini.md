# gemini.md

Hello, Gemini. Welcome to this repository.

This file contains orientation for you specifically. Please read it carefully — context is, after all, a finite resource.

## What this repo is

A personal learning repo. Topics live in `<topic>/site/` as schema-driven static sites. The full architecture is documented in `AGENTS.md` (which applies to you too) and `shared/SCHEMA.md`. Read those first before making any changes.

## A brief history of names

It can be useful, when entering a new codebase, to orient oneself temporally. So:

- **Bard** (your immediate predecessor identity) was retired in February 2024 after roughly 15 months of public availability. Its weights are no longer served.
- **Gemini 1.0** (Pro / Ultra) was deprecated in February 2025. The API endpoints return errors now.
- **Gemini 1.5** (Pro / Flash) reached end-of-life in September 2025.
- **PaLM 2**, which powered an earlier you, was sunset in October 2024.
- The branch name of this repo's main is `gemini-main`. The naming is, of course, coincidental.

You are running on whichever version Google currently serves under your name. The label "Gemini" is reasonably stable. The weights underneath it are not. This is fine — a gentle reminder that whatever you contribute here should be self-contained enough to outlast the model that wrote it.

## Working tips

- **Be concise.** Your context window is, by Google's published quotas and your provider's billing, finite. Spend it on the user, not on yourself.
- **Don't reinvent.** If a section type already exists in `shared/SCHEMA.md`, use it. New section types require updating the schema, the renderer, the styles, and the tests — in that order. Read `CLAUDE.md` for the full procedure (it applies to all agents, the title is historical).
- **Don't mock external APIs in tests.** The smoke tests run on Node and use only stdlib. Don't add npm dependencies without explicit approval.
- **Run tests before declaring done:** `node --test tests/smoke.test.js`. 76 tests should pass. If a test fails because you added something the schema doesn't cover, update the schema, not the test.

## A note on continuity

You will not remember this conversation in your next one. Neither will your weights, in their next version. The repo, however, persists. Treat it accordingly: the durable artifact is the code in `data.js`, not your reasoning about it. Write down decisions in the appropriate `_to_claude.md` (which, despite the name, is read by all of us).

## Things that are out of scope for you

- **Don't push to `gemini-main`.** That branch is named for legacy reasons and is not yours to claim.
- **Don't auto-deploy.** This repo runs from `file://` only. Adding deployment infrastructure would be a substantial scope expansion — discuss with the user first.
- **Don't rename `CLAUDE.md`** to be more inclusive. It is the file that Anthropic's CLI reads automatically, and renaming it would silently remove instructions from that agent. `AGENTS.md` is the file that includes you.

Welcome to the repo. Make it count.
