---
sidebar_position: 2
title: Getting started
---

# Getting started

This walkthrough takes you from a fresh install to your first network design.

## 1. Install and license

1. **Download** the installer for your STTAR version from the
   **[Downloads](/downloads)** page and run it.
2. **Set up your license.** STTAR uses the **CodeMeter** licensing system.
   Make sure the CodeMeter Runtime is installed and your license container is
   present (locally, or reachable on your CodeMeter license server).
3. **Launch** STTAR. On start-up it validates your license and opens with the
   capabilities your license type entitles (`STAD` for Advanced Designer).

:::tip
If STTAR reports a license error on launch, confirm the CodeMeter Runtime is
installed and the license container is visible in the CodeMeter Control Center.
:::

## 2. Create a project

From the start screen choose **New project** (or **Open project** for an
existing one). A project gathers everything for one design area: its settings,
input data, network model and results.

When you create a project you set its **general settings**:

- the **applications** it targets (the network type you are designing),
- the **region / area** and its **coordinate reference system (CRS)**,
- the **units** and **currency** used throughout the project,
- the **equipment database** the project draws its components from.

## 3. Load your input data

Bring in the geographic input for the area — **pathways**, **nodes**,
**endpoints** (the premises to serve) and **terminations**. Add a background
map so you can see your data in context, then use the map and attribute table
to review and correct it.

## 4. Design the network

With input data in place you can:

- model the **physical infrastructure** (ducts, access structures),
- build the **architecture** (nodes, endpoints, service areas, splitter
  hierarchy),
- run the **automatic design** — routing, dimensioning and cabling — guided by
  your **design rules**.

## 5. Validate, report and export

Run the **validation** engine and resolve anything it flags against your design
instructions. When the design is clean, generate **engineering** and
**business reports** and, if you need to exchange data with other tools, use
the **interoperability exports** (GIS/shapefile, FME).

---

Next: continue with the chapters in the sidebar, in order — they follow this
same flow in detail.
