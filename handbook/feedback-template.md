---
created: 2026-05-18
---

# Feedback Template

A reusable Google Sheet for collecting team feedback on events, courses, residencies, and other team-produced work. Built so members can **vote on existing feedback items** rather than restating the same point — anyone who agrees with what someone else has written just ticks a checkbox, and a counter tallies the agreements live.

## How it works

Each event gets its own Sheet (or its own tab) copied from a template. The template has:

| Column | Purpose |
|---|---|
| Section | Dropdown: *What worked well* / *Constructive feedback* / *Suggestion* |
| # | Auto-numbered |
| Feedback item | The point being raised |
| Proposed by | Who first wrote it |
| One column per team member | Checkbox — tick to agree |
| Agrees | Auto-count of ticked boxes |

Rows where a **majority of the team has agreed** turn green automatically, so the consensus items rise visually. Sort by *Agrees* within a Section to see the strongest signals first.

## One-time setup

1. **Google Drive** → **New** → **Google Sheets** → **Blank spreadsheet**
2. Rename the file to something like **Feedback — TEMPLATE**
3. **Extensions** → **Apps Script** — opens the script editor
4. Delete any boilerplate and paste the script below
5. **Save** (💾 or `Ctrl+S`)
6. **Run** → choose `buildFeedbackTemplate` → authorize (Google will warn it's "unsafe" — that's only because the script isn't published; your own script is fine)
7. Close and reopen the Sheet — a new **Feedback Template** menu appears in the toolbar

## Using it for a real event

1. Right-click the **Feedback — TEMPLATE** tab → **Duplicate**
2. Rename the copy, e.g. *Feedback — UK Gathering 2026*
3. Delete the example rows
4. Share the Sheet link in the next team meeting agenda
5. Members add their feedback, then tick boxes on others' items they agree with, over the following 1–2 weeks
6. At the next meeting, sort by **Agrees** and discuss the top-ranked items first

## Adding or removing team members

Use the **Feedback Template** menu in the toolbar:

- **Add team member** → prompts for a name, inserts a new checkbox column in the right place, updates the Agrees formula and the green-highlight threshold
- **Remove team member** → prompts for a name, deletes their column, updates everything else

The script auto-recomputes the **green threshold** as a simple majority (`ceil(N/2)`) whenever membership changes. To override, set `AGREE_THRESHOLD = 4;` (or whatever number) at the top of the script.

## The script

```javascript
const TOTAL_ROWS = 100;
const FIRST_MEMBER_COL = 5;        // column E
const AGREE_THRESHOLD = 0;         // 0 = auto (majority); set to a number to override

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Feedback Template')
    .addItem('Build template (fresh sheet)', 'buildFeedbackTemplate')
    .addSeparator()
    .addItem('Add team member', 'addTeamMember')
    .addItem('Remove team member', 'removeTeamMember')
    .addToUi();
}

function buildFeedbackTemplate() {
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.clear();
  sheet.clearConditionalFormatRules();

  const teamMembers = ['Rufus', 'Sylvie', 'Valérie', 'Jarlath', 'Matthew', 'Armelle'];
  const sections = ['What worked well', 'Constructive feedback', 'Suggestion'];

  const headers = ['Section', '#', 'Feedback item', 'Proposed by', ...teamMembers, 'Agrees'];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
       .setFontWeight('bold')
       .setBackground('#e8eaed')
       .setHorizontalAlignment('center');
  sheet.setFrozenRows(1);

  const sectionRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(sections, true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, 1, TOTAL_ROWS, 1).setDataValidation(sectionRule);

  const numberFormulas = [];
  for (let i = 2; i <= TOTAL_ROWS + 1; i++) {
    numberFormulas.push([`=IF(C${i}="","",ROW()-1)`]);
  }
  sheet.getRange(2, 2, TOTAL_ROWS, 1).setValues(numberFormulas);
  sheet.getRange(2, 2, TOTAL_ROWS, 1).setHorizontalAlignment('center');

  const lastMemberCol = FIRST_MEMBER_COL + teamMembers.length - 1;
  sheet.getRange(2, FIRST_MEMBER_COL, TOTAL_ROWS, teamMembers.length).insertCheckboxes();
  sheet.getRange(2, FIRST_MEMBER_COL, TOTAL_ROWS, teamMembers.length).setHorizontalAlignment('center');

  sheet.setColumnWidth(1, 160);
  sheet.setColumnWidth(2, 40);
  sheet.setColumnWidth(3, 380);
  sheet.setColumnWidth(4, 110);
  for (let i = 0; i < teamMembers.length; i++) {
    sheet.setColumnWidth(FIRST_MEMBER_COL + i, 70);
  }
  sheet.setColumnWidth(lastMemberCol + 1, 80);

  const examples = [
    ['What worked well',      '', 'Welcome circle felt warm and grounded',     'Sylvie'],
    ['Constructive feedback', '', 'Schedule ran 40 min over each day',         'Yoyo'],
    ['Suggestion',            '', 'Add a quiet reflection slot before dinner', 'Matthew'],
  ];
  sheet.getRange(2, 1, examples.length, 4).setValues(examples);

  updateAgreesFormulas(sheet);
  sheet.setName('Feedback — TEMPLATE');
  SpreadsheetApp.getUi().alert('Done! Template ready. Use the "Feedback Template" menu to add/remove members.');
}

function addTeamMember() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('Add team member', 'Name:', ui.ButtonSet.OK_CANCEL);
  if (response.getSelectedButton() !== ui.Button.OK) return;
  const name = response.getResponseText().trim();
  if (!name) return;

  const sheet = SpreadsheetApp.getActiveSheet();
  const agreesCol = findAgreesColumn(sheet);
  if (agreesCol < 0) { ui.alert('No Agrees column found — run "Build template" first.'); return; }

  sheet.insertColumnBefore(agreesCol);
  const newCol = agreesCol;

  sheet.getRange(1, newCol).setValue(name)
       .setFontWeight('bold')
       .setBackground('#e8eaed')
       .setHorizontalAlignment('center');
  sheet.getRange(2, newCol, TOTAL_ROWS, 1).insertCheckboxes();
  sheet.getRange(2, newCol, TOTAL_ROWS, 1).setHorizontalAlignment('center');
  sheet.setColumnWidth(newCol, 70);

  updateAgreesFormulas(sheet);
}

function removeTeamMember() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt('Remove team member', 'Name:', ui.ButtonSet.OK_CANCEL);
  if (response.getSelectedButton() !== ui.Button.OK) return;
  const name = response.getResponseText().trim();
  if (!name) return;

  const sheet = SpreadsheetApp.getActiveSheet();
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const idx = headers.indexOf(name);
  if (idx === -1) { ui.alert(`No column found for "${name}".`); return; }
  if (idx + 1 < FIRST_MEMBER_COL) { ui.alert(`"${name}" is not a member column.`); return; }

  sheet.deleteColumn(idx + 1);
  updateAgreesFormulas(sheet);
}

function updateAgreesFormulas(sheet) {
  const agreesCol = findAgreesColumn(sheet);
  if (agreesCol < 0) return;
  const lastMemberCol = agreesCol - 1;
  const memberCount = lastMemberCol - FIRST_MEMBER_COL + 1;
  const firstLetter = colLetter(FIRST_MEMBER_COL);
  const lastLetter = colLetter(lastMemberCol);

  const formulas = [];
  for (let i = 2; i <= TOTAL_ROWS + 1; i++) {
    formulas.push([`=IF(C${i}="","",COUNTIF(${firstLetter}${i}:${lastLetter}${i},TRUE))`]);
  }
  sheet.getRange(2, agreesCol, TOTAL_ROWS, 1).setValues(formulas);
  sheet.getRange(2, agreesCol, TOTAL_ROWS, 1)
       .setHorizontalAlignment('center')
       .setFontWeight('bold');

  const threshold = AGREE_THRESHOLD > 0 ? AGREE_THRESHOLD : Math.ceil(memberCount / 2);
  sheet.clearConditionalFormatRules();
  const wholeData = sheet.getRange(2, 1, TOTAL_ROWS, agreesCol);
  const greenRule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(`=AND($${colLetter(agreesCol)}2<>"",$${colLetter(agreesCol)}2>=${threshold})`)
    .setBackground('#d9ead3')
    .setRanges([wholeData])
    .build();
  sheet.setConditionalFormatRules([greenRule]);
}

function findAgreesColumn(sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const idx = headers.indexOf('Agrees');
  return idx === -1 ? -1 : idx + 1;
}

function colLetter(col) {
  let s = '';
  while (col > 0) {
    const m = (col - 1) % 26;
    s = String.fromCharCode(65 + m) + s;
    col = Math.floor((col - m) / 26);
  }
  return s;
}
```

## Scope reminder

This template is for **structured feedback on team-produced work** — courses, events, residencies, productions. It is **not** for emotional feedback or feedback from people outside the team. See tile 9 of the [Knowledge Management issue](https://github.com/life-itself/armelle/issues/2) for the broader Feedback workflow.
