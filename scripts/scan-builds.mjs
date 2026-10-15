// Draft-scaffold helper for the release-notes source HTML.
//
// Finds the builds shipped on a STTAR integration branch that are NEWER than
// what the authored release-notes HTML already documents, and prints a
// ready-to-paste <li> scaffold for each — build number, work-item ref, commit
// hash and the raw commit subject as a prose starting point.
//
// It does NOT write anything. Workflow:
//   1. npm run scan:builds -- --version 2.4.6
//   2. Paste the scaffolds into the matching <section data-version> of
//      "Sttar Release Notes.html", rewrite the titles/descriptions into
//      customer-facing prose, drop internal-only commits.
//   3. npm run gen:changelog  (regenerate the docs pages)
//   4. npm run deploy         (publish)
//
// Build numbers are read from git: the release pipeline commits a
// "Build X.Y.Z.NNNN" marker after the changes it packages, so every commit
// between two markers belongs to the newer marker's build.
//
// Env / args:
//   --version <v>   required, e.g. 2.4.6 or 2.5 (matches build-number prefix)
//   --branch <ref>  git ref to scan (default: derived integration branch)
//   --repo <path>   STTAR working copy (default STTAR_REPO or standard path)
//   --source <html> release-notes HTML (default RELEASE_NOTES_HTML or standard)

import {readFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

const version = arg('version');
if (!version) {
  console.error('Usage: node scripts/scan-builds.mjs --version 2.4.6 [--branch ref] [--repo path] [--source html]');
  process.exit(1);
}

const repo =
  arg('repo', process.env.STTAR_REPO || 'C:\\Users\\mpoiroux\\source\\repos\\Sttar');

const branch =
  arg('branch',
    version.startsWith('2.5')
      ? 'origin/prototypes/STTAR_2.5_Integration'
      : `origin/prototypes/STTAR_${version}_Integration`);

const source =
  arg('source',
    process.env.RELEASE_NOTES_HTML ||
    'C:\\Users\\mpoiroux\\Documents\\Sttar\\Release Notes\\Sttar Release Notes.html');

// Highest build already documented for this version line, from the HTML.
async function documentedMaxBuild() {
  if (!existsSync(source)) {
    console.warn(`[scan-builds] source HTML not found (${source}) — treating all builds as new.`);
    return -1;
  }
  const html = await readFile(source, 'utf8');
  const re = new RegExp(`build-tag">${version.replace(/\./g, '\\.')}\\.(\\d+)`, 'g');
  let m, max = -1;
  while ((m = re.exec(html)) !== null) max = Math.max(max, Number(m[1]));
  return max;
}

// Classify a commit subject into a release-note tag + span class.
function classify(subject) {
  const s = subject.replace(/^Merged PR \d+:\s*/i, '');
  if (/^\[?BugFix\]?/i.test(s)) return {tag: 'Fixed', cls: 'fix'};
  if (/^\[?Feature\]?/i.test(s)) return {tag: 'New', cls: 'feature'};
  if (/^\[?UI\]?/i.test(s)) return {tag: 'Improved', cls: 'improve'};
  return {tag: 'Improved', cls: 'improve'}; // [Tech] and anything else
}

// Pull the work-item ref (#NNNN or AB#NNNN) if present.
function workItem(subject) {
  const m = subject.match(/\bAB?#?(\d{3,6})\b/) || subject.match(/#(\d{3,6})\b/);
  return m ? `#${m[1]}` : '';
}

// Strip the leading [Type]/AB#NNNN/PR noise for a prose starting point.
function proseSeed(subject) {
  return subject
    .replace(/^Merged PR \d+:\s*/i, '')
    .replace(/^\[[^\]]+\]\s*/g, '')
    .replace(/^AB?#?\d+:?\s*/i, '')
    .replace(/\(#?\d+[^)]*\)\s*$/, '')
    .trim();
}

function scaffold(build, commits) {
  const lines = commits.map((c) => {
    const {tag, cls} = classify(c.subject);
    const wi = workItem(c.subject);
    const refs = [wi, c.hash].filter(Boolean).join(', ');
    return `      <li>
        <div class="change-row">
          <span class="tag ${cls}">${tag}</span>
          <div class="change-body">
            <div class="change-title">TODO: ${proseSeed(c.subject)} <span class="build-tag">${build}</span></div>
            <div class="change-desc">TODO customer-facing description.</div>
          </div>
        </div>
        <details class="tech">
          <summary>Technical details</summary>
          <div class="tech-body">
            <p>Tracked under ${refs}.</p>
          </div>
        </details>
      </li>`;
  });
  return `\n<!-- ===== build ${build} — ${commits.length} commit(s), review & curate ===== -->\n${lines.join('\n\n')}`;
}

(async () => {
  const maxDoc = await documentedMaxBuild();
  console.log(`[scan-builds] version ${version}, branch ${branch}, documented up to build ${maxDoc === -1 ? '(none)' : maxDoc}`);

  const log = (args) => {
    try {
      return execFileSync('git', ['-P', 'log', '--format=%h\t%s', ...args], {cwd: repo, encoding: 'utf8'})
        .split('\n').filter(Boolean).map((l) => {
          const t = l.indexOf('\t');
          return {hash: l.slice(0, t), subject: l.slice(t + 1)};
        });
    } catch (e) {
      console.error(`[scan-builds] git log failed on ${branch} in ${repo}: ${e.message}`);
      process.exit(1);
    }
  };

  // Build markers reachable from the branch, ordered by build number (global
  // across version lines), newest first. A build packages exactly the commits
  // reachable from its marker and not from the previous marker (prev..cur),
  // which stays correct across merges (e.g. "merge master into the integration
  // branch") where date order does not. Not first-parent only: some markers
  // reach the integration branch through a merge.
  const buildRe = new RegExp(`^Build (${version.replace(/\./g, '\\.')}\\.(\\d+))$`);
  const buildNum = (r) => Number(r.subject.match(/\.(\d+)\s*$/)?.[1] ?? -1);
  const markers = log(['--max-count=2000', branch])
    .filter((r) => /^Build \d+\.\d+/.test(r.subject))
    .sort((a, b) => buildNum(b) - buildNum(a));
  const builds = []; // {build, num, commits}
  for (let i = 0; i < markers.length - 1; i++) {
    const m = markers[i].subject.match(buildRe);
    if (!m || Number(m[2]) <= maxDoc) continue;
    const commits = log(['--no-merges', `${markers[i + 1].hash}..${markers[i].hash}`])
      .filter((r) => !/^Build \d+\.\d+/.test(r.subject));
    builds.push({build: m[1], num: Number(m[2]), commits});
  }

  const fresh = builds.filter((b) => b.num > maxDoc && b.commits.length);
  if (!fresh.length) {
    console.log(`[scan-builds] no undocumented builds with changes for ${version}.`);
    return;
  }

  fresh.sort((a, b) => b.num - a.num); // newest first
  console.log(`[scan-builds] ${fresh.length} undocumented build(s): ${fresh.map((b) => b.build).join(', ')}\n`);
  for (const b of fresh) console.log(scaffold(b.build, b.commits));
  // --check: exit 2 so a release script can tell "notes are behind" apart.
  if (process.argv.includes('--check')) process.exitCode = 2;
})();
