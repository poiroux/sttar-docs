---
sidebar_position: 7
title: Cable System Tab
---

# Cable System Tab

The Cable System window sets the cable-sizing rules level by level and support
by support.

:::note
Editing the cable system requires **Advanced Designer**. With **Planner** the
settings can only be viewed.
:::

## Main window

The tab has six parts:

- add a cabling type based on the level and type of infrastructure/architecture,
- a filter to show only the cables of interest,
- splicing properties,
- cable length reserves and slack loops,
- available cables,
- available equipment.

| Command | Description |
|---|---|
| **Add Specific Parameters** | Adds a specific cabling-settings block for a level, infrastructure/architecture type, or a combination. |
| **Filter** | Filters the created cabling settings by level, infrastructure, or displayed settings. |
| **Splicing properties** | Defines the types of joints to create. |
| **Cable length reserves** | Specifies cable length reserves at splice-closure ends and slack-loop lengths in the hosting infrastructure (rooms, poles…). |
| **Available cables** | Adds available cables for the level and/or infrastructures, from the Equipment Database. |
| **Available equipment** | Adds available equipment for the level and/or infrastructures, from the Equipment Database. |

:::info Level definition
Level *N* includes the *N*-level nodes themselves plus the infrastructure
sections connecting the upstream node (level *N−1* or lower, if it exists) to its
downstream level-*N* nodes.
:::

## Commands and filters

- **Add Specific Parameters** — pick the level and infrastructure from the
  drop-downs. Choose only the level and leave the infrastructure as *All
  infrastructure supports* to apply the setting to a level across all
  infrastructures. Levels and infrastructures come from the Architecture and
  Infrastructure tabs. Click **OK** to confirm.
- **Levels Filter** — view only the selected level(s).
- **Infrastructure Filter** — display only the selected infrastructure(s).
- **Setting Filter** — filters the displayed settings of the Cable System tab.

## Splicing properties

Jointing options are defined per level and/or support (reusable pathway).

| Setting | Description |
|---|---|
| **Cost per splice** | Average cost of a splice. |
| **Straight joints** | Authorizes straight joints to connect cables of the same level. |
| **Maximum length of cables** | The straight joint is placed so the cable is at most this length (m) — in practice the cable-drum length. Created cables may be slightly longer when the last infrastructure section traversed prevents an exact length. |
| **Branch joints** | Authorizes splitting a main cable into multiple branch cables. |
| **Midspan joints** | Authorizes abutting a derived cable on only part of the passing cable's fibers — the passing fibers are not cut, the joint fibers are cut and welded to another cable (by whole tubes). |
| **Splicing** | How to splice: *None*, *Used Fiber Need*, *Used and Spare Fiber Need*, or *All Fibers*. |

## Cable properties

Defines cable length reserves and slack loops.

| Setting | Description |
|---|---|
| **Line Excess Cable Length … every … m** | Length of cable regularly added in reserve along the network (m), with a minimum spacing interval between two slack loops. |
| **Adjust proportionally to the length of the infrastructure** | Lets the software size the reserve proportionally to the network length. When off, the slack loop has exactly the length set in the surplus-reserve setting. |
| **Around Closure Excess Cable Length** | Length of cable added on both sides of each splice closure or cabinet/rack (m), giving the flexibility to handle the cable during work. |
| **Maximum per level per section** | Caps the reserve per level per section. |

## Available cables

Click **+** to open the cable-selection window and pick the cables eligible at
this network level. Available cables must be set in the Equipment Database.

## Available equipment

Click **+** to open the splice-closure-selection window and pick the closures
eligible at this network level. Available closures must be set in the Equipment
Database.
