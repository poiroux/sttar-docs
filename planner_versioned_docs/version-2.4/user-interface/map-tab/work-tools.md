---
sidebar_position: 2
title: Work Tools
---

# Work Tools

The work toolbar has the following buttons, from left to right:

![The work toolbar](/img/manuals/modifications.png)

| Icon | Command | Description |
|---|---|---|
| ![](/img/manuals/icon9.png) | **Select tool** | Select one or more map elements to examine or modify their properties, and/or delete them. |
| ![](/img/manuals/icoselectpoly.png) | **Irregular selection tool** | Select one or more elements by drawing an irregular polygon. |
| ![](/img/manuals/icodeselect.png) | **Deselect all** | Deselect all selected elements. |
| ![](/img/manuals/icon12.png) | **Creation tool** | Draw and create elements on the map. |
| ![](/img/manuals/icon13.png) | **Modification tool** | Modify the geometry of the elements on the map. |
| ![](/img/manuals/icointerco.png) | **Connection validation tool** | Choose the pathway to which the endpoint or node will be linked. |
| ![](/img/manuals/icoslice.png) | **Pathway splitting tool** | Split a pathway in two, creating a point infrastructure at the splitting place. |
| ![](/img/manuals/icofuse.png) | **Pathway merge tool** | Merge several pathways into one. |
| ![](/img/manuals/icofusion.png) | **Node fusion tool** | Merge two nodes, leaving only one with the service area of both. |
| ![](/img/manuals/icoparent.png) | **Parent node affiliation tool** | Choose a node to become the parent of one or more elements. |
| ![](/img/manuals/icosuppr.png) | **Deletion tool** | Delete the selected features. |
| ![](/img/manuals/icon14.png) | **Google Street View tool** | Explore a selected location of the map. |
| ![](/img/manuals/icon15.png) | **Distance measuring tool** | Measure a distance between two elements. |

Tools are of two types: **action** tools do something the moment you click the button, while **mode** tools
let you act on the map before validating the action. For a mode tool, validate the action by:

- Double-clicking (the last double-click point is included),
- Pressing the **ENTER** key,
- Or clicking **Finish** in the right-click context menu.

Cancel the action by pressing **ESC**, or clicking **Cancel** in the right-click context menu.

## Selection Tools – Direct Selection of Displayed Elements

The selection tools allow you to select map elements, either by clicking directly on one, by drawing a
selection rectangle, or by drawing an irregular polygon. To finalize the selection with the irregular
selection tool, double-click in the desired place to close the polygon.

By default, the selection tool only selects elements belonging to a layer selected in the layer control
panel (legend). Holding the **ALT** key while selecting lets you select a visible element on the map
regardless of its layer.

> Holding **CTRL** while clicking lets you add individual elements (of the same layer) to your selection.

## Selection Tools – Add/Remove Selection Elements

- To **add** elements to the current selection, hold **CTRL** during the additional selection.
- To **remove** items from the current selection, hold **CTRL + SHIFT**.

These keys can be combined with **ALT** to act on visible elements in any layer:

- **ALT + CTRL** — add one or more elements regardless of the layer.
- **ALT + CTRL + SHIFT** — remove one or more elements regardless of the layer.

## Selection Tools – Add Elements Contained in or Intersecting the Selection Shape

With the **rectangular** selection:

- A diagonal drawn **top to bottom** selects the elements **entirely inside** the rectangle.
- A diagonal drawn **bottom to top** selects the elements that **intersect** the rectangle.

With the **irregular** selection tool, all elements that intersect the polygon are selected.

![Rectangular selection drawn top to bottom — selects elements entirely inside](/img/manuals/fig30.png)

![Rectangular selection drawn bottom to top — selects intersecting elements](/img/manuals/fig31.png)

![Irregular polygon selection — selects all intersecting elements](/img/manuals/selectpolyall_v1.png)

## Selection Tools – Context Menu

![The selection context menu](/img/manuals/selectmenuceng.png)

The context menu lets you select all elements of the active layer in the layer control panel, and open the
attribute table. When one or more items are selected, they can be deleted via the **Delete** action in the
context menu or the **DELETE** key (only for infrastructure sections, nodes, and endpoints). If between 2 and
15 elements are selected, their identifiers are listed and a single element can be selected by clicking its
identifier.

Other actions depend on the support of the selected items:

| Action | Applies to | Effect |
|---|---|---|
| Empty parent name | endpoint & node | Blanks the parent-name field of the selected items. |
| Empty service area | node | Empties the parent-name field of nodes/endpoints that had the selected node as parent. |
| Dedicate the cable | node | Cables passing by this node won't rearrange themselves on it. |
| Change support to | pathway, endpoint & node | Change the support of the selected items (same level only). |
| Undelete | deleted asset connection | Recreates the deleted asset connection. |
| Change Closure Model to | splice closure | Change the closure model. |
| Change Branching Technique | splice closure | Change the branching technique (see *Cable Branching Techniques*). |
| Change Cable Model to | cable | Change the cable model of the selected cable. |
| Change Duct Model to | duct | Change the duct model of the selected duct. |

> Automated design must be run before the context menu actions are available.

## Creation Tool

The creation tool creates infrastructure sections, nodes and endpoints. First, activate an infrastructure
layer in the legend — the creation tool does not work on layer groups or basemaps. Depending on the active
layer, it generates a point, line or polygon:

- **Points** are created immediately.
- **Lines and polygons** are created vertex by vertex; complete the entry by validating the action. Placing a
  vertex on an existing one validates the creation and begins a new one from that vertex. To cancel, hold
  **Ctrl** while clicking the existing vertex.

## Modification Tool

The modification tool moves nodes or endpoints. Click the node or endpoint to modify — it turns into a red
dot — then place it at its new location. Setics Sttar saves the change as soon as you click elsewhere on the
map.

## Connection Validation Tool

The connection validation tool links an endpoint or node to the network at a specific point of the pathway.
Click the node or endpoint to link; it turns into a red dot. Drag it into the existing node. The action is
taken into account once you run the tool again.

## Pathway Splitting Tool

The pathway splitting tool cuts a linear pathway into two parts at a chosen point, creating a new punctual
infrastructure. Select the pathway to split — a red dot appears on the line — and reposition the dot by
clicking another position on the line. The change is saved as soon as you click elsewhere on the map.

## Pathway Merging Tool

The pathway merging tool combines several pathways into one. Select the sections to merge and click the
**Pathway merging** button. Merging does not work on two pathways with no common point element, or on a
common point node that has a third (selected or not) pathway.

## Node Merging Tool

The node merging tool combines two nodes; the surviving node acquires the service area of the deleted one.
Click the **Node merging** button, select the node to delete (it turns red), and drag it into the node that
will acquire its service area. A confirmation window appears.

## Parent Node Affiliation Tool

The parent node affiliation tool chooses a node to become the parent of one or more elements. Click the
**Parent node affiliation** button, select the elements to affiliate (they turn into red dots), and drag them
into the future parent node. Setics Sttar saves the change and updates the parent field of the whole
selection.

## Deleting Tool

The deleting tool deletes the selected features. Select the elements to delete, click the **Deleting** button,
and confirm in the window that appears.

## Google Street View Tool

The Google Street View tool explores a selected location of the map. Click the **Google Street View** button,
then click the location to examine; a window opens.

## Distance Measuring Tool

The distance measuring tool measures a distance between two elements. Click the **Distance measuring** button,
select an element on the map, then draw a line to another point element. The distance appears at the bottom
left of the screen. You can also measure the distance between two nodes with in-between elements — the sum of
distances is shown at the bottom left.
