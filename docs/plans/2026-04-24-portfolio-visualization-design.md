# Portfolio Visualization — Design Requirements

**Date:** 2026-04-24  
**Status:** Draft — captures design thinking before building  
**Related:** `PLAN.md`, `../docs/plans/2026-04-23-tao-ux-jobs-to-be-done.md`

---

## What we are solving for (now)

Two jobs, in priority order:

**A1 — "What is Life Itself working on?"** (from dao UX JTBD doc)  
High-level, not week-specific. Strategic landscape. For team members and new collaborators.

**J3 — Strategic planning** (from portfolio PLAN.md)  
Full picture including paused and ideation items. Decide where to focus and resource next.

Everything else (ops view, ideas pipeline, external narrative) is deferred.

---

## Core UX requirements

### 1. Two modes, one-click toggle

| Mode | What it shows |
|------|--------------|
| **Full landscape** | Everything — all statuses, full hierarchy visible |
| **Active focus** | Same structure, but inactive items greyed out (not hidden) |

Critical: items do **not disappear** in active focus mode. The full spatial structure stays. You need the context of what is *not* active to understand what *is*.

### 2. Active status bubbles up from projects

Projects are the ground truth of what is actually happening. The visualization should derive initiative-level and area-level activity *from* their projects, not require it to be stated separately.

- If any project under an initiative is active → the initiative reads as active
- If all projects under an initiative are paused/archived/idea → the initiative is implicitly inactive
- Areas/groupings follow the same logic from their child initiatives

This means: you look at project-level activity and the hierarchy *tells you* which strategic areas the org is focused on right now, without needing to re-encode that at the initiative level.

### 3. The reading direction

The key question to answer visually is bottom-up:

> "We're working on these projects → therefore these initiatives are live → therefore these areas of the org are a current focus."

This is different from a top-down "here are our areas, here's what's in each." The bottom-up read surfaces what's *actually* being worked on vs what we say we care about.

---

## What this rules out (and why)

**Hiding inactive items** — loses spatial context; you can't see the shape of what you're *not* doing, which is equally important for strategy.

**Force-directed graph as primary view** — layout is non-deterministic and resets; hierarchy (project → initiative → area) is not legible; the organic cluster feel is aesthetically appealing but doesn't support the bottom-up reading direction we need.

**localStorage position persistence** — doesn't help other users; not a real fix.

---

## Preferred visualization form

**Indented tree with grey-out toggle** is the closest to requirements with lowest build cost:
- Tree structure already exists in `portfolio-indented.html`
- Add: "Active focus" toggle that greys (opacity ~0.2) any row whose status is not active, and also greys parents whose *derived* active count is zero
- Add: collapse-all / expand-all buttons
- Change: current filter (hide) behaviour → grey-out behaviour in focus mode

**Tidy tree (D3 `d3.tree()`)** is worth exploring as an alternative form:
- Stable, deterministic layout — left-to-right hierarchy
- Pan and zoom
- Same grey-out toggle
- Better at showing hierarchy depth visually
- Worth a prototype to see if it reads better than the indented list at a glance

**Circle packing (`d3.pack()`)** may suit a future external-narrative view (Job 1) where you want aesthetic impact, but is likely harder to read for the bottom-up inference task.

---

## Open questions before building

1. **Derived vs explicit active state:** Should a parent initiative go grey if *all* its children are inactive, even if its own `status` field says `active`? Probably yes — the children are the ground truth.
2. **What counts as "active"?** Probably only `status: active`. Maintenance = grey in focus mode? Or is maintenance still "live enough" to show as active? Decision needed.
3. **Collapse state in focus mode:** Should the tree auto-expand all in full-landscape mode and auto-collapse inactive branches in focus mode? Or always leave collapse state to the user?
