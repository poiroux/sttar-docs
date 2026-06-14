---
sidebar_position: 3
title: Cost Model
---

# Setics Sttar Cost Model

## Basic costs

The cost model distinguishes the **infrastructure** part (pathways, nodes,
endpoints) from the **cabling** part (cables, splice closures). Each of these
five object types can carry a fully customizable cost. Their sum reconstructs the
total network infrastructure cost by geographical (service areas) and functional
(network levels) area.

These costs appear in:

- the `C_COST` attributes of the shapefile layers `Net_Pathways.shp`,
  `Net_Nodes.shp`, `ResOpt_Sites.shp`, `Net_Cables.shp`,
  `Net_SpliceClosures.shp`;
- the Excel summary report (especially the **Summary** and **Quantities** tabs).

## Costs used for optimization

Setics Sttar designs the network in two stages:

1. **Search routes** (infrastructures) — optimization based on the costs of the
   infrastructure elements (mainly pathways).
2. **Design the cabling system** (creating nodes and cabling) — optimization
   based on the costs of equipment (and splices).

## Costs per termination, at the nodes level

In `Net_Nodes`, each node carries:

- **`COST`** — the node's basic cost (including equipment);
- **`C_NODE`** — a full cost representing the upstream part (from level 1 to and
  including the node) assigned to the node;
- **`C_SUBNET`** and **`C_TERMINATION`** — the total cost for the downstream zone
  served by the node (node excluded) and that cost related to the number of
  served terminations.

Beyond the sum of the basic infrastructure and equipment costs, the total network
cost can also be expressed as:

- the sum over each first-level node of the `COST` and `C_SUBNET` attributes, or
- the sum over each served endpoint of the full cost per endpoint in the
  `C_ENDPOINT` attribute of `Net_Endpoints`.
