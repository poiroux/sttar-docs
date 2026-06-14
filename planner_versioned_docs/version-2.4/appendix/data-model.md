---
sidebar_position: 2
title: Data Model
---

# Setics Sttar Data Model

## Infrastructure and network architecture model

The access network model is **hierarchical**: several stages of pathways and
nodes (a configurable number of levels) plus a stage of pathways and endpoints at
the base of the distribution network. For example, a network with four node
levels has its first three labelled as the feeder network.

## Conduit system model

The conduit system is a hierarchical model of two elements:

- **`Net_Ducts`** — the physical ducts represented as a polyline.
- **`Net_DuctSections`** — a linear infrastructure: the same ducts cut into
  smaller sections matching the linear infrastructure, with a punctual
  infrastructure at the start and end of every section.

Cables and ducts are matched via the `TUBSECID` attribute stored in
`Net_Cables_PathwaySections`.

## Cable system model

A hierarchical model of four elements:

- **`Net_SpliceClosure`** — a punctual infrastructure where a box is placed and
  cables are joined. A cable either passes through the closure and continues, or
  ends in the closure where a different cable continues. A slack loop can also be
  placed at a closure.
- **`Net_Cable_ClosureSections`** — a polyline representing the outlet that
  connects the cable from the splice closure to the endpoint.
- **`Net_Cable_PathwaySections`** — a linear infrastructure section: the cables
  cut into smaller sections per the infrastructure. A slack loop can be placed at
  the start or end of a pathway section; its location is computed from the length
  of the succession of pathway sections and the user's cabling parameters.
- **`Net_Cables`** — the physical cables represented as a polyline, beginning and
  ending on a device (architecture element or box).

### Cable branching techniques

Branching techniques are persistent design instructions describing what to do
with the cabling; they are applied to future designs and respected by the
algorithm unless they become obsolete. Change them on the map by selecting the
splice-closure layer and choosing **Change Branching Technique**. Three main
types:

- **Fork (no splice closure)** — two cables start from the cabinet and go in
  different directions; no closures at the intersections.
- **Join** — typically used when a cable's maximum length is reached. A 24F cable
  from the cabinet ends in the closure; two 6F cables continue in different
  directions.
- **Midspan join** — used when only part of the cable changes direction. A 24F
  cable is cut in the closure: one part joins a 6F cable in a different direction,
  the rest continues untouched.

Two special cases (only available under specific conditions on nodes, e.g. when
several parallel cables arrive at the node):

- **Forking Node** — a cable starts from the node while the others remain
  unchanged.
- **Forking Midspan Node** — a midspan is done on the node while the other cables
  are forked.

### Net_Cable pathway sections model

- **Cable device section** — a point section representing the connection with a
  device (splice closure, patch panel…).
- **Cable storage section** — a point section representing a slack loop.
- **Cable run section** — a line section representing the path of the cable along
  the infrastructure.

## Fiber connectivity model

The numeric fiber information (total, spare, used) is stored in the cables
layer. Detailed connectivity is in the fiber connectivity report
(`Net_FiberConnections.csv`). Typical configurations:

- **Splice closures** — a closure with two splices connecting one upstream cable
  (`C000001`) to two downstream cables (`C000002`, `C000003`). There is no fiber
  connection record for unspliced fibers. A cable device id is the cable id plus
  a section-sequence suffix (`C000001.1` = 1st section of `C000001`); the device
  port for a fiber is the fiber number.
- **Patch panel and cross-connection** — a cabinet with a patch panel
  terminating an upstream cable and one terminating a downstream cable, cross-
  connected by patch cords. Pigtails and patch cords are modeled as fiber
  connections; the hardware connectors are not (they relate to the connection
  type).
- **Patch panel and splitter** — as above, but a splitter makes the link. A 1:N
  splitter has one input port (`IN`) and N output ports (`OUT{i}`, e.g. `OUT1`…`OUT4`
  for a 1:4 splitter).
