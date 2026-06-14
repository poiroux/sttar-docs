---
sidebar_position: 13
title: Options
---

# Options

The Options window (**Tools ▸ Options**) groups five categories of options.

## General

| Setting | Description |
|---|---|
| **Use relative paths when saving the project's configuration file** | Choose relative or absolute paths when saving to a `.sdconfig` file. |
| **Allow only one instance for this application** | Ensures a single instance (one window, one workstation license). Re-launching brings the existing window to the front. |
| **Tab alignment** | Aligns tabs at the top or bottom of the window. |
| **Auto create connecting supports when adding new pathway, node or endpoint supports** | Activates all distribution/interconnection supports as soon as a support is created. When off, activate interconnect supports manually in the support's Topology tab. |
| **Automatically select these attributes when a new layer is loaded** | Predefine, per data-model attribute, the field names to auto-associate when loading a source. Separate names with `;` (evaluated in order). Example: `ID; KEY; CLE` for the identifier auto-detects a matching field on load and assigns the first match to the **Identifier** attribute. |

## Default Costs

The default costs proposed when configuring a project.

## International

Sets the software language and currency.

- **Languages:** French, English, German.
- **Currencies:** Euro, British Pound and US Dollar from the drop-down, or any
  three-letter ISO 4217 code entered manually.

:::note
Some dialogs (e.g. the file-open box) are managed by Windows and appear in the
Windows environment language, not the language set for Setics Sttar.
:::

## GIS & Topology

| Setting | Description |
|---|---|
| **Default pathway support resolution** | Minimum reading-grid size (m). Shorter sections are ignored; two dots closer than this are seen as superimposed. |
| **Default nodes support resolution** | Coordinate accuracy. Two points closer than the resolution model the same point and their additive characteristics (e.g. terminations) are summed. `0` disables this. |
| **Default endpoints support resolution** | As above, for endpoints. |
| **Maximum number of connections per feature** | Maximum number of connecting points to neighboring points not already connected by a given infrastructure section layer. |
| **Use Advanced Symbol Editor** | Enables a more complete GIS symbol editor in the Map tabs. Note: some advanced-editor options are not saved with the project and are lost on reopen. |
| **Default basemap** | Default basemap in the Map tabs (also available in the map Legend). |
| **Data Import and Export** | Minimizes the field sizes of `.shp` export layers (per the values present) so output files are more compact. |

## Logs

Configures how the application logs events:

- **Log level** — *Fatal* (launch/termination only), *Error* (+ major errors),
  *Warn* (+ unexpected situations), *Info* (all action progress, including
  warnings and errors).
- **Log file location** and **maximum size**.
- **Archiving** when the log reaches its maximum size, and the maximum number of
  archived files (besides the running log).
