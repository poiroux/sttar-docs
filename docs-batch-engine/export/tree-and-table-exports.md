---
sidebar_position: 3
title: Tree & Table Exports
---

# Tree & Table Exports

## Project configuration file

A project saves in two formats: `.sdproj` (contains all data independently —
fully autonomous) and `.sdconfig` (contains links to the data sources — manual
data changes are not saved, and the file is unusable without the source data).

The **Project configuration file** export writes the project as `.sdconfig`
(equivalent to *Save as* in that format). Saving the config file is recommended,
especially to compare different settings for the same project. A `.sdconfig` from
another project can also be imported to copy settings between projects without
touching the data.

## Infrastructure tree

`InfrastructureTree.xml` groups all infrastructure elements (pathway sections and
junctions, network nodes, network endpoints) and their hierarchical relations as
an XML tree. Per element:

| Attribute | Description |
|---|---|
| `id` | Unique identifier of the network element. |
| `name` | Element name. |
| `support` | Support the element belongs to. |
| `vertex` | Underlying vertex (physical point) — nodes, endpoints and junctions only. |
| `edge` | Underlying edge (physical pathway) — sections only. |
| `asid` | Corresponding pathway access structure — nodes, endpoints and junctions only. |
| `pwid` | Pathway identifier — sections only. |
| `extid` | External key of the element. |
| `level` | Network level of the element. |
| `length` | Section length — sections only. |
| `terminations` | Number of terminations — endpoints only. |

> The legacy `InfrastructureTreeV1.xml` can also be exported (older, less data,
> no longer supported — kept for compatibility).

## Infrastructure table reports

If the routing-tables option is checked, two CSV table views are exported —
usually easier than the XML for automated post-processing.

### `Routing_Lines.csv`

An endpoint-by-endpoint listing of every network element needed to reach each
endpoint from its Level 1 node. A pathway element serving several endpoints
appears once per endpoint.

| Column | Description |
|---|---|
| `NETID` | Network id (Level 1 node). |
| `TARGETID` | Endpoint at the end of this line. |
| `TGTDEPTH` | Depth of that endpoint. |
| `TGTPREM` | Premises at that endpoint. |
| `ELEMENTID` | Network element id. |
| `NAME` | Element name. |
| `INFRAID` | Infrastructure id (edge for sections, vertex otherwise). |
| `EXTKEY` | External key. |
| `DEPTH` | Depth in the infrastructure tree. |
| `LEVEL` | Element level. |
| `SUPPORT` | Support the element is on. |
| `TYPE` | `RoutingJunction`, `RoutingSection`, `Node`, or `Endpoint`. |
| `LENGTH` | Section length (RoutingSections). |

### `Routing_Table.csv`

A flat representation of the infrastructure tree — each element appears once with
a reference to its parent. Useful to rebuild the tree without reading the XML.

| Column | Description |
|---|---|
| `NETID` | Network id (Level 1 node). |
| `ELEMENTID` | Network element id. |
| `PARENTID` | Parent element in the tree. |
| `NAME` | Element name. |
| `INFRAID` | Infrastructure id (edge for sections, vertex otherwise). |
| `EXTKEY` | External key. |
| `DEPTH` | Depth in the tree. |
| `LEVEL` | Element level. |
| `SUPPORT` | Support the element is on. |
| `LENGTH` | Section length (RoutingSections). |
| `TYPE` | `RoutingJunction`, `RoutingSection`, `Node`, or `Endpoint`. |

## Network transmission tree

`TransmissionTree.xml` groups all cabling elements (cables and splice closures)
of the network transmission tree as a hierarchical XML tree. Per element:

| Attribute | Description |
|---|---|
| `PTId` | Passive transmission id (cabling element id). |
| `level` | Network level of the element. |
| `vertexId` | Vertex the element is on (punctual element). |
| `edgeId` | Edge the element is on (linear element). |
| `modelNumber` | Cable or splice-closure model. |
| `splices` | Splices in closure / closure capacity (splice closures). |
| `fibers` | Available and total fibers (cable section). |
| `cableLength` | Length of the cable the section belongs to. |
| `sectionLength` | Length of the cable section. |
| `ANId` | Access Network id — infrastructure-tree element the section is on. |

## Fiber connectivity report

A detailed `.csv` listing of all fiber connections. Each line is one connection
at the fiber level — one location between two transmission elements.

| Attribute | Description |
|---|---|
| `CONNECTION_ID` | Connection id. |
| `CONNECTION_TYPE` | Connection type. |
| `DEVICE_A_ID` / `DEVICE_B_ID` | Device A / B id. |
| `DEVICE_A_PORT` / `DEVICE_B_PORT` | Device A / B port. |
| `FIBER_A_TUBE` / `FIBER_B_TUBE` | Tube index of the fibers (if the device is a cable). |
| `DEVICE_A_LEVEL` / `DEVICE_B_LEVEL` | Network level of device A / B. |
| `JUNCTION_ID` | Junction id. |
| `CONTAINER_DEVICE_ID` | Container device id. |
| `PORT_LOC` | Port location. |
| `FIBERLINE_ORIGIN_ID` / `FIBERLINE_DESTINATION_ID` | Origin / destination of the fiberline. |
| `FIBERLINE_TOPNODE_CONNECTED` | `True` or `False` — fiberline connected to the top node. |
