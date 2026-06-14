// Single-sources the Planner manual from the Advanced Designer manual.
//
// Planner and Advanced Designer are the *same application* (Planner is a
// restricted STPL profile), so their manuals share every chapter. Rather than
// hand-maintaining two copies, the Planner *current* docs are generated:
//
//   docs-advanced-designer/   (source of truth — authored)
//   + docs-planner-overrides/ (the few Planner-specific pages: intro, changelog)
//   = docs-planner/           (generated; git-ignored)
//
// This runs automatically before `start`, `build` and `deploy` (npm pre-hooks),
// and can be run on demand with `npm run sync:shared`.
//
// Note on versioning: only the *current* (Next) Planner docs are generated.
// The frozen version snapshots in planner_versioned_docs/ stay committed and
// untouched — regenerate, then cut a new version when releasing.

import {cp, rm, mkdir, readdir} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'docs-advanced-designer');
const overrides = path.join(root, 'docs-planner-overrides');
const dest = path.join(root, 'docs-planner');

async function main() {
  if (!existsSync(source)) {
    throw new Error(`Source manual not found: ${source}`);
  }

  // Regenerate from scratch so deletions in the source propagate.
  await rm(dest, {recursive: true, force: true});
  await mkdir(dest, {recursive: true});

  // 1. Copy the shared Advanced Designer body verbatim.
  await cp(source, dest, {recursive: true});

  // 2. Overlay the Planner-specific pages (they win over the AD copies).
  //    Skip this folder's own README (it documents the overrides, it is not a
  //    manual page).
  if (existsSync(overrides)) {
    await cp(overrides, dest, {
      recursive: true,
      filter: (src) => path.basename(src) !== 'README.md',
    });
  }

  const files = await readdir(dest, {recursive: true});
  const overrideCount = existsSync(overrides)
    ? (await readdir(overrides)).length
    : 0;
  console.log(
    `[sync-shared-manuals] Generated docs-planner/ ` +
      `(${files.length} entries from docs-advanced-designer, ` +
      `${overrideCount} Planner override(s)).`,
  );
}

main().catch((err) => {
  console.error('[sync-shared-manuals] FAILED:', err.message);
  process.exit(1);
});
