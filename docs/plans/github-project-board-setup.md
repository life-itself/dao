# GitHub Project Board Setup for New Team

**Summary:** Create a new GitHub Projects v2 board for the current team with two zoom levels — a high-level roadmap view (epics) and a task-level view (sub-issues) — rather than reusing the cluttered existing board (project 22, 477 items).

---

## Situation

Life Itself has an existing GitHub Project board ("Shaping and Shipping", project 22) with 477 items and good field structure (Phase, Priority, Parent issue, Sub-issues progress). A new team is forming and needs project tracking.

## Complication

The existing board is too dense for a new team. 477 items creates noise and confusion. We also need two levels of visibility: a high-level roadmap for the whole team and individual task lists for each person — something the existing board's single view doesn't cleanly provide.

## Question

How do we set up project tracking that gives new team members clarity at both the roadmap level and the individual task level, without cluttering the workspace?

## Hypothesis

Create a new GitHub Projects v2 board, copying the proven field schema from project 22, with two dedicated views built in from the start. Keep information density low initially.

---

## Plan

### 1. Create new GitHub Project

- Owner: `life-itself` org
- Name: **"Life Itself Team"**
- Visibility: Public (consistent with project 22)
- Admin: Rufus Pollock
- Issues repo: `life-itself/strategy` (centralise for now)

### 2. Field schema (copied from project 22: "Shaping and Shipping")

| Field | Type | Options |
|-------|------|---------|
| Title | Text | — |
| Assignees | default | — |
| Status | Single select | 📝 Backlog · 🏗️ In progress · ✅ Done · ⛔ Blocked · ⏸️ Paused · 💤 Someday |
| Phase | Single select | 📥 Inbox · 📐 Shape · 🚢 Ship · 📣 Share |
| Priority | Single select | 🔥🔥🔥🔥 · 🔥🔥🔥 · 🔥🔥 · 🔥 |
| Parent issue | default | — |
| Sub-issues progress | default | — |
| Labels | default | includes `epic` label |
| Estimate (d) | Number | days |
| Start | Date | — |
| End | Date | — |
| Note | Text | — |

### 3. Two views

**View 1: Roadmap**
- Filter: label = `epic`
- Group by: Phase (Now / Next / Later)
- Purpose: team-level, what are we working on and what's coming

**View 2: Tasks**
- Filter: label ≠ `epic` (or no label filter, show all non-epics)
- Group by: Assignee
- Purpose: individual work, what does each person own right now

### 4. Issue conventions

- **Epics** = GitHub issues labelled `epic`; contain description of initiative and acceptance criteria
- **Tasks** = GitHub sub-issues nested under an epic; assigned to one person; small enough to complete in a week or less
- Each task links back to parent epic automatically via sub-issue relationship

### 5. Migration / seeding

- Do NOT import items from project 22
- Seed only current active work: create epics for in-flight initiatives, create tasks for immediate next actions
- Keep backlog empty at launch; add items as needed

---

## GitHub Projects vs Markdown in repo

**Decision: GitHub Projects.**

Considered tracking tasks as markdown files/items in this strategy repo. Key trade-offs:

| | GitHub Projects | Markdown repo |
|---|---|---|
| Accessible to non-technical team | Yes — just a browser | No — need git/editor workflow |
| Real-time card movement | Yes — drag and drop | No — manual file edits |
| CLI editable | Yes — full `gh project` support | Yes |
| Version history | Limited | Full git history |

GitHub Projects wins on the two things that matter most for a team: low friction access and live kanban. CLI power users can still do everything via `gh project item-edit`.

---

## Status (as of 2026-04-20)

### Completed

- ✅ Created project board: [Life Itself Team](https://github.com/orgs/life-itself/projects/34)
- ✅ Field schema replicated from project 22 (Status, Phase, Priority, Estimate, Start, End, Note)
- ✅ Created `epic` label in `life-itself/strategy`
- ✅ Created 9 epic issues (#4–#12) and 13 task issues (#13–#25) in `life-itself/strategy`
- ✅ Sub-issue parent/child links established between tasks and epics
- ✅ All issues set Phase=🚢 Ship, Status=🏗️ In progress

### Blocked: GitHub Projects v2 bug

Issues exist and show the project in their sidebar, but the project board lists 0 items and the UI is empty. The issue-side and project-side are inconsistent: `Issue.projectItems` confirms the link, but `ProjectV2.items` returns nothing. Reproduced on two separate projects (#34 and #35). Full analysis: [`docs/github-projects-v2-support-report-2026-04-20.md`](../github-projects-v2-support-report-2026-04-20.md).

### Next steps (once unblocked)

1. Confirm issues appear on board (may resolve after GitHub fixes bug or token scope added)
2. Create two views in browser: Roadmap (filter `epic` label) + Tasks (group by assignee)
3. Assign team members to task issues
