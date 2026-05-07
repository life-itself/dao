# Team Coordination Hub Notes

Related issue: https://github.com/life-itself/strategy/issues/3

## Core Questions

- **Portfolio View**: How can any team member quickly get a current high-level view of Life Itself's active initiatives and projects, including purpose, owner, status, and the key entry document or canonical location for each? **Current answer: use the portfolio map in this repo.**
- **Weekly Focus**: How can any team member quickly see, at a lightweight level, what area or initiative each person is focused on this week, so they can orient themselves without requiring direct verbal handoff? **Current answer: prototype a lightweight weekly / calendar view.**
- **Initiation Format**: What is the minimum canonical document or briefing format for starting a new initiative or project, and what process should govern how new initiatives, projects, and ideas are proposed? **Current answer: lighter-weight than [A10][], likely press release + SCQ + basics.**
  - What counts as the canonical starting document for a new initiative or project?
  - Do we want to use something like [A10][] systematically, adapt it, or replace it with a lighter-weight minimum version?
  - What is the minimum information that must be captured at the start: purpose, owner, scope, budget, status, key links, or something else?
  - What is the process for proposing new initiatives, new projects, and smaller improvement ideas?
  - Is there a distinct "idea inbox" for rough proposals and suggestions before they become formal initiatives?
  - If someone simply wants to create a new document or write something down without yet invoking governance, where should they do that?
- **Document Conventions**: What are the minimum shared conventions for where different kinds of materials should live, so the team has one clear canonical location for each kind of document without over-engineering the system? **Current answer: one canonical place per document type.**
- **Maintenance Model**: What gardening and maintenance work is required to keep this coordination layer accurate over time, and who is responsible for doing it? **Current answer: Armelle owns this, with Rufus supporting and Matthew as backup; others may update parts of it.**
- **Coordination Level**: What is the minimum viable level of shared coordination and visibility the team actually needs, given the mix of tightly coordinated work and more independent work? **Current answer: deferred for now; likely informed by sociocratic / holocratic approaches plus shaping-and-shipping practices.**

### Portfolio View

**Current hypothesis**: The answer is the portfolio work and map that we now have in this repository in the `portfolio` folder.

### Weekly Focus

**Current hypothesis**: We likely need a lightweight extension to weekly planning, plus some kind of simple calendar-style view alongside the portfolio map, so people can see what areas or initiatives each person is working on over a short period of time.

Open points within this:

- Do we want this only week to week, or do we want a lightweight history so someone can also see what a person was working on last week?
- How much granularity do people need: initiative, project, or task?
- The current working assumption is that this should stay at the high-level initiative or project layer, not task-level tracking.
- It may be useful for people to see not only the current week but also a short forward-looking period.

Next step:

- Build a simple prototype of this view and test whether it gives enough orientation without turning into full task management.

### Initiation Format

**Current hypothesis**: We should distinguish between lightweight input or rough ideas and the much rarer case of actually starting a new initiative or project.

For actual projects, a lighter-weight initiation document is probably needed. The current [A10][] is likely too heavy, and a more useful format may combine:

- a short "press release" or announcement of what success would look like when complete
- a lightweight `SCQ` or `SQ` framing to clarify situation, complication, and question
- a minimal record of practical details such as owner, scope, and budget or time envelope

Further working notes:

- In practice, initiatives often begin through a boot-up project, so the project document may be the real initiation artefact.
- The press release format appears valuable because it forces clarity about the completed state in a lightweight way.
- `SCQ` can also help people arrive at a stronger press release.
- This discipline is useful, but people often need support and feedback to do it well.
- There is also a governance question here about who is actually empowered to initiate projects.

Working answer to the lowest-level sub-question:

- We should have one clearly designated inbox location where people can simply create documents without ambiguity.
- That could be an inbox folder in Google Drive or an inbox location in GitHub / the strategy repo, but not both.
- The key principle is a single obvious place, not two parallel places.
- The final choice may depend partly on writing workflow, including whether people want to use AI-assisted writing that works better outside Google Docs.
- If needed, the team can be trained to create simple Markdown documents so GitHub can be used more consistently.

### Document Conventions

Sub-questions:

- What are the different kinds of material?
- What are the options for the locations?
- What are our selection criteria for evaluating those options?
- What are the answers?

Selection criteria:

- Canonicality: where can there be one clear source of truth?
- Ease of authoring: where can the people involved actually write and edit comfortably?
- Ease of discovery: where will others reliably look for it?
- Maintainability: how easy is it to keep links current and avoid duplication?
- Collaboration mode: does this need live collaborative editing or slower versioned editing?
- AI compatibility: does the writing workflow benefit from AI tooling that works better in one environment?
- Longevity: is this a temporary working doc, an evergreen reference, or an archive item?

Material types and current answers:

| Title | Description | Current location |
| --- | --- | --- |
| Strategic Documents | Strategy, portfolio, initiative framing, roadmaps | GitHub Markdown in this `strategy` repo |
| Project Documents | Boot-up docs, plans, specs, working notes | Authoritative index via the portfolio list; canonical doc can be GitHub or Google Drive depending on project owner and project needs |
| Task and Coordination Records | Weekly plans, status updates, task lists | Decided by project, with GitHub task tracking as the default |
| Knowledge-Base Material | How things work, onboarding context, evergreen explanations | Shared Life Itself knowledge base for common material; project-specific knowledge may remain within each project's own knowledge base |
| Archive / Raw Material | Source files, contracts, recordings, reference docs, supporting assets | Default to Google Drive, likely with one folder per project, while allowing repo folders in some cases |
| Incoming / Informal Inputs | Rough ideas, requests, proposals, inbox items | One designated inbox location, currently leaning toward Google Drive |

Further notes by material type:

- **Strategic Documents**
  - This includes the main strategy and portfolio materials.
  - The current view is that these should be versioned and maintained in Markdown in this repository.

- **Project Documents**
  - The authoritative index of project documents is currently the portfolio list.
  - The canonical project document itself may be in GitHub or Google Drive depending on the project.
  - This remains somewhat open and may be debated further if too much flexibility becomes confusing.

- **Task and Coordination Records**
  - These can be handled at project level rather than forcing one team-wide method.
  - The current default is GitHub task tracking where no better project-specific alternative exists.

- **Knowledge-Base Material**
  - There is still uncertainty here because there are multiple possible knowledge bases.
  - Common knowledge such as how things work and onboarding context should likely live in a shared Life Itself knowledge base and be maintained rigorously.
  - Individual projects may also maintain their own knowledge bases.
  - Some supporting material for knowledge use, such as recordings or larger files, may still live in Drive.

- **Archive / Raw Material**
  - This includes things like contracts, recordings, and accumulated project files.
  - The current default is Google Drive, probably with one folder per project.
  - This reflects Drive's strengths for file management, search, and indexing compared to GitHub.
  - There is still some tension here because GitHub is attractive for structure and versioning, but less suited to general file archive use.

- **Incoming / Informal Inputs**
  - The key principle is one obvious inbox, not parallel inboxes.
  - The current lean is toward Google Drive, though this still has some tension because some writing workflows work better in Markdown and GitHub.

Current placement rules:

- Strategic documents default to GitHub Markdown in this repository.
- Every project should be represented in an authoritative index.
- Project documents may be canonical either in GitHub or in Google Drive, depending on the project owner and project needs.
- Task and coordination records can be project-specific, with GitHub as the default fallback.
- Common knowledge-base material should be curated separately from raw archive material.
- Archive material defaults to Google Drive.
- Incoming ideas and rough documents should have one single designated inbox location.

### Coordination Level

**Current hypothesis**: This is still partly deferred, but the weekly or biweekly team planning meeting is one place where practical coordination structure is already being defined.

Sub-questions and current answers:

- What is the team meeting cadence? **Current answer: biweekly or weekly at present; likely weekly for now.**
- Who facilitates this meeting? **Current answer: Armelle.**
- How do we do team planning and coordination in that meeting? **Current answer: review what people are working on, plan the coming period, and cover tensions, concerns, proposals, and blockers.**
- What is the structure of the weekly planning meeting? **Current answer: one combined meeting for now, rather than splitting planning and sociocratic process into separate meetings.**
- What document do we use for the meeting itself? **Current answer: use a Google Doc for now.**
- Why use a Google Doc? **Current answer: it is the best fit for real-time collaboration on agenda, notes, concerns, and items people want to add ahead of the meeting.**
- Do we also want a board or Kanban view? **Current answer: possibly later; for now we keep everything in the Google Doc, with a board as a future evolution if needed.**

Rough agenda:

1. Review the agenda.
2. Review planning for this week.
3. Check in on blockers given the planning.
4. Review concerns and proposals.
5. Action items and questions.
6. Check out.

Notes:

- The weekly planning should ideally be prepared in advance, with some room for amendment during the meeting.
- The Google Doc should include the agenda itself, the planning view, blockers, concerns and proposals, action items, and checkout.

## Consolidated Summary

The conversation distinguishes between two different problems that should not be collapsed into one.

The first problem is navigation and visibility. A gateway or hub page could help people find the right documents, projects, people, and current areas of work by linking to where things actually live. This is the "front door" question.

The second problem is information architecture and ongoing maintenance. A gateway does not by itself resolve the harder question of where materials should live in the first place, nor does it guarantee that links stay current. That requires explicit conventions, regular issue and knowledge-base gardening, and sustained labour over time.

There is also a broader strategic tension underneath the immediate coordination problem. Part of the disorientation may come not only from missing navigation but from the team working across many different initiatives at once, with varying levels of coordination between people. This raises a structural question about how much shared task management is actually needed, versus high-level clarity on initiatives, ownership, and current focus areas.

Another key point is that the present disorder is not simply a failure of awareness. There has been a multi-month interregnum during team transition, and systematising information has not been prioritised during that period. Creating and maintaining clearer maps of projects, people, and context is possible, but it is not a zero-cost action. It requires explicit time and responsibility.

The emerging direction is therefore not to impose a rigid corporate model, but to find a balance: preserve Life Itself's organic and evolving character while creating enough shared structure that new and existing team members can understand the ecosystem, know who is doing what, and find the information they need without excessive dependence on ad hoc verbal handoff.

## Key Points Raised

- The gateway page idea and the question of where documents should live are separate issues.
- A hub can help people find things, but it does not solve the underlying pattern of storage and maintenance by itself.
- If documents live only in Drive, for example, the gateway only works if someone has added and maintained the relevant links.
- The difficult part is the gardening: link maintenance, cleanup, reorganisation, and keeping the knowledge base usable over time.
- This labour is crucial but often neglected because people naturally prioritise immediate delivery over maintenance.
- A high-level view of the portfolio, initiatives, and ecosystem is needed so people understand the broader context of their work.
- Team members also want a lightweight sense of who is working on what area week to week.
- The need is not necessarily detailed shared task management, but enough visibility that people do not feel lost.
- Some disorientation is connected to onboarding and to not knowing the wider cast of contributors, collaborators, and adjacent projects.
- More structure is useful now partly because the team has changed and new people need orientation, even if that level of mapping would previously have been too costly to maintain.
- Any move toward greater systematisation involves a trade-off: time spent building and maintaining coordination infrastructure is time not spent on direct shipping.
- Part of the coordinator role is to take on some of this connective and systematising labour over time.

## Sketch of Areas

Below is a simple text sketch of the different areas we have, based on the whiteboard drawing. It is not meant as a precise system diagram, just a rough map of the main zones and how they relate.

```text
                         +------------------+     +----------------------+
                         |     STRATEGY     |     |       INCOMING       |
                         |                  |     |   Zoom / Email /     |
                         |    portfolio     |     |   other entrypoints  |
                         +------------------+     +----------------------+
                                   |
                                   | informs
                                   v
                    +-------------------------------------------+
                    |                  PM + TM                  |
                    |   project management and task management  |
                    +-------------------------------------------+
                               ^                       |
                               |                       |
                               | links with            | draws on / points to
                               |                       v
                    +------------------+      +--------------------------+
                    |     KNOWLEDGE    |      |         ARCHIVE          |
                    |       BASE       |<---->|     raw storage area     |
                    |       (KB)       |      |   e.g. Drive / GitHub    |
                    +------------------+      +--------------------------+
```

Interpretation:

- `KB` = knowledge base.
- `PM + TM` = project management and task management.
- The small box under strategy in the sketch is better named `portfolio`.
- `Strategy` and `portfolio` sit more "up in the woods": somewhat separate from day-to-day operations, but informing the rest of the system.
- `Incoming` refers to channels like Zoom and email where requests, conversations, and inputs arrive.
- `PM + TM` is where active coordination work happens.
- The knowledge base and archive are related but distinct: the archive is where material may live, while the knowledge base is the more curated layer that helps people find and use it.

## Appendix A: Earlier Raw Dump

Summary of earlier discussion:

- Armel gave a concrete example about whether someone like YoYo should put a file on Drive or GitHub.
- The response was that the proposed solution is a gateway document, but that does not by itself answer the separate question of the pattern for where material should live.
- The gateway and the archive / knowledge-base pattern are therefore two distinct points.
- One possible operating rule is that some materials live only in Drive and not in GitHub, with the gateway linking to them.
- The technical challenge is not only where the canonical version lives, but how the gateway discovers and maintains links to it.
- Obsidian was mentioned as one possible way to create linked gateway pages.
- The hard part is not booting up the system once, but the ongoing gardening work needed to keep it useful.
- That gardening includes issue gardening, knowledge-base gardening, and wiki gardening: maintaining links, cleaning up structure, and reorganising over time.
- This kind of labour is often neglected, even though it is essential to long-term usefulness.

## Appendix B: Later Raw Dump

Summary of later discussion:

- The NHS analogy was used to make the point that a coordination problem cannot be solved simply by removing one visible friction point; there are deeper structural tensions underneath.
- One of those tensions is strategic: the team may be doing too many things at once, which creates fragmentation and makes coordination harder.
- Shared task management only makes full sense when team members are tightly coordinating on the same work; otherwise, people may mainly need high-level objectives and clear ownership rather than detailed common task systems.
- The portfolio map was acknowledged as the first step toward giving a global view, but it remains incomplete as an orientation tool for new team members.
- The discussion identified a need for people to understand the overall ecosystem: what the main initiatives are, where they fit, why they matter, and what the key documents are.
- A second need is for people to understand where they themselves sit within that ecosystem and what others are currently focused on.
- This includes awareness not only of core team members but also of more peripheral collaborators and adjacent contributors.
- Part of the current feeling of disorder may be explained by the recent interregnum between the previous team configuration and the current one.
- Existing coordination structures, roadmaps, and project-tracking practices have existed in the past, but were not restarted immediately because other priorities took precedence.
- The absence of current maps and shared context is therefore partly a prioritisation issue, not merely an oversight.
- The conversation emphasised that clearer systematisation requires real time and effort.
- The response was that this labour can increasingly be carried by a coordination role, though it still represents a deliberate reallocation of attention.
- The goal is not a rigid "widget factory" model but a structure that still allows for organic emergence while reducing disorientation.

[A10]: https://docs.google.com/document/d/1OQNdrZuejA-z9nRI6ahegmRkF3bt2Gw4EgUML0g2fqo/edit?tab=t.0
