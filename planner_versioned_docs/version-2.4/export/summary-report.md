---
sidebar_position: 2
title: Summary Report
---

# Summary Report

## Options

| Variable | Description |
|---|---|
| **`[StartNode]`** | Produces a specific report between the start node and the served premises. |

## Report description

The Excel file `Net_Summary Project XX.xls` has seven tabs:

- **Contents** — project name, tab list, and a revision-tracking table.
- **Overview** — summary of network costs, main quantities and technical
  indicators.
- **Project** — summary of the project settings (support, nodes, cabling).
- **Quantities** — detailed quantities (cables, closures, infrastructures…) and
  network costs.
- **Cumulative Costs** — deployment cost by network coverage rate.
- **Graphs** — total deployment cost and cost per termination by coverage rate.
- **Glossary**.

### Overview

Divided into Network Implementation Costs, Key Quantities, Key Technical
Indicators, and summary graphs.

**Network implementation costs**

| Data | Description |
|---|---|
| **Feeder + Distribution** | Total cost of feeder and distribution networks and cost per termination. |
| **All drops** | Total cost of the drop network and cost per termination. |
| **Nodes — Infrastructure Setup** | Node infrastructure-planning costs (feeder + distribution). |
| **Nodes — Equipment** | Node equipment costs (feeder + distribution). |
| **Endpoints — Infrastructure Setup** | Endpoint infrastructure-planning costs. |
| **Endpoints — Equipment** | Endpoint equipment costs. |
| **Cabling** | Cabling costs (cables + closures) per network segment. |
| **Linear Infrastructure** | Linear infrastructure costs (routes + interconnections) per segment. |
| **Total** | Total costs per network segment. |

**Key quantities** — Level 1 / Level 2 node counts (total, connected, %),
network terminations (total, connected, %), linear infrastructure (m, used, %),
cables (m, and per termination), splice closures (total, per termination), and
splices (total, per termination).

**Key technical indicators** — min/median/max/average of: terminations per Level
1 node, terminations per Level 2 node, terminations per endpoint, distance from a
site to its Level 1 node; plus total fibers in cables and the used/spare fiber
ratio.

**Summary graphs** — cost distribution by segment, and total cost per
termination split into drop vs feeder+distribution.

### Project

Summarizes the settings in three parts.

**Support settings** — per source: the source section ¹, entity count, fixed and
variable costs, and the attributes used (length; for endpoints, terminations and
service area). Covers reusable pathways, nodes, endpoints, and the
interconnections/connections between supports.

> ¹ *DefaultCreated* if the source is created automatically by Setics Sttar, or
> *ManuallyEntered* if created by the user.

**Additional nodes settings** — apply per node support only when node placement
runs (i.e. the support has no entities before optimization):

| Data | Description |
|---|---|
| **Eligible equipment** | Available cabinets and racks in the nodes. |
| **Level** | Node support level. |
| **Min. size** | Minimum downstream nodes/endpoints to trigger a new node. |
| **Max. Dist.** | Maximum infrastructure distance between the created node and downstream nodes/endpoints. |
| **Mand.** | Whether this support's nodes must be created between upstream and downstream elements. |
| **Colloc. Endpoint** | Minimum terminations on an endpoint to allow collocating the node with it. |

**Cabling settings** — architecture (P2P / P2MP distribution, coupling rate,
reserve fiber rate), available cables, and available splice closures per scope.

### Quantities

The network cost summary gives costs per segment and the total. Costs are then
detailed per segment (Feeder, Distribution, Drop) and element type — unit cost
(linear or fixed), quantity (or distance), unit, and total. Items are grouped
(always by level) into: Network Nodes — Infrastructure Setup; Network Endpoints —
Infrastructure Setup (Drop only); Network Nodes — Equipment; Splice Closures;
Cables; and Linear Infrastructures (reuse or creation).

### Cumulative Costs

Informs about deployment cost for a partial deployment. For each coverage rate,
number of endpoints and terminations served, it lists the cost per segment, the
total, and the average per unit. The **% cost min.** column gives the percentage
increase in cost per termination relative to the minimum possible cost.

### Graphs

Plots the Cumulative-Costs data: total cumulative cost, per-segment cost (feeder,
distribution, drop), and average cost per termination by deployed coverage rate.

### Glossary

| Term | Description |
|---|---|
| **Access Network** | From a unique upstream node (POP / central office) to the endpoints; consists of a feeder and a distribution network. Also called the "local loop". |
| **CO** | Central office — usually the topmost node, gathering all lines serving an area. |
| **Connections** (links, nodes, endpoints) | Pathways created by Setics Sttar to connect two infrastructures (e.g. a duct to an aerial support). |
| **Distribution Network** | Downstream part, usually from the fiber concentration point to the endpoints. |
| **Endpoint** | A building, house or physical point connected to an end of the network. |
| **FCP** | Fiber concentration point — usually the top-level node of the distribution network. |
| **FDT** | Fiber distribution terminal — usually the lower-level distribution node; subscribers connect directly to it. |
| **Feeder Network** | Upstream part, usually between the POP and the FCP. |
| **GIS** | Geographical information system. |
| **GPON** | Gigabit passive optical network (ITU G.984). |
| **Network level** | All elements between an upstream node and a logically connected downstream node; level-specific engineering rules can be defined. |
| **Node** | Active or passive point of presence playing a functional role; nodes are hierarchically ordered, defining network levels. |
| **P2MP** | Point-to-multipoint (e.g. GPON). |
| **P2P** | Point-to-point. |
| **Pathway** | An infrastructure segment carrying one or more cables. |
| **Polyline** | A GIS data type — a collection of successive line segments. |
| **POP** | Point of presence. |
