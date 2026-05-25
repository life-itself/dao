# AGENTS

This file documents conventions for working in this repository — useful both for humans hacking on it and for AI agents.

## Directory structure

The repo has four layers:

**Identity** (root) — the philosophical core of the dao: `culture.md`, `views.md`, `principles.md`, `practices.md`, `narrative.md`, `scqh.md`.

**Handbook** (`handbook/`) — day-to-day operational how-to docs: onboarding, ops, comms, getting-stuff-done, working-with-us, inbox, start-project, etc.

**Portfolio and operations** — structured data and records:
- `plans/` — weekly operational plans. Use `week-YYYY-MM-DD.md` filenames.
- `meetings/` — meeting notes. Use `YYYY-MM-DD-topic.md` filenames.
- `people/` — team profiles. One file per person using their slug (e.g. `rufus-pollock.md`).
- `portfolio/` — interactive D3 visualizations of the portfolio plus the local `index.js` data snapshot. Open any HTML file directly in a browser. See `portfolio/README.md` for details.
- `portfolio/scripts/` — build tooling and helpers for the portfolio visualisations.

**Strategy** (`strategy/`) — thinking and analysis layer:
- `strategy/docs/` — planning docs and strategic analysis
- `strategy/plans/` — annual plans, named by year (e.g. `2023.md`)
- `strategy/archive/` — historical strategy materials (hidden from sidebar)
- `strategy/log/` — raw outflow notes (hidden from sidebar)

**Planning docs for the dao itself** (`docs/plans/`) — improvement plans and UX work for this site.

## Data model

The portfolio is maintained as a data snapshot in `portfolio/index.js`. Parent relationships are stored as slugs on each entry.

The old markdown-backed initiative/project database is no longer maintained locally in this repo.

## Conventions

- Keep `portfolio/index.js` as the source of truth for portfolio items in this repository.
- Preserve existing slugs and parent references when editing portfolio entries.
- Use `portfolio/README.md` as the canonical place for portfolio snapshot workflow notes.

## Site publishing

This repo is published as a website via [Flowershow](https://flowershow.app) at https://tao.lifeitself.org. Markdown files render as pages; HTML and Tailwind classes in markdown work natively — no build step needed for styling.

## Building the data index

See `portfolio/README.md` for the current portfolio data snapshot note.
