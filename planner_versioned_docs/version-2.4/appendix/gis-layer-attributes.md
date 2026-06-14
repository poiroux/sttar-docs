---
sidebar_position: 4
title: GIS Layer Attributes
---

# Setics Sttar GIS Layer Attributes

Attribute definitions for the GIS layers exported by Setics Sttar. Identifiers
follow the conventions: nodes `N001` / `N001.01`, pathways `P000001`, access
structures / junctions `J000001`, cables `C000001`, closures `B000001`,
endpoints `E000001`, ducts `D000001`, splitters `SP000001`.

:::note
The future schema-driven reference page (`<DataModelTable>`) will render these
tables from a versioned JSON artifact emitted by the build, so the reference
always matches the shipped code. The tables below are the documented baseline.
:::

## Infrastructure layers

### `Net_Pathways`

The network's layout. `Net_Pathways_Feeder` and `Net_Pathways_Distribution`
share **the same schema** (feeder vs distribution sections exported separately).

| Attribute | Description |
|---|---|
| `GEOMETRY` | Pathway geometry (Polyline). |
| `NETID` | Network id — the `ELEMENTID` of the level-1 node (e.g. `N001`). |
| `ELEMENTID` | Pathway id (e.g. `P000001`). |
| `RANK` | Order in the optimization sequence (rank #5 = elements to connect the rank-#5 endpoints, possibly reusing the network up to rank #4). |
| `LEVEL` | Most upstream network level of the pathway (`1` POP … `9` last node level, `10` node-to-endpoint). |
| `LEVELS` | List of levels using the pathway (semicolon-separated, e.g. `2 ; 3 ; 4`). |
| `SEGMENT` | `T` Transport/feeder, `D` Distribution, `E` Distribution extension, `B` Branching (drop), `S` Security. |
| `SUPPORT` | Infrastructure layer supporting the pathway. |
| `NAME` | Pathway name (usually imported). |
| `EXTKEY` | External key for table joins. |
| `LOCATIONS` | Locations served (1 location ≈ 1 building). |
| `TOBUILD` | `T` (True) or `F` (False). |
| `INFRACLASS` | `AE` Aerial, `UG` Underground, `FA` Facade, `NA` Any. |
| `P2PFIB` / `P2MPFIB` | Fibers dedicated to P2P / P2MP usage. |

### `Infra_PotentialPathways`

| Attribute | Description |
|---|---|
| `GEOMETRY` | Pathway geometry (Polyline). |
| `SUPPORT` | Supporting infrastructure layer. |
| `TOBUILD` | `T` / `F`. |
| `INFRACLASS` | `AE` / `UG` / `FA` / `NA`. |
| `ELEMENTID` | Potential pathway id (Integer). |
| `NAME` | Pathway name. |
| `EXTKEY` | External key. |
| `LENGTH` | Length (m). |
| `COST` | Estimated reuse/construction cost (excludes installed equipment). |
| `SOURCEID` / `TARGETID` | Source / target id from `Infra_PotentialPathwayStructures`. |

### `Net_PathwayAccessStructures`

Punctual infrastructures actually used by the network. Same `NETID` / `ELEMENTID`
(e.g. `J000001`) / `RANK` / `LEVEL` / `LEVELS` / `SEGMENT` / `SUPPORT` / `TOBUILD`
/ `INFRACLASS` / `NAME` / `EXTKEY` conventions as above, plus:

| Attribute | Description |
|---|---|
| `GEOMETRY` | Point. |
| `NODES` | Network nodes located at this access structure. |
| `LOCATIONS` | Network endpoints located at this access structure. |

### `Infra_PotentialPathwayStructures`

| Attribute | Description |
|---|---|
| `GEOMETRY` | Point. |
| `SUPPORT` | Supporting infrastructure layer. |
| `TOBUILD` | `T` / `F`. |
| `INFRACLASS` | `AE` / `UG` / `FA` / `NA`. |
| `ELEMENTID` | Potential structure id (Integer). |
| `NAME` / `EXTKEY` | Name / external key. |
| `COST` | Estimated reuse/construction cost (excludes hosted equipment). |

## Architecture layers

### `Net_Nodes`

| Attribute | Description |
|---|---|
| `GEOMETRY` | Point. |
| `NETID` | Network id (e.g. `N001`). |
| `ELEMENTID` | Node id (`N001` L1 POP, `N001.01` L2 FCP, `N001.01.02` L3…). |
| `RANK` | Order in the optimization sequence. |
| `LEVEL` | Node level (`1` POP … `9` last node level, `10` premises). |
| `CONNSTATUS` | See the connection-status values below. |
| `CONNSUPPRT` | Reusable infrastructure layer the node connects to (first upstream pathway support, or first downstream for top-level nodes). |
| `SUPPORT` | Node layer name. |
| `NAME` / `EXTKEY` | Node name / external key. |
| `INFRAID` | Infrastructure where the node is located (`ELEMENTID` from `Net_PathwayAccessStructures`). |
| `INFRACONID` | Pathway access structure the node connects to. |
| `ROUTINGID` | Routing junction id for the node. |

**`CONNSTATUS` values** (nodes): `0` out of reach of any reusable infrastructure;
`1` connected but not served (no route to a superior-level node); `2` connected
but not served (no route to the constraint node); `8` served from a non-level-1
node (end-to-end interrupted); `9` served from a level-1 node (end-to-end).

### `Net_Endpoints`

Same conventions as `Net_Nodes` (`GEOMETRY` Point, `NETID`, `ELEMENTID` e.g.
`E000001`, `RANK`, `CONNSTATUS`, `CONNSUPPRT`, `SUPPORT`, `NAME`, `EXTKEY`,
`INFRAID`, `INFRACONID`, `ROUTINGID`), plus `PREMISES{N}` (premises at the
endpoint, per application).

**`CONNSTATUS` values** (endpoints): as for nodes, plus `4` too far from the
level-1 node (route too long) and `6` requested node at maximum capacity.

### `Net_Lines`

| Attribute | Description |
|---|---|
| `GEOMETRY` | Node-to-node / node-to-endpoint line following the infrastructure (Polyline). |
| `NETID` | Access-network id (e.g. `N001`). |
| `ELEMENTID` | Target (downstream) node/endpoint of this partial subscriber line. |
| `RANK` / `LEVEL` | Rank / level of the node or endpoint. |
| `NAME` / `EXTKEY` | Name / external key. |
| `LOCATIONS` | Served endpoints (locations). |
| `PREMISES` | Served terminations (premises). |
| `INFRALEN` | Infrastructure length of this partial line. |
| `PRIID` | Access-network (primary node) id. |
| `SUPID` | Parent (superior) node id. |

### `Net_ServiceAreas` / `Net_ServiceAreasVoronoi`

Polygons representing the area served by each `Net_Nodes` node. **Convex hulls**
(`Net_ServiceAreas`) are simple single-part polygons without holes (may overlap);
**Voronoi** (`Net_ServiceAreasVoronoi`) are non-overlapping but may be
multi-polygons or have holes. Shared attributes: `NETID`, `ELEMENTID`, `RANK`,
`LEVEL`, `CONNSTATUS`, `SUPPORT`, `NAME`, `EXTKEY`, plus:

| Attribute | Description |
|---|---|
| `LOCATIONS` | Locations served by the node. |
| `PREMISES` | Premises served (sum over served locations). |
| `EQUIPMENT` | Equipment attached to the node (e.g. `1xFCP300`). |
| `COST` | Cost of using/setting the node (includes cabinet costs). |

## Conduit system layers

### `Net_Ducts`

| Attribute | Description |
|---|---|
| `GEOMETRY` | Complete duct (Polyline). |
| `NETID` | Access-network id (e.g. `N001`). |
| `ELEMENTID` | Duct id (e.g. `D123456`). **Not** the unique key — `SECTIONID` is. |
| `RANK` | Sequence number of the first endpoint connected through this duct. |
| `LEVEL` / `LEVELS` | Most upstream level / list of levels using the duct. |
| `MODELNUM` | Duct model number. |
| `DUCTS` / `ALLOCDUCTS` / `SPDUCTS` | Total / allocated / spare duct count. |
| `LENGTH` | Infrastructure length of the duct section. |
| `COST` | Partial cost of the duct section. |
| `PRIID` / `SUPID` | Access-network (primary) / parent (superior) node id. |
| `INFRAAID` / `INFRABID` | Access structures at ends A / B of the section. |

### `Net_DuctSections`

As `Net_Ducts`, plus `SECTIONID` (e.g. `D123456.1`), `SEQNUM` (section sequence
in the duct), `SUPPORT` (underlying infrastructure support), `CABLES` (cables in
the duct), and `INFRAID` (underlying pathway, `ELEMENTID` from `Net_Pathways`).

## Cable system layers

### `Net_Cables`

| Attribute | Description |
|---|---|
| `GEOMETRY` | Complete cable (Polyline). |
| `NETID` | Network id (e.g. `N001`). |
| `ELEMENTID` | Cable id (e.g. `C000001`). |
| `RANK` | Order in the optimization sequence. |
| `LEVEL` | Cable level in the architecture. |
| `MODELNUM` | Model reference. |
| `FIBERS` | Total fiber capacity. |
| `TUBESIZE` | Fibers per tube. |
| `ALLOCFIB` / `SPAREFIB` / `SPRFNEED` | Allocated / spare / required-spare fibers. |
| `LENGTH` | Cable length (includes excess and maintenance lengths). |
| `COST` | Cable cost (excludes splice closures). |
| `INFRALEN` | Infrastructure length used (excludes excess/maintenance). |
| `ENDAID` / `ENDBID` | Infrastructure at the upstream / downstream end (Node, Pathway or Endpoint). |
| `NODEAID` / `NODEBID` | Node at the upstream / downstream end (blank if none). |

### `Net_Cable_ClosureSections`

As `Net_Cables`, plus `SECTIONID` (e.g. `C123456.1`), `SEQNUM` (section *n* is
between closure *n* and *n+1*), and `ENDPTBID` (endpoint at the downstream end,
blank if none).

### `Net_Cable_PathwaySections`

The cable cut to match its underlying pathway. Adds `CSSEQNUM` (closure-section
sequence containing this pathway section), `SEQNUM` (position in the sequence of
infrastructures used), `CONNSUPPRT` (pathway support this section connects to),
`SLACKLOOP` (`Y`/`N`), `CLOSUREID` (closure on the section, e.g. `B000001`), and
`DEVICEID` (device — closure, patch panel or outlet — on the section).

### `Net_CableDevices` / `Net_SpliceClosures`

Punctual layers of cable devices / splice closures (the same attribute schema):

| Attribute | Description |
|---|---|
| `GEOMETRY` | Point. |
| `NETID` / `ELEMENTID` | Network id / device id (e.g. `B000001`). |
| `RANK` / `LEVEL` | Sequence order / level. |
| `DEVICETYPE` | `SpliceClosure`, `Cabinet`, `PatchPanel` or `Outlet`. |
| `CONNSUPPRT` / `SUPPORT` | Pathway support / reusable infrastructure layer. |
| `MODELNUM` | Model reference. |
| `USETYPE` | Cable-branching type (Full branch, midspan joints…). |
| `CABLESUS` / `CABLESDS` | Connected cables upstream / downstream. |
| `SPLICES` | Splices in the equipment. |
| `COST` | Estimated cost of the closure and all splices. |
| `PRIID` / `SUPID` | Primary / superior node id. |
| `CNTAINERID` / `CNTNRTYPE` | Container id (cabinet for patch panels) and type. |

## Fiber connectivity layers

### `Net_Splitters`

| Attribute | Description |
|---|---|
| `GEOMETRY` | Node where the splitter is located (Point). |
| `NETID` / `ELEMENTID` | Network id / splitter id (e.g. `SP000001`). |
| `RANK` / `LEVEL` | Sequence order / level. |
| `CONNSUPPRT` / `SUPPORT` | Infrastructure support / reusable layer. |
| `MODELNUM` | Model reference. |
| `SPLICES` | Splices in the equipment. |
| `SPLT` | Split ratio — integer *n* for a 1:*n* split. |
| `COST` | Estimated cost. |
| `SUPSPLT` | Parent splitter (blank if none upstream). |
| `HOSTDEVICE` | Device containing the splitter (`Cabinet` or `SpliceClosure`). |
| `PRIID` / `SUPID` / `NODEID` | Primary / superior / hosting node id. |
