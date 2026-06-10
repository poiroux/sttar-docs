---
sidebar_position: 4
title: Map, Information Bar & Property Table
---

# Map, Information Bar & Property Table

## Map

The map gives a geographical view of the project elements and lets you interact with them. Geographic
information is displayed according to the priority order defined by the legend: elements of the layers at the
top of the legend are drawn on top of those of the lower layers. You can change the graphic rendering of map
elements by editing the symbology associated with each layer.

The map's graphical data is represented in the **Web Mercator** coordinate system (EPSG:3857), imposed by the
basemaps used (e.g. OpenStreetMap). Numeric values such as distances or coordinates are displayed in the
**WGS 84** coordinate system (EPSG:4326).

## Information Bar

The map's status bar provides information about the action in progress. It indicates the number of selected
elements (selection tool) or the measured distance (measurement tool).

## Property Table

The property table displays the available attribute names for the features selected on the map, along with
their values. Two modes are available in the menu bar above the table:

- Display **by category**,
- Display in **alphabetical order**.

When multiple features are selected, only the **common** values (identical for all selected entities) are
displayed; other fields remain empty or show "Multiple". Grey fields cannot be edited.
