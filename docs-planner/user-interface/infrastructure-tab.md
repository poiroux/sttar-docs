---
sidebar_position: 5
title: Infrastructure Tab
---

# Infrastructure Tab

The Infrastructure tab lets you configure the use of the input GIS layers,
model the infrastructures to reuse or create, and define the interconnections
between infrastructures.

## Data related to infrastructures

To let the software find the optimized network route, you must offer the
different reusable pathways the network can use. They can be:

- available telecom ducts,
- aerial poles on which an additional cable can be run,
- or, if no reusable pathway is available, new civil engineering to be built
  along the road.

Infrastructures are **polyline** data — multi-polyline objects must be converted
to polylines beforehand. The better the quality of the input data, the more
accurate the resulting network: the geometric layout of the line tables must be
precise and clean, ideally with the end node of a line superimposed on the start
node of the following section.

The software can, however, tolerate some imperfection and rebuild a proper
layout despite gaps or inaccurate end-point superposition. Adjusting the
**resolution** and interconnecting an infrastructure with itself lets you reform
poor-quality infrastructure tables:

- An artery shorter than the chosen resolution is **not** taken into account.
- Discontinuities between two arteries smaller than the resolution value are
  **ignored** — the two arteries are then seen as continuous.

A well-adapted resolution length rebuilds a good-quality (if imperfect) layout
from disjointed sections.

## Main window

The Infrastructure tab has two parts: the list of infrastructure supports, and a
section to add an infrastructure support.

| Command | Description |
|---|---|
| **Add Pathway Support** | Creates a new infrastructure support. |
| **Reload all Sources** | Reloads the imported data of all infrastructure layers. |

For each infrastructure:

| Command | Description |
|---|---|
| **Import Datasource…** | Imports a GIS layer of reusable pathways (see *Import infrastructure data* below). |
| **Open Properties…** | Opens the infrastructure-properties window (see *Infrastructure properties* below). |

### Pop-up menu

Right-click an infrastructure in the tab to show its pop-up menu:

| Command | Description |
|---|---|
| **Import Datasource…** | Imports a GIS layer of reusable pathways. |
| **Reload Datasources** | Reloads the imported GIS infrastructure layer. |
| **Delete Elements** | Deletes the elements of the selected infrastructure. |
| **Delete Support** | Deletes the GIS layer of the selected infrastructure. |
| **Open Properties** | Opens the infrastructure-properties window. |

## Import infrastructure data

Go to the Infrastructure tab, click **Add Pathway Support**, then **Import
Datasource…** in the new infrastructure window.

| Setting | Description |
|---|---|
| **Name** | Name given to the selected GIS layer. |
| **File** | Location of the GIS layer (supported formats below). |
| **Spatial reference system** | System used to interpret the layer's geometry. The detected system is shown and can be changed by picking a value or entering a new one. |
| **Resolution (m)** | Accuracy (in meters) of the source's GIS coordinates. A section shorter than the resolution is ignored; a discontinuity shorter than the resolution is treated as non-existent. |
| **Data Attributes** | Optional fields exported in the result layers: **Name** (names the object, used for service-area compliance), **External identifier** (unique external key linking source to produced data), **Length**, **Cost**, and **Served area** (implements service-area compliance — the field must contain the *Name* of an upstream node; node/endpoint supports only). ⚠️ If no node matches the name, an error is raised and the design may fail. |
| **Preprocessing** | Processing applied before importing into the data model — see the *Filters & preprocessing* appendix. |

### Supported data-source formats

| Format | Description |
|---|---|
| `.DGN` | Microstation DGN — SRS not auto-detected, specify manually. |
| `.DXF` | AutoCAD DXF — SRS not auto-detected, specify manually. |
| `.GDB.ZIP` | Zipped Esri Geodatabase. |
| `.GEOJSON` / `.JSON` | GeoJSON. |
| `.GML` | GML. |
| `.KML` / `.KMZ` | KML / KMZ. |
| `.MIF` / `.TAB` | MapInfo MIF / TAB. |
| `.OSM` / `.PBF` | OpenStreetMap (text / binary). |
| `.SHP` | Esri Shapefile — attribute encoding auto-detected, adjustable. |
| `.SQLITE` | Spatialite. |

:::info
FME (Safe Software) can extend the supported formats. Setics is a Safe Software
Associate Partner — contact us for more information about FME.
:::

## Infrastructure properties

Clicking **Open Properties…** opens a configuration window with four tabs:
**Data**, **Costs**, **Equipment** and **Topology**.

### Data

| Setting | Description |
|---|---|
| **Support Name** | Name of the selected GIS layer. |
| **Infrastructure Class** | Tags the infrastructures as Aerial (AE), Underground (UG), Facade (FA) or Any (NA); appears in the GIS layers (see the *GIS Layer Attributes* appendix). |
| **To Build** | Tags the infrastructures as already existing or to be built; appears in the GIS layers. |
| **Fuse Edges After Network Design** | Fuses edges after the network design. |
| **Clear** | Clears the infrastructures created by Setics Sttar. |
| **Reload** | Reloads the imported GIS layer. |
| **Settings — Linear Infrastructure** | Reopens the *Import infrastructure data* window to modify the input layer. |
| **Delete** | Deletes the imported GIS layer. |
| **Add Source** | Opens the *Import infrastructure data* window to add a new data layer. |
| **Settings — Punctual Infrastructure** | Punctual infrastructures are created automatically from the polyline ends; the network passes through them and they can contain splice closures. Opens a box with two options — *Allow equipment at punctual infrastructures* and *Allow connections to other infrastructure supports*; click **OK** to confirm. |

### Costs

| Setting | Description |
|---|---|
| **Fixed Cost** | Fixed reuse cost applied to each infrastructure section used by the network (€). |
| **Variable Cost** | Linear reuse cost (€/m). |

:::caution
For the routing and other algorithms to work properly, avoid using zero costs.
:::

### Equipment

Lists the ducts eligible to be installed on this infrastructure. Click **Choose
equipment…** to modify the list (available ducts are set in the Equipment
Database). If no equipment is selected, no ducts are installed for this
infrastructure.

### Topology

Specifies how Setics Sttar interprets and models the support entities.

| Setting | Description |
|---|---|
| **Allow section geometries to be modified** | Controls what happens when discontinuities are ignored per the Resolution setting. When set, geometry is modified to extend the line and connect; when unset, geometries are not connected but the algorithms still treat them as connected. |
| **Name** | Name of the interconnection between nodes and infrastructures (default "Support 1 ↔ Support 2"). Ticking the left box adds the interconnection to the calculations. |
| **Connects to** | Type of connected infrastructure. |
| **Cable Affinity** | Interconnection behavior: *Indifferent*, *Standalone*, or a project infrastructure type. Lets an interconnection/distribution infrastructure behave like any of the infrastructures it connects. Choose *Standalone* to set specific algorithm settings, then select the support in the Cable System tab. |
| **Duct Affinity** | As Cable Affinity, applied to ducts. |
