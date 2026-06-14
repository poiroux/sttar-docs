---
sidebar_position: 8
title: What changed
---

# What changed in this version

This page is **per-version**: switch releases with the navbar version picker
and this page shows the changes for the selected release.

## STTAR 2.5 (Advanced Designer)

### New and improved

- **New application branding** — updated Setics "S" application icon, a
  refreshed About window, and a new 2026 icon set for the toolbar and menus.
- **Animated startup splash screen** — the splash is now rendered with WebView2
  (Chromium) and loads fully offline.
- **License Manager utility** — a standalone tool to manage your CodeMeter
  license containers (including drag-and-drop of CodeMeter files), launched from
  **Help ▸ License Manager**. It requires the **.NET Desktop Runtime 8.0**
  (see *Installation*).
- **Vetro FiberMap integration** — a new optional plugin that exports the
  network design to the Vetro FiberMap platform via its REST API (see
  *Export Network Data*).
- **Germany Region Kit** — a new **BFP-GIS-NB v5.0.1** GeoJSON export, alongside
  the existing v4.0 report.
- **New connectivity attributes** — `ConnectingAccessStructure` can be imported
  to map the access structure a connecting edge terminates on, and the
  connecting structure's name is now written to the `Net_Endpoints` and
  `Net_Nodes` GIS exports (`INFCONNAME`).
- **Endpoint categories** — a new `EndpointCategory` attribute can be imported,
  is carried through the model, and is output in the `Net_Lines` export; the
  equipment database gains a *Manhole* category.
- **Node placement by served endpoints** — node placement can now cluster by the
  number of served endpoints, in addition to the existing geometric clustering.
- **Service area buffer option** — the service-area polygon buffer size is now
  configurable in **Tools ▸ Options ▸ GIS & Topology** (previously a fixed
  default).
- **New preprocessing filter** — *Split Linestrings by Lines* splits a linestring
  layer at its intersections with a second linestring layer (Support Source
  Picker).
- **Cancellable cabling** — the cabling step now stops promptly when you cancel a
  running optimization.
- **Coordinate system selector** rebuilt for more reliable entry of EPSG codes,
  free text and the WGS84 shortcut (Project tab).
- **Obstacle properties from the map** — right-click an obstacle support to open
  its properties, as for pathways, nodes and endpoints (Map tab).
- **Support resolution** — the upper limit on the resolution value has been
  removed; any value greater than `0` is accepted (Support Source Picker).
- **Clearer version-mismatch warning** — opening a project distinguishes
  "created by an earlier version" from "created by a later version".
- **Consolidated import validation** — source-import validation issues are shown
  in a single dialog, and the invalid-settings warning now points to the
  *Validation Notes* tab.
- **Attribute mapping improvements** — constant values are validated on entry,
  the column layout is clearer, and all labels are localized (EN/FR/DE).

### Fixes

- OSM data is preserved when reopening an `.sdconfig` project, and OSM point
  download is compatible with GDAL 3.8.4.
- GIS engine upgraded to **GDAL/OGR 3.8.4**; `.dxf` feature export fixed.
- Priority routing no longer resets node capacity between passes.
- Obstacle supports no longer discard loop edges.
- *Planner* edition: the **Add Obstacle Support** command is no longer wrongly
  hidden.
- Switching the basemap provider while the basemap is hidden no longer leaves
  the map inconsistent.
- The English label for the Euro currency is corrected (was "Croatian Kuna").
- Several preprocessing filters now pre-sort their input geometrically for
  deterministic output.
- Performance: faster map selection on large layers, faster service-area
  loading, and general algorithm speed-ups.

### Requirements

- Now requires **.NET Framework 4.8** (raised from 4.6.2 / 4.7.2) and the
  **Visual C++ 2022** redistributable. See *Installation ▸ Hardware & Software
  Requirements*.

## STTAR 2.4 (Advanced Designer)

- Added `ParentId` to the `Support` data model (tree topology).
- DetourRouter `MaxDistanceToRoute` is now scope-aware.
- Naming-rule edits are committed before a run or tab switch.

### Previously, in 2.3

- Initial documented baseline for the Advanced Designer manual.
- New `Support` data-model reference page.
- Optimizer progress reporting reworked.
