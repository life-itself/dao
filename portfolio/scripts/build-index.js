#!/usr/bin/env node
/**
 * Parse initiatives/, projects/, and ideas/ frontmatter into:
 *   data/index.js    – `const PORTFOLIO_DATA = [...]` for file:// usage
 *
 * Usage: node scripts/build-index.js
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join, basename, resolve, dirname } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import { toSitePath } from "./site-path.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "../..");

const FOLDERS = {
  initiatives: "initiative",
  projects: "project",
  ideas: "idea",
};

const FIELDS = [
  "title", "description", "status", "category", "created", "code", "parent",
  "tags", "url", "github", "phase", "tracker", "owner",
];

function parseFile(filePath, folder, type) {
  const raw = readFileSync(filePath, "utf-8");
  const { data: fm } = matter(raw);
  const slug = basename(filePath, ".md");

  const entry = { slug, type, file: `${folder}/${basename(filePath)}` };

  for (const field of FIELDS) {
    const val = fm[field];
    if (Array.isArray(val)) {
      entry[field] = val;
    } else if (val != null) {
      entry[field] = String(val);
    } else {
      entry[field] = null;
    }
  }

  // Normalize parent: [[slug]] wiki-link syntax gets parsed as nested arrays
  if (entry.parent) {
    let p = entry.parent;
    while (Array.isArray(p)) p = p[0];
    entry.parent = p ? String(p) : null;
  }

  if (!entry.title) {
    entry.title = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  }

  entry.sitePath = toSitePath(entry.file);

  return entry;
}

function buildIndex() {
  const entries = [];

  for (const [folder, type] of Object.entries(FOLDERS)) {
    const dirPath = join(REPO_ROOT, folder);
    if (!existsSync(dirPath)) continue;

    const files = readdirSync(dirPath)
      .filter(f => f.endsWith(".md"))
      .sort();

    for (const file of files) {
      entries.push(parseFile(join(dirPath, file), folder, type));
    }
  }

  return entries;
}

const index = buildIndex();
const json = JSON.stringify(index, null, 2);

const outPath = join(REPO_ROOT, "portfolio", "index.js");
writeFileSync(outPath, `const PORTFOLIO_DATA = ${json};\n`, "utf-8");
console.error(`Wrote ${index.length} entries to portfolio/index.js`);
