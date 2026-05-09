# Knowledge Management and Information Architecture for Team Coordination

**Date**: 2026-04-23  
**Related**: [[docs/plans/2026-04-21-team-coordination-hub-notes]]  
**Supersedes**: [[docs/plans/2026-04-21-team-coordination-hub-notes]]

## Purpose

This is a knowledge management and information architecture layer for team coordination.

- Make the team's information legible, findable, and maintainable.
- Support coordination, planning, and work initiation by surfacing the right context at the right time.
- Improve the tao site as the front door for this system, starting with the landing page and key destination pages.

This is not a decision about the team's working process itself, though it supports and shapes that process.

The guiding principle: a visitor landing on the tao should reach what they need in **one click**, and the landing page should present no more than **3–5 primary options** before nesting further detail.

---

## Jobs to Be Done

JTBDs are grouped by the six major questions from the team coordination hub notes. Two categories: **A = find/navigate** (primary — address now), **B = update/edit** (secondary — log now, address later).

Status legend:
- 🟡 `Exploring` - still being worked through
- 🟠 `Recommendation` - recommended by e.g. Armelle and Rufus
- 🟢 `Agreed` - agreed by the team

---

### 1. Portfolio View

*"How can any team member quickly get a current high-level view of Life Itself's active initiatives and projects?"*

| # | Job | User says... | Priority | Current answer | Tao destination |
|---|-----|-------------|----------|---------------|----------------|
| A1 | See all active initiatives and projects | "What is Life Itself working on right now?" | P0 | Portfolio map in `/portfolio/` | `/portfolio/` — primary card on landing page |
| A2 | Understand a specific initiative or project | "What is [X]? Who owns it? What's the status?" | P1 | Individual files in `/projects/` and `/initiatives/` | Direct links from portfolio map |
| B1 | Update the portfolio map | "A project status changed. How do I update it?" | P2 | Edit files in `/projects/` or `/initiatives/` | Needs clearer edit instructions; low frequency |

---

### 2. Weekly Focus

*"How can any team member quickly see what area or initiative each person is focused on this week?"*

| # | Job | User says... | Priority | Current answer | Tao destination |
|---|-----|-------------|----------|---------------|----------------|
| A3 | See who is working on what this week | "What is each person focused on this week?" | P1 | Weekly plans in `/plans/` — lightweight but exists | `/plans/` — card on landing page |
| B2 | Log my weekly focus | "It's Monday. Where do I record what I'm working on?" | P1 | Create/edit a file in `/plans/` | Process mostly clear; template would help |

---

### 3. Initiation Format

*"What is the minimum canonical format for starting a new initiative or project, and how are new ones proposed?"*

| # | Job | User says... | Priority | Current answer | Tao destination |
|---|-----|-------------|----------|---------------|----------------|
| A4 | Capture a quick idea | "I have an idea or suggestion. Where do I put it?" | P0 | Not clearly answered — no designated inbox | New page `/ideas` or section in `getting-stuff-done.md`; card on landing page |
| A5 | Start a new project or initiative | "I want to propose or kick off a project. What do I do?" | P1 | Partially in `getting-stuff-done.md` and `shapeup.md`; no single clear entry | Dedicated section or page; link from landing page |
| B3 | Archive or close a project | "This project is done. What do I do with its files?" | P2 | Not clearly documented | Needs a short convention note |

---

### 4. Document Conventions

*"What are the minimum shared conventions for where different kinds of materials should live?"*

| # | Job | User says... | Priority | Current answer | Tao destination |
|---|-----|-------------|----------|---------------|----------------|
| A6 | Know where to put a document | "Should this go in Drive or GitHub? Where does [type of doc] live?" | P1 | Documented in team coordination hub notes; not surfaced in tao | Short conventions page or section; link from landing page |
| A7 | Find a specific document or resource | "Where is the comms guide / ops guide / [thing]?" | P2 | Scattered across tao; search exists in published site | Improve landing page nav; sidebar categories |
| B4 | Log meeting notes | "We just had a meeting. Where do I put the notes?" | P2 | `/meetings/` folder | Mostly working; template would help |
| B5 | Add an event to the calendar | "We have an event. Where does it go?" | P3 | `events.md` or calendar in `strategy/` | Unclear; needs resolution |

---

### 5. Maintenance Model

*"What gardening and maintenance work is needed to keep the coordination layer accurate, and who is responsible?"*

| # | Job | User says... | Priority | Current answer | Tao destination |
|---|-----|-------------|----------|---------------|----------------|
| A8 | Know who is responsible for what | "Who owns the portfolio map? Who maintains the knowledge base?" | P2 | Partially in team coordination hub notes; not surfaced | Short responsibilities section in ops or a coordination page |
| B6 | Update my people profile | "My role changed. How do I update my profile?" | P3 | `/people/` folder | Low priority |

---

### 6. Coordination Level

*"What is the minimum viable shared coordination the team actually needs?"*

| # | Job | User says... | Priority | Current answer | Tao destination |
|---|-----|-------------|----------|---------------|----------------|
| A9 | Know our meeting cadence and how to join | "When do we meet? What's the agenda format?" | P2 | `meetings/` and `meetings.md` | `meetings.md` |
| A10 | Understand the coordination model | "How do we make decisions? Who has authority over what?" | P2 | `governance.md`; partially in team coordination hub notes | `governance.md` — link from ops section |

---

### 7. General Orientation (new — beyond original six questions)

*These JTBDs came up as we mapped the user experience but don't map to one of the six hub questions. They are primarily about helping people orient to Life Itself as a whole.*

| # | Job | User says... | Priority | Current answer | Tao destination |
|---|-----|-------------|----------|---------------|----------------|
| A11 | Get onboarded / understand how things work here | "I'm new. Where do I start?" | P1 | `onboarding.md` exists | `onboarding.md` — link prominently from landing page |
| A12 | Understand Life Itself's strategy and purpose | "What are we trying to achieve and why?" | P1 | `strategy/` folder; `narrative.md`, `scqh.md` | `/strategy/` summary page |
| A13 | Find a person / know who does what | "Who is on the team? Who owns X?" | P1 | `/people/` exists | `/people/` — in landing page nav |
| A14 | Know our comms guidelines and channels | "What are our channels? What are the guidelines?" | P2 | `communications.md` and `communications/` folder | `communications.md` |

---

## Landing Page Design

### Principle

Max **4 primary cards** on the landing page. Each card: icon or image, 1-line description, single link. Nest everything else.

### Proposed primary cards (maps to P0–P1 JTBDs above)

```
┌─────────────────────┐  ┌─────────────────────┐
│  📋 Portfolio       │  │  💡 Capture an Idea  │
│  What we're         │  │  Log a thought       │
│  working on         │  │  or suggestion       │
│  → /portfolio/      │  │  → /ideas            │
└─────────────────────┘  └─────────────────────┘

┌─────────────────────┐  ┌─────────────────────┐
│  📅 Weekly Focus    │  │  🚀 Start a Project  │
│  Who's doing what   │  │  Propose or kick     │
│  this week          │  │  off something new   │
│  → /plans/          │  │  → /getting-stuff-   │
│                     │  │    done#projects     │
└─────────────────────┘  └─────────────────────┘
```

Secondary navigation (sidebar or "More" section):
- Onboarding → `onboarding.md`
- People → `/people/`
- Strategy → `/strategy/`
- Operations → `ops.md`
- Communications → `communications.md`
- Meetings → `/meetings/`

---

## Implementation Steps

### Step 1: Define the jobs (this document — done ✓)

### Step 2: Fill the gaps — create missing destination pages

- [x] Create `inbox.md` — ideas inbox with two paths: Google Doc in Drive folder or direct GitHub issue, both tracked as GitHub issues with `inbox` label. Drive folder: https://drive.google.com/drive/u/0/folders/1lXkwDJzeh4ky399XTJWXjhvtDlijK6dr
- [x] Create `start-project.md` — Working Backwards PR/FAQ process: press release required, FAQ and SCQH optional
- [ ] Add a short document conventions page or section (from the hub notes answers) — deferred; prefer surfacing implicitly via UX rather than a separate doc
- [x] ~~Stub a `/strategy/index.md`~~ — already exists as `strategy/README.md`

### Step 3: Redesign `index.md` landing page

- [x] Replace current wall-of-links with 4 primary cards (HTML/Tailwind grid)
- [x] Move remaining links into secondary "Everything else" section with markdown subheadings
- [x] Cards confirmed rendering on live site

### Step 4: Improve sidebar / navigation config — done ✓

- [x] Simplify nav bar: Portfolio, Plans, People, Handbook, Strategy
- [x] Remove Initiatives, Projects, Meetings from nav (accessible via portfolio or off-repo)
- [x] Exclude AGENTS.md and CLAUDE.md from publishing (`contentExclude`)
- [x] Hide `strategy/archive/` and `strategy/log/` from sidebar (`contentHide`)

### Step 5: Repo reorganisation — done ✓

Not in original plan but done as part of this work:
- [x] Create `handbook/` — moved all operational how-to docs there
- [x] Create `strategy/plans/` — moved annual plans (renamed to year only)
- [x] Move `governance.md` to `strategy/archive/`
- [x] Add `handbook/README.md` index page
- [x] Add redirects in `config.json` for all moved paths
- [x] Update `AGENTS.md` to document the four-layer structure

### Step 6 (future): Weekly focus

- [ ] Decide on approach for lightweight weekly focus visibility — options: GitHub issues, a dedicated weekly update format, or something else. `handbook/weekly-focus.md` is stubbed as placeholder. Needs team input on what level of visibility is actually useful before building anything.

### Step 7 (future): Search optimisation

- [ ] Ensure key pages have good front-matter titles so Typesense (Flowershow built-in search) surfaces them correctly

---

## Open Questions

1. ~~**Idea inbox location**~~ — resolved: `handbook/inbox.md` with Google Drive folder + GitHub issue tracking
2. ~~**Cards as HTML or Markdown**~~ — resolved: confirmed working on live site
3. **Portfolio map update process**: Is the portfolio auto-generated from project files, or manually maintained? Affects B1.

---

## Additional JTBDs

*These jobs came up in the team discussion after the initial JTBD set. They are about planning capacity, scope, and making the monthly/weekly plan easier to navigate.*

| # | Job | User says... | Priority | Current answer | Tao destination |
|---|-----|-------------|----------|---------------|----------------|
| A15 | See whether we are overcommitted | "Are Sylvie and I overcommitted for the next month?" | P1 | Not explicitly captured | Monthly and weekly plans, plus portfolio map / board |
| A16 | Decide what to defer vs delegate | "Which items should we defer rather than delegate?" | P1 | No explicit guidance yet | Planning notes and handbook guidance |
| A17 | Relate actions to the portfolio and projects | "Where does this action sit in the portfolio and which project does it belong to?" | P1 | Partially visible through portfolio map and board | Portfolio map, board, and project pages |
