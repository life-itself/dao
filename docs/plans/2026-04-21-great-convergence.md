---
created: 2026-04-21
authors: [rufus-pollock]
---

# The Great Convergence: Life Itself Knowledge Base and Guidance

Related: team coordination meeting notes at [`meetings/2026-04-21-re-team-coordination-patterns-and-tools.md`](../../../meetings/2026-04-21-re-team-coordination-patterns-and-tools.md) and hub notes at [`docs/plans/2026-04-21-team-coordination-hub-notes.md`](./2026-04-21-team-coordination-hub-notes.md)

## Summary

**Recommendation: merge the `strategy` repo into `tao`, making tao the single knowledge base for Life Itself.**

There is currently no single front door. Team members, collaborators, and new joiners must know to look in multiple places — and none of those places point clearly to each other. The root cause is that content serving the same jobs (orientation, finding things, writing things, operating day-to-day) is split across separate repos with no clear home rule.

The jobs to be done all point to one answer: one place.

- **Immediate action (today):** add a strategy/portfolio gateway page to tao.
- **Near-term:** migrate `strategy` repo content into tao. Historical strategy materials go into an archive section.
- **Leave `community` alone for now** — GitHub issues cannot be easily moved.

---

## Situation

Life Itself currently has multiple active repositories and locations serving as authoritative or semi-authoritative team-facing resources:

| Location | What's there | Status |
|---|---|---|
| [`strategy`](https://github.com/life-itself/strategy) (this repo) | Portfolio, initiatives, strategic docs, meeting notes, plans | Active |
| [`tao`](https://github.com/life-itself/tao) / [tao.lifeitself.org](https://tao.lifeitself.org) | Team playbook: culture, governance, ops, practices, how-we-work | Active |
| [`community`](https://github.com/life-itself/community) | Knowledge base content (concepts, orgs, people) + most GitHub issues | Active for issues |
| [`comms`](https://github.com/life-itself/comms) | Content log, some issues | Low activity |
| Google Drive | Archive, raw material, project docs | Active |

The tao is the natural home for team and collaborator guidance — it already frames "what Life Itself is and how it works" — but it currently has no pointer to the live strategy or portfolio. So it acts as an outdated front door.

The `strategy` repo contains the live portfolio map and initiative documents, plans, and meeting notes, but no guidance on how to work or where things go. It originated as an archive for historical strategy materials and grew from there.

The `community` repo houses most of the org's active GitHub issues, plus a substantial knowledge base of concepts, organisations, and related material.

## Complication

There is no single front door. Someone new — or returning after absence — must know to look in `strategy` for portfolio, `tao` for how-we-work, `community` for issues, and Drive for project docs. None of these point clearly to each other. The orientation failure is structural, not just a missing page.

The clearest way to see this is through the **jobs to be done** — what people actually need to do:

1. **Orient** — "I'm new or returning. What is Life Itself working on? Who owns what?"
2. **Find** — "Where is X?"
3. **Write** — "Where do I put this?"
4. **Operate** — "What are we doing this week? What happened in that meeting?"

Every one of these jobs acquires a prior question the moment there are two repos: *which repo?* That prior question is the friction we need to eliminate. Two knowledge bases means the jobs are never cleanly done.

Three pain points compound this:

- **New team members don't know where to look.** Matthew (remote, timezone difference) is the current live example, but the same applies to any new collaborator or returning contributor. The tao exists as a playbook but is disconnected from active portfolio and strategy. The portfolio exists but has no guidance on how to work.
- **Even existing team members lose track of where to put things.** When it is unclear whether a document belongs in `strategy`, `tao`, Drive, or `community`, the path of least resistance is inconsistency — which compounds the discovery problem over time.
- **Maintenance overhead is spread too thin.** Multiple disconnected locations means gardening work (link maintenance, cleanup, keeping things current) is either duplicated or neglected. In practice it is usually neglected, because delivery takes priority.

The deeper issue is that the current disorder reflects a real multi-month interregnum: the team changed, and systematising information was not a priority during that transition. This is not failure of awareness — it is a reasonable prioritisation trade-off that now needs rebalancing.

## Question

What is the minimum intervention that gives new and existing team members one clear front door into Life Itself's active work, guidance, and resources — and what is the right longer-term architecture for our knowledge base?

## Hypothesis

**Merge `strategy` into `tao`. Make tao the single knowledge base.**

The jobs to be done all require one place. The tao already has the right identity — "the guide to what we stand for and how we operate" — and adding portfolio, initiatives, plans, and meetings makes that actually true rather than aspirationally true.

Historical strategy materials from this repo (the `materials/` folder and older archived docs) go into a dedicated archive section in tao. There is no reason to maintain a separate repo for historical content.

Migration overhead is real but bounded and one-time. The benefit is permanent: every future team member, collaborator, and returning contributor lands in one place and finds everything.

### Stage 1: Make tao the front door (today)

Add a strategy and portfolio gateway page to tao linking to this repo and its portfolio map. This is the immediate fix — costs roughly one hour and is already the conclusion from today's team coordination meeting.

### Stage 2: Migrate strategy into tao (near-term)

Move content from `strategy` into tao:

- `portfolio/` and `initiatives/` — active portfolio and initiative files
- `plans/` and `meetings/` — team plans and meeting notes
- `docs/plans/` — strategic analysis and planning docs (including this document)
- `materials/` — historical strategy archive, into a dedicated archive section in tao
- `people/` — team/collaborator profiles, if not already in tao

Portfolio scripts and tooling can move with the content or live in a small standalone repo if needed — not a blocker.

### Leave `community` alone for now

GitHub issues cannot be moved easily between repos, so any merge of `community` into `tao` would strand the issue history. The knowledge base content there (concepts, organisations, people) also serves a different purpose from the playbook and strategy material. Revisit separately once the strategy/tao merge is done.

### Archive or absorb `comms`

Low activity. Either archive the repo or absorb relevant content (content log, any active issues) into tao or `community` as appropriate.

## Next Steps

1. Rufus and Armelle: add gateway page to tao linking to strategy repo and portfolio map. (Today.)
2. Plan and execute migration of `strategy` content into tao. Agree folder structure in tao first.
3. Redirect or archive the `strategy` repo once migration is complete.
4. Separately: decide fate of `comms` repo.
5. Separately: longer-term question of `community` repo and its knowledge base content.
