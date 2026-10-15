// One-shot publish of the release notes: regenerate the changelog pages from
// the source HTML and, if anything changed, build, commit the generated files,
// push the current branch and deploy to GitHub Pages.
//
// Meant to be called unattended at the end of a STTAR release, once the
// source HTML has been updated for the new build:
//   npm --prefix C:\Users\mpoiroux\source\repos\sttar-docs run publish:notes
//
// Exit codes: 0 published or nothing to do, 1 a step failed (nothing is
// deployed after a failed step).

import {execSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const run = (cmd) => execSync(cmd, {cwd: root, stdio: 'inherit'});
const out = (cmd) => execSync(cmd, {cwd: root, encoding: 'utf8'}).trim();

// Only the generated outputs are committed; anything else dirty stays untouched.
const GENERATED = ['static/release-notes.html', ':(glob)**/changelog.md']
  .map((g) => `"${g}"`).join(' ');

try {
  run('npm run gen:changelog');
  if (!out(`git status --porcelain -- ${GENERATED}`)) {
    console.log('[publish-notes] release notes unchanged, nothing to publish.');
    process.exit(0);
  }
  run('npm run build');
  run(`git add -- ${GENERATED}`);
  run('git commit -m "docs(changelog): regenerate release notes"');
  run('git push');
  run('npm run deploy');
  console.log('[publish-notes] published.');
} catch (e) {
  console.error(`[publish-notes] failed: ${e.message}`);
  process.exit(1);
}
