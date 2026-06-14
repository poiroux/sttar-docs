---
sidebar_position: 9
title: Network Optimization Tab
---

# Network Optimization Tab

The Network Optimization tab specifies the network-optimization and
route-searching (routing) rules.

:::note
Editing these settings requires **Advanced Designer**. With **Planner** they can
only be viewed.
:::

## Main window

The tab has three parts: **Add Route Finder Options**, **Route Finder Options**,
and **Endpoint Sequencing Options**.

## Add Route Finder Options

Adds level-specific settings to configure the route finder more precisely.

## Route Finder Options

The route-finder algorithm has three operating modes, independently configurable
for each network level:

- by priority,
- by cost-effectiveness using actual costs,
- by cost-effectiveness using virtual costs (weights).

### Search by priority

The algorithm relies on the priority given to each eligible reusable-pathway
support — the highest priority is `1`, lower priorities use higher values. The
route finder works only among eligible supports, minimizing infrastructure cost.

| Setting | Description |
|---|---|
| **Support** | Reusable pathway support. |
| **Priority** | Priority level (`1` = highest). |

:::caution
Listing only a few supports is allowed; supports without settings are ineligible
and no route uses their infrastructures. The stated priority is strictly obeyed:
any node/endpoint connectable by priority-1 supports is connected through them,
even if a shorter or cheaper route exists through lower-priority or ineligible
supports.
:::

### Search by cost-effectiveness using actual costs

The default mode — the algorithm uses the project's reusable-pathway **Cost**
attribute and optimizes the overall cost. All reusable pathways in the project
are eligible.

### Search by cost-effectiveness using virtual costs (weights)

Virtual costs (weights) replace the actual infrastructure costs for routing only.

| Setting | Description |
|---|---|
| **Support** | Reusable pathway support. |
| **Fixed cost** | Virtual fixed cost (weight) applied to each eligible section (project currency). |
| **Variable cost** | Virtual variable cost (weight) applied to the length of each eligible section (project currency). |

:::caution
Virtual costs are valid only for route finding; other features (especially
reports) keep using the actual infrastructure costs.
:::

### Additional options

The route finder minimizes the overall infrastructure cost by pooling
infrastructures across routes. Sharing can be inappropriate between levels or
neighboring service areas — control it with:

| Setting | Description |
|---|---|
| **Reuse upstream infrastructures** | Reuse upstream paths leading to the main node (e.g. an FCP's downstream distribution can reuse the CO–FCP feeder section). |
| **Reuse all pathways from upstream network levels** | Reuse all upstream routes to the main node and all drops to neighboring nodes (e.g. an FCP's distribution can rely on CO feeder infrastructure, including those to other FCPs). |
| **Share and reuse pathways between service areas** | Share routes between neighboring service areas (e.g. two FCPs share a common distribution artery). |

:::info
For a **costing** project or a Setics Sttar V1 project, enabling these options
generally lowers overall network cost. For a **detailed engineering** project,
disable them — heavy sharing tends to produce entangled service areas and long
lines at the expense of the most direct (and cheaper) routes.
:::

Fine-tuning options:

| Setting | Description |
|---|---|
| **Reduce Cost to Reuse Infrastructure** | Percentage of extra cost implied by reusing a pathway; higher values make the algorithm minimize shared pathways. |
| **Cost per Meter to Reuse Infrastructure** | Extra cost per meter implied by reusing a pathway; higher values minimize shared pathways. |
| **Advanced Search** | Links sites logically by minimizing shared pathways — useful when both sides of a sidewalk are to be used. |

## Endpoint Sequencing Options

Five weighted criteria set the connection preferences. They only marginally
change the layout and do not change the maximum coverage rate, but let you modify
the phasing of construction by defining a deployment-priority order.

| Setting | Description |
|---|---|
| **Distance (infrastructure)** | Extend first to the endpoints nearest by infrastructure distance. |
| **Distance (line of sight)** | Extend first to the endpoints nearest in line of sight. |
| **Cost of line implementation** | Extend first to the cheapest endpoints to connect (infrastructure to reuse/build). |
| **Cost of line implementation, per premises** | Extend first to the cheapest endpoints per termination served. |
| **Number of network terminations** | Extend first to endpoints with the most terminations (e.g. shared dwellings). |

:::tip
Leaving the default settings in place is generally recommended.
:::
