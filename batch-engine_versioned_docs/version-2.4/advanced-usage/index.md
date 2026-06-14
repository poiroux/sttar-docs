---
sidebar_position: 1
title: Advanced Usage
---

# Advanced Usage

Best practices for running the Batch Engine reliably and at scale.

## Best practices

- **Accept the EULA up front.** Add `--accepteula` to every unattended command
  so a run never blocks or fails on the licence terms.
- **Always wait for the result.** Wrap the call in `START /WAIT` (or your shell's
  equivalent) so the script can read the [return code](../cli/return-codes).
- **Keep a per-run log.** Pass `--logfile` so each run has its own log to
  diagnose failures after the fact.
- **Pin the licence on shared machines.** When several licences are visible, use
  `--licenseid` (and `--activatelicense` if needed) so the engine does not pick
  the wrong one.
- **Be explicit about outputs.** Use `--exportgroup` / `--reports` to produce
  exactly the files you need — large export sets cost time and disk.
- **Use a clean output folder per run.** Files in `--outputdir` are overwritten;
  give each project (or each run) its own folder to avoid mixing results.

## Examples

- **[Simple run](./simple-run)** — compute one project.
- **[Batch script](./batch-script)** — loop over many projects.
- **[Using a licence key](./license-key)** — select and activate a licence
  non-interactively.
