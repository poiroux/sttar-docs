# Planner overrides

The Planner manual is **single-sourced** from the Advanced Designer manual
(`docs-advanced-designer/`) — same application, restricted `STPL` profile.

Only the pages in **this folder** are Planner-specific. Everything else is
copied from Advanced Designer at build time by
[`scripts/sync-shared-manuals.mjs`](../scripts/sync-shared-manuals.mjs), which
generates `docs-planner/` (git-ignored).

To add a Planner-specific page or override a shared one, drop a file here with
the **same relative path** it should have under `docs-planner/`; the overlay
wins over the Advanced Designer copy.

Run `npm run sync:shared` to regenerate manually; `start`/`build`/`deploy` run
it automatically.
