---
sidebar_position: 1
title: Introduction
---

# Setics STTAR Batch Engine

**Batch Engine** (license code `STBE`) runs Setics Sttar network optimization
**without a graphical interface**, from the command line. You give it a project
file and an output folder; it computes the network and writes the reports and
GIS layers — ideal for unattended runs, scripted pipelines and batch processing
of many projects.

It uses the **same engine, data model and output files** as Advanced Designer;
only the way you start and drive a run differs.

## What you can do with Batch Engine

- **Compute a project from the command line** — point the engine at a
  `.sdconfig` project file and an output directory.
- **Choose the outputs** — select an export group and add individual reports.
- **Automate** — call it from a script or scheduler, run many projects in
  sequence, and check the **return code** to drive the next step.
- **Manage licensing non-interactively** — accept the EULA, select and activate
  a license key, and query license servers from the command line.

## How this manual is organized

1. **[Installation](./installation/)** — requirements and licensing (shared with
   Advanced Designer).
2. **[Command-Line Interface](./cli/)** — usage, syntax, parameters and return
   codes.
3. **[Output Files](./export/)** — the reports and GIS layers the engine writes
   (shared with Advanced Designer).
4. **[Advanced Usage](./advanced-usage/)** — best practices and worked examples
   (simple run, batch script, license-key usage).
5. **[Appendices](./appendix/)** — data model, cost model, GIS layer attributes,
   glossary and support (shared with Advanced Designer).

## The STTAR product family

| Product | License | Role |
|---|---|---|
| **Advanced Designer** | `STAD` | Full interactive desktop design & optimization. |
| **Planner** | `STPL` | A restricted operator profile of the same app. |
| **Batch Engine** | `STBE` | Command-line / batch processing for automated runs. |

> Your license unlocks the manual for the product you own. Use the **version
> picker** in the navbar to switch between documented STTAR releases — each
> version has its own **What changed** page.
