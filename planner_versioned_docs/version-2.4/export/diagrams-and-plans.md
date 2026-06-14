---
sidebar_position: 4
title: Diagrams & Plans
---

# Diagrams & Plans

## Cabling diagram

A schematic of the service cabling tree — the network cables and the equipment
they pass through (cabinets and boxes).

### Options

| Setting | Description |
|---|---|
| **Template Path** | Setics Sttar uses its internal template by default; you can supply a personalized template path here (see *Generate template* below). |
| **Root Node** | Most upstream node of the tree (Levels 1–3 only). |
| **Last Level** | Last downstream level shown in the diagram. |

### Default diagram

**Cables** — the cable sections between two splice closures (the
`Net_Cables_ClosureSections.xxx` export), drawn as a black line between two
pieces of equipment. The upper part shows the cable identifier; the lower part
shows the cable template path, the available fibers in the section, and the
section length.

**Splice closures** — drawn as boxes containing:

| Field | Description |
|---|---|
| `{ElementID}` | Splice-closure id. |
| `{Name}` | Closure name, if any. |
| `{NetworkLevel}` | Closure level in the network. |
| `{Description}` | Joint type (Joint, Midspan joint, or Straight joint). |
| `[CablesIn]` | Cable entering the closure, matching the out cable. |
| `[FibersIn]` | Incoming fibers matching the out cable. |
| `[Type]` | Connection type between in and out fibers. |
| `[FibersOut]` | Fibers in the output cable. |
| `[CablesOut]` | Closure output cable. |

Brace `{…}` elements are replaced by their value; bracket `[…]` elements are
listed on the lines below with an output-cable line. The attributes are defined
in the *Cable System Layers* appendix.

### Generate template

You can build your own template and import it in the export section. Template
sections are delimited by **Named Areas** in the Excel file:

| Named Area | Description |
|---|---|
| `Cable` | Main cable part and its variables. |
| `Device` | Model for the splice closures. |
| `UpstreamCabinet` | Model for the upstream cabinets. |
| `DownstreamCabinet` | Model for the downstream cabinets. |
| `HorizontalConnection` | Cable design on horizontal connections. |
| `CornerConnection` | Cable design on corners. |
| `VerticalConnection` | Cable design on vertical connections. |

**Device and cabinet variables** include `CableDistanceToPrimaryNode`,
`ContainerElementId`, `ContainerModelName`/`Number`, `CoordX`/`CoordY`,
`DeviceElementId`, `DeviceModelName`/`Number`, `DeviceNetworkLevel`,
`DeviceType`, `DeviceUseType`, `EndpointElementId`/`Name`/`SupportName`,
`InfraDistanceToPrimaryNode`, `LatWgs84`/`LonWgs84`, `NodeElementId`/`Name`/`SupportName`,
`PathwayAccessStructureId`/`Name`, `PathwaySupportName`, `RoutingJunctionId`,
and `SplittersList`.

**Cable variables** include `CableActualSpareFiberCount`, `CableElementId`,
`CableFiberCount`, `CableLength`, `CableModelName`/`Number`, `CableNetworkLevel`,
`CableSectionLength`, `CableSpareFiberNeed`, `CableUsedFiberNeed`, and the
first/last duct & tube identifiers (`FirstDuctElementId`, `FirstTubeNumber`,
`LastDuctModelNumber`, …).

**General variables** (e.g. for the cover page): `Application.DisplayName`,
`Application.Version`, `Project.Filename`, `Project.Name`,
`Project.SpatialReference`, `System.DateTime.Today`.

:::caution
All variables must be written with braces, e.g. `{Project.Name}`. List variables
on devices/cabinets use brackets (`[CablesIn]`, `[CablesOut]`, `[FibersIn]`,
`[FibersOut]`, `[Type]`) and must sit on the line below all other variables of
the Area.
:::

## Duct diagram

A schematic of the service duct tree — the network ducts and the equipment they
pass through. It has the same structure as the cabling diagram (options, default
diagram, generate-template).

## Splicing plans

Exporting a splicing plan also generates a lightpath export.

### Options

| Setting | Description |
|---|---|
| **Template Path** | Use the internal template or a personalized one. |
| **Try to respect the modules** | Avoid mixing fiber tubes in cables — larger cables (more unused fibers) but simpler splicing/maintenance. |
| **Print drop in lightpaths** | Show optical lines down to the drop cables; otherwise stop at the most downstream node. |

:::info
A lightpath report requires a cabinet at the top node level (from the equipment
database). Without it, the lightpath report is empty.
:::

**Creating your own SpliceDiagram template** — predefined templates ship in the
install's `Documents\User Resources\Report Templates` folder. Copy, rename and
modify one. Make sure all 24 colors are named `ColorIndex` in the name box (select
the 24 cells and set the name box to `ColorIndex`). Font color and border style
can also be defined and are shown in the splice diagrams.

### Cabinet plans

**Header** — A1: node element id; A3: cabinet model number; columns B/C: patch
panel model and number; AD3: terminations served; AD4: connectors; AD5: coiled
cables.

**Cables** (from column AF) — AF: cable element id; AG: cable model number; AH:
composition (tubes × tube size); AI: total length; AJ+: nodes/closures the cable
passes through (hyperlinked).

**Splicing plan** (columns A–AD from line 7) — B: patch-panel model; C:
patch-panel index; D: tray index; E–AB: top line = fiber index in the tube
connected to each tray port (one port per column), bottom line = element id of
the most downstream node/closure that fiber serves; AC: cable tubes connected to
the tray; AD: cable element id connected to the tray.

### Splice closure plans

**Header** — A1: node element id (or the closure's own id for in-line closures);
A2: infrastructure support; A4: connection type (Midspan joint / Joint / Straight
joint); D1: closure id (and its node if any); G1: closure model number; D2–G2:
distance to and id of the upstream node (hyperlinked); D4: trays; G4: splices;
D5: served premises; G5: coiled tubes.

**Cables** (from column I) — I: cable element id; J: model number; K: composition
(tubes × tube size); L: total length; M+: nodes/closures the cable passes through
(hyperlinked).

**Splicing plan** (columns A–G from line 7):

| Column | Description |
|---|---|
| A | Upstream cable element id. |
| B | Upstream cable tube index. |
| C | Upstream fiber index in the tube. |
| D | Connection type and tray name (`KXX`): `PASSTHROUGH` (same fiber up/down), `SPLICE` (spliced), `STOCK` (fiber ending in this closure), or a splitter id (upstream fiber to splitter, downstream fiber to one of its ports). |
| E | Downstream fiber index in the tube. |
| F | Downstream cable tube index. |
| G | Downstream cable element id. |

### Optical routes

Each continuous line a signal can follow. The first four columns give global
information:

| Column | Description |
|---|---|
| Optical Budget | Optical budget of the line. |
| Terminal | Final element served. |
| Length | Total line length. |
| Patch Panel | Starting point of the line. |

Then a set of columns repeats per cable section between two closures/cabinets: `F`
(fiber index in tube), `T` (tube index in the cable section), Cable Section,
Splice Closure, Length, and Usage (connection type at the closure). If *print
drops* is checked, the last section is the drop cable and the **Splice Closure**
column instead holds the element id of the endpoint served.

## Link budget report

An extract of all elements affecting the link budget on the optical line. Each
line is one optical line (one endpoint) at a specific wavelength, representing the
worst-case link budget. It accounts for cable length, number of splices, splitter
loss, extra loss in nodes/endpoints, and a per-level margin. Two sheets:

### Parameters sheet

Set the loss/attenuation values used for the total-loss calculation, separately
per main wavelength (1310, 1490, 1550 nm).

| Attribute | Description |
|---|---|
| Fiber Attenuation | Average linear loss in the fibers. |
| Splice Loss | Average loss per splice. |
| Margin | Margin for ageing, repair, etc. |
| Node Loss | Typical loss in node facilities (splices, connectors, pigtails, patch cables; excluding splitters). |
| Endpoint Loss | Typical in-building loss to the CPE. |

### Table sheet

The total attenuation for each endpoint/wavelength, broken down per level using
the parameter-sheet values (editable in-place to test scenarios).

| Attribute | Description |
|---|---|
| `NETID` | Network id (e.g. `N001`). |
| `ELEMENTID` | Endpoint id (e.g. `E000001`). |
| `EXTKEY` | Endpoint external id (foreign key). |
| `PREMISES` | Premises at the endpoint. |
| `WAVELENGTH` | Wavelength of the calculation. |
| `TOTALLOSS` | Total loss for the wavelength. |
| `MARGINLOSS` | Margin loss for the wavelength. |
| `LEVXXLOSS` | Combined loss for level `XX`. |
| `NODEXXLOSS` | Node loss set for level `XX`. |
| `NODEIDXX` | Id of the level-`XX` node serving the endpoint. |
| `LEVXXLEN` | Cable length on level `XX`. |
| `AVGCBATTXX` | Average cable attenuation on level `XX` (dB/m). |
| `LVLXXSPLT` / `ATTLXXSPLT` | Number / total attenuation of splitters on level `XX`. |
| `LVLXXSPC` / `AVGSPCATXX` | Number / average attenuation of splices on level `XX`. |
| `OUTLETLOSS` | Endpoint loss from the parameters sheet. |
