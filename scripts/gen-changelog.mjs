// Single-sources the per-version "What changed" pages from the product-wide
// release-notes HTML (the Setics Sttar Release Notes document).
//
//   Sttar Release Notes.html   (source of truth — authored by the product team)
//   = docs-*/changelog.md + *_versioned_docs/version-*/changelog.md  (generated)
//
// The release notes cover the whole product (2.0 -> 2.5); this script parses
// them and writes the changelog page for every documented version, for each
// manual (Advanced Designer / Planner / Batch Engine share the same notes).
//
// Run ON DEMAND with `npm run gen:changelog`, then commit the generated pages.
// It is NOT a build pre-hook: the source HTML lives outside the repo (in the
// author's Documents folder) and is absent on CI. Only the sanitised generated
// markdown is committed.
//
// Confidentiality guard: the source HTML ends with an "Internal notes" section
// (backlog / internal planning). Everything from that <h2> onward is dropped
// and never published.
//
// Source path: override with the RELEASE_NOTES_HTML env var; defaults to the
// standard local location.

import {readFile, writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SOURCE =
  process.env.RELEASE_NOTES_HTML ||
  'C:\\Users\\mpoiroux\\Documents\\Sttar\\Release Notes\\Sttar Release Notes.html';

// Which release-note versions feed which changelog page(s). Multi-version
// targets (the 2.4 line) are rendered with one subsection per build.
const TARGETS = [
  {
    label: '2.5',
    versions: ['2.5'],
    intro: 'Release notes for STTAR 2.5 (the current *Next* line).',
    files: [
      'docs-advanced-designer/changelog.md',
      'docs-batch-engine/changelog.md',
      'docs-planner-overrides/changelog.md',
    ],
  },
  {
    label: '2.4',
    versions: ['2.4.6', '2.4.5', '2.4.4', '2.4.3', '2.4.2', '2.4.1', '2.4.0'],
    intro: 'Cumulative release notes for the STTAR 2.4 line (2.4.0 → 2.4.6).',
    files: [
      'advanced-designer_versioned_docs/version-2.4/changelog.md',
      'planner_versioned_docs/version-2.4/changelog.md',
      'batch-engine_versioned_docs/version-2.4/changelog.md',
    ],
  },
  {
    label: '2.3',
    versions: ['2.3'],
    intro:
      'Release notes for the STTAR 2.3 maintenance branch (2.3.0 → 2.3.15).',
    files: ['advanced-designer_versioned_docs/version-2.3/changelog.md'],
  },
];

const DEFAULT_FRONTMATTER = `---
sidebar_position: 8
title: What changed
---`;

// --- HTML helpers ----------------------------------------------------------

function decode(s) {
  return s
    .replace(/<code>([\s\S]*?)<\/code>/g, (_, c) => '`' + c.trim() + '`')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function pick(block, re) {
  const m = block.match(re);
  return m ? m[1] : '';
}

// The raw 2.4 change descriptions carry internal tracking residue (ADO work
// items #NNNN, PR numbers, build numbers) that must not reach customer-facing
// notes. Drop parentheticals that are *only* such references, then any stray
// #NNNN / PR NNN tokens — while leaving real prose like "(5 and 6)" or
// "(see Installation)" untouched.
function stripRefs(s) {
  return s
    .replace(/\s*\(([^)]*)\)/g, (m, inner) => {
      const residue = inner
        .replace(/#\d+/g, '')
        .replace(/PR\s*\d+/gi, '')
        .replace(/\b\d{3,5}\b/g, '')
        .replace(/[,/;&\s]+/g, '');
      return residue === '' ? '' : m;
    })
    .replace(/#\d+/g, '')
    .replace(/\bPR\s*\d+/gi, '')
    .replace(/\s*\(\s*[,;\s]*\)/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([.;,])/g, '$1')
    .trim();
}

// Parse one <li> change entry into {tag, title, build, desc}.
function parseEntry(li) {
  const tag = decode(pick(li, /class="tag[^"]*">([\s\S]*?)<\/span>/));
  const build = decode(pick(li, /class="build-tag">([\s\S]*?)<\/span>/));
  let titleHtml = pick(li, /class="change-title">([\s\S]*?)<\/div>/);
  titleHtml = titleHtml.replace(/<span class="build-tag">[\s\S]*?<\/span>/, '');
  const title = stripRefs(decode(titleHtml));
  const desc = stripRefs(decode(pick(li, /class="change-desc">([\s\S]*?)<\/div>/)));
  return {tag, title, build, desc};
}

// Parse one <section data-version> block into its h3 groups.
function parseSection(block) {
  // Drop the per-entry <details class="tech"> blocks: they carry internal
  // engineering notes (ADO work-item numbers) and nested <li> items that are
  // neither customer-facing nor part of the change list.
  block = block.replace(/<details\b[\s\S]*?<\/details>/g, '');
  const status = decode(pick(block, /class="status">([\s\S]*?)<\/span>/));
  const meta = decode(pick(block, /class="meta">([\s\S]*?)<\/span>/));
  const summary = decode(pick(block, /class="summary">([\s\S]*?)<\/div>/));
  const groups = [];
  const groupRe = /<h3>([\s\S]*?)<\/h3>\s*<ul class="changes">([\s\S]*?)<\/ul>/g;
  let g;
  while ((g = groupRe.exec(block)) !== null) {
    const name = decode(g[1]);
    const entries = [];
    const liRe = /<li>([\s\S]*?)<\/li>/g;
    let li;
    while ((li = liRe.exec(g[2])) !== null) entries.push(parseEntry(li[1]));
    if (entries.length) groups.push({name, entries});
  }
  return {status, meta, summary, groups};
}

function renderEntry(e) {
  const builds = e.build ? ` _(${e.build})_` : '';
  const head = `- **${e.tag} — ${e.title}**${builds}`;
  return e.desc ? `${head}  \n  ${e.desc}` : head;
}

function renderGroups(groups) {
  return groups
    .map(
      (grp) =>
        `### ${grp.name}\n\n${grp.entries.map(renderEntry).join('\n')}\n`,
    )
    .join('\n');
}

// --- main ------------------------------------------------------------------

async function main() {
  if (!existsSync(SOURCE)) {
    throw new Error(
      `Release-notes source not found: ${SOURCE}\n` +
        `Set RELEASE_NOTES_HTML to its path.`,
    );
  }
  let html = await readFile(SOURCE, 'utf8');

  // Confidentiality guard: drop the trailing "Internal notes" section.
  const cut = html.search(/<h2>\s*Internal notes\s*<\/h2>/i);
  if (cut !== -1) html = html.slice(0, cut);

  // Index every published release section by its data-version.
  const sections = {};
  const secRe =
    /<section\b[^>]*data-version="([^"]+)"[^>]*>([\s\S]*?)(?=<section\b[^>]*data-version=|$)/g;
  let s;
  while ((s = secRe.exec(html)) !== null) {
    sections[s[1]] = parseSection(s[2]);
  }

  let written = 0;
  for (const target of TARGETS) {
    const present = target.versions.filter((v) => sections[v]);
    if (!present.length) {
      console.warn(
        `[gen-changelog] no source section for ${target.label} (looked for ${target.versions.join(', ')}) — skipped`,
      );
      continue;
    }

    let body = `# What changed in this version\n\n${target.intro}\n`;
    if (present.length === 1) {
      const sec = sections[present[0]];
      if (sec.summary) body += `\n${sec.summary}\n`;
      body += `\n${renderGroups(sec.groups)}`;
    } else {
      // Multi-version: one subsection per build, newest first.
      for (const v of present) {
        const sec = sections[v];
        const head = [sec.status, sec.meta].filter(Boolean).join(' · ');
        body += `\n## ${v}${head ? ` — ${head}` : ''}\n`;
        if (sec.summary) body += `\n${sec.summary}\n`;
        body += `\n${renderGroups(sec.groups)}`;
      }
    }

    for (const rel of target.files) {
      const file = path.join(root, rel);
      let frontmatter = DEFAULT_FRONTMATTER;
      if (existsSync(file)) {
        const cur = await readFile(file, 'utf8');
        const fm = cur.match(/^---\n[\s\S]*?\n---/);
        if (fm) frontmatter = fm[0];
      }
      await writeFile(file, `${frontmatter}\n\n${body.trimEnd()}\n`, 'utf8');
      written++;
    }
    console.log(
      `[gen-changelog] ${target.label}: ${present.length} release(s) → ${target.files.length} page(s)`,
    );
  }
  console.log(`[gen-changelog] done — ${written} changelog page(s) written.`);
}

main().catch((err) => {
  console.error('[gen-changelog] FAILED:', err.message);
  process.exit(1);
});
