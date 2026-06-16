---
sidebar_position: 6
title: Architecture Tab
---

# Architecture Tab

The Architecture tab lets you configure the use of the input GIS layers that
model the passive architectures (nodes and endpoints) to reuse or create, define
the interconnections between nodes and infrastructures, and set the equipment and
costs involved.

## Data related to network nodes and endpoints

The network is organized around **nodes** of different levels. For a typical
FTTH serving network the central office (CO) is the highest-level main node
(**Level 1**), followed by fiber concentration points (FCP) or fiber
distribution hubs (FDH) (**Level 2**), then optical drop points or fiber
distribution terminals (FDT, **Level 3**). **Endpoints** are the lowest level
and are always **Level 10** — so up to nine node levels can be defined.

- Nodes are **punctual** objects; nodes of different levels must live in
  **separate** GIS layers (e.g. one layer for COs, another for FCPs).
- The network serves the maximum number of endpoints (houses, apartments,
  businesses, public sites). Endpoints are punctual objects; each must carry the
  number of **terminations** to connect.

See the *Data Model* appendix for the full model.

## Main window

The Architecture tab has two parts: the list of architectural supports, and a
section to add a node or endpoint support.

| Command | Description |
|---|---|
| **Add Node Support** | Adds a node layer. |
| **Add Endpoint Support** | Adds an endpoint layer. |
| **Reload all Sources** | Reloads the imported data of all architecture layers. |

For each element:

| Command | Description |
|---|---|
| **Import Datasource…** | Adds a node / endpoint GIS layer (see *Import passive architecture data* below). |
| **Open Properties…** | Opens the node / endpoint property window (see *Node properties* / *Endpoint properties*). |

### Node context menu

| Command | Description |
|---|---|
| **Arrange** | Brings a node/endpoint support forward or backward. |
| **Mark as Feeder Network** | Marks the node as part of the feeder network. |
| **Import Datasource…** | Adds a node GIS layer. |
| **Reload Datasources** | Reloads the selected GIS layer. |
| **Delete Elements** | Clears the nodes of this layer. |
| **Delete Support** | Deletes the selected architecture GIS layer. |
| **Open Properties…** | Opens the node property window. |

### Endpoint context menu

Same commands as the node context menu (without *Mark as Feeder Network*),
acting on the endpoint support.

## Import passive architecture data

### Import nodes

Go to the Architecture tab, click **Add Node Support**, then **Import
Datasource…** (or **Open Properties… ▸ Add source…**).

| Setting | Description |
|---|---|
| **Name** | Name of the selected GIS layer. |
| **File** | Location of the GIS layer (same formats as reusable pathways). |
| **Spatial Reference System** | System used to interpret the geometry; detected value shown, can be changed. |
| **Resolution** | Accuracy (m). Two points closer than the resolution are treated as the same point and their additive characteristics (e.g. number of terminations) are summed. `0` disables this. |
| **Data Attributes** | Optional fields imported and re-exported: **Name**, **External identifier**, **Parent node** (service-area compliance — must contain the *Name* of an upstream node). For the active Application, also **Usable Fibers**, **Spare Fibers** (impose the fiber need for dimensioning) and **Max Link Budget**, **Max Split Ratio** (restrict the link budget / split ratio of optical routes reaching the node). ⚠️ If no node matches the parent name, an error is raised and the design may fail. |

### Import endpoints

Go to the Architecture tab, click **Add Endpoint Support**, then **Import
Datasource…** (or **Open Properties… ▸ Add source…**).

Same fields as nodes, plus the **Terminations** field for the active Application
(number of terminations to serve at the endpoint).

## Node properties

The node property window has six tabs: **Data**, **Cost**, **Equipment**,
**Placement**, **Dimensioning** and **Topology**.

### Data

| Setting | Description |
|---|---|
| **Support Name** | Name of the selected GIS layer. |
| **Network Level** | Architecture level (see the *Data Model* appendix). |
| **Clear** | Clears the architectures created by Setics Sttar. |
| **Reload** | Reloads the imported GIS layer. |
| **Settings** | Opens the *Import nodes* window. |
| **Delete** | Deletes the imported GIS layer. |
| **Add Source** | Opens the *Import nodes* window to add a data layer. |

### Cost

| Setting | Description |
|---|---|
| **Fixed Cost** | Fixed cost of reusing each node's hosting infrastructure (€). Used for the financial summary, the cost-based network design, and the output data. |

### Equipment

Selects the equipment (cabinets, racks) able to host this layer's nodes via
**Choose equipment…** (available equipment is set in the Equipment Database). If
none is selected, the node is placed in the equipment set in the Cable System
tab.

### Placement

Instead of importing nodes you can have the software place them automatically.
Add a node support, open its properties, complete **Data / Costs / Equipment /
Topology**, then fill in the **Placement** tab.

| Setting | Description |
|---|---|
| **Algorithm** | *Before routing* — places nodes before the route is defined: the network graph is built, nodes placed on it (favoring the most relevant infrastructures), then the route is computed around them; nodes are always centered in their service area. Limitation: placement before routing can overlap service areas or land on non-optimal infrastructure. *After routing* — routing between existing nodes and endpoints is defined first, then the algorithm follows it from the endpoints to build areas per the placement parameters; created nodes can be centered or upstream of their service area. |
| **Size parameters** | Minimum, maximum and "Target" number of terminations per node. If the maximum is unset, the minimum is taken as Target. The maximum is always respected; the minimum can be violated if it conflicts with the distance parameter. |
| **Max distance by infrastructure** | Maximum distance (m) between the node and the endpoints it serves. |

:::caution[Import **or** auto-place — not both]
Either import nodes (and leave the Placement tab empty) **or** have the software
place them automatically (by filling the Placement tab). If you import nodes
**and** complete Placement, Setics Sttar uses only the imported data and does
not place nodes automatically.
:::

When exception rules are set, the rule applied at each point is that of the
current infrastructure relative to the downstream path. The number of sections
of an infrastructure carrying an exception stays at or below that exception's
max, even if the total path has more sections; and if the infrastructure with
the lower allowed value is the most upstream, the node is placed per that value
regardless of the downstream value. The same holds for distance and capacity
settings.

### Dimensioning

After routing is fixed and extra nodes are added, the dimensioning algorithm
walks the network from the endpoints to the highest-level node to compute the
fiber need and splitter need at each point; the cabling algorithm then uses these
to size cables and closures. Dimensioning rules can be specified per
**Application** (up to three, configured in the Project tab ▸ Engineering
Properties).

| Setting | Description |
|---|---|
| **Calculate the upstream used fiber need based on** | Variable driving the upstream used-fiber calculation: *Downstream used fibers*, *Downstream used and spare fibers*, *Served terminations (aggregated)*, or *Served terminations (endpoint by endpoint)*. |
| **Dimensioning the splitters** | Enabled when splitters are selected. The dimensioning function determines the splitter slot count at the node output; upstream fiber need is what the splitter uses to fill the downstream slot demand. Function = percentage of input, or range mapping. |
| **Dimensioning the upstream used fibers** | The function targets the upstream fiber need. Without a splitter the input value is used; with splitters the input value defines the upstream slot count and the function applies to the created splitters. Function = percentage or range mapping. |
| **Reuse of the downstream spare fibers** | *Reuse the fibers* carries the downstream spare count upstream (summed with the computed value); *Ignore the fibers* drops it. |
| **Add the number of spare fibers based on** | Variable for the upstream spare-fiber count: *Downstream used fibers*, *Downstream used and spare fibers*, *Served terminations (aggregated)*, *Served terminations (endpoint by endpoint)*, or *Upstream used fibers*. |

### Topology

Manages the interconnections between architectures and infrastructures.

| Setting | Description |
|---|---|
| **Name** | Name of the interconnection; tick the left box to add it to the calculations. |
| **Connects to** | Type of infrastructure the node connects to. |
| **Cable Affinity** | Applies the chosen infrastructure's settings to the interconnection. If selected, the support is configurable in the **Cable System** tab. |
| **Duct Affinity** | As Cable Affinity, configurable in the **Duct & Microduct System** tab. |
| **Fixed Cost per Conn. (€)** | Fixed cost of the infrastructure–architecture connection. |
| **Linear Cost (€/m)** | Linear cable cost per infrastructure. |
| **Max. Conn. Distance (m)** | Maximum connection distance between architecture and infrastructure. |

## Endpoint properties

The endpoint property window has four tabs: **Data**, **Costs**, **Dimensioning**
and **Topology**.

### Data

| Setting | Description |
|---|---|
| **Support Name** | Name of the selected GIS layer. |
| **Clear** | Clears the architectures created by Setics Sttar. |
| **Reload** | Reloads the imported GIS layer. |
| **Settings** | Reopens the *Import endpoints* window for the existing source. |
| **Delete** | Deletes the imported GIS layer. |
| **Add Source** | Opens the *Import endpoints* window to add a data layer. |

### Costs

| Setting | Description |
|---|---|
| **Fixed cost** | Fixed cost of reusing each endpoint's hosting infrastructure (€). |
| **Variable cost** | Reuse cost per termination (€/termination). |

### Dimensioning

As for nodes, dimensioning is configurable per Application.

| Setting | Description |
|---|---|
| **Calculate the spare fiber need based on the terminations** | Input for the upstream spare-fiber calculation: *Served terminations* (function applied directly to the termination count) or *Upstream used fibers*. |
| **Dimensioning function of the upstream spare fibers** | Estimates the upstream spare-fiber need from the chosen input: percentage or range mapping. |
| **Minimum number of spare fibers** | Floor applied if the computed value is lower. |
| **Upstream link budget** | In decibels; accounts for the distance from the Level 1 node and splitter attenuation. |
| **Average linear attenuation of fibers** | Average attenuation due to the endpoint distance. |
| **Maximum splitting ratio** | Highest split ratio allowed for this endpoint; can be expressed as a function of distance from the Level 1 node. |

### Topology

| Setting | Description |
|---|---|
| **Name** | Name of the interconnection; tick the left box to add it to the calculations. |
| **Connects to** | Type of infrastructure endpoints can connect to. |
| **Affinity** | Applies the chosen infrastructure's settings to the interconnection. If selected, the support is configurable in the **Cabling** tab. |
| **Fixed Cost per Conn. (€)** | Fixed cost of the infrastructure–endpoint connection. |
| **Linear cost (€/m)** | Linear cable cost from infrastructure to endpoint. |
| **Max. Conn. Distance (m)** | Maximum connection distance between endpoint and infrastructure. |

:::caution
For the routing and other algorithms to work properly, avoid using zero costs.
:::
