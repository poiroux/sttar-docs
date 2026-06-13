---
sidebar_position: 1
title: Export Network Data
---

# Export Network Data

This chapter covers all the reports and layers that can be exported from Setics
Sttar. Exports are grouped into:

- the **[Summary Report](./summary-report)** (Excel business report),
- **[Tree & table exports](./tree-and-table-exports)** (project config, infrastructure
  tree, routing tables, transmission tree, fiber connectivity),
- **[Diagrams & plans](./diagrams-and-plans)** (cabling and duct diagrams, splicing
  plans, link budget),
- **[GIS layers](./gis-layers)** (nodes, service areas, endpoints, pathways, cables,
  closures, ducts…).

## Export window

Export from **File ▸ Export…**. The window has four sections: the **Export
Folder**, **General exports**, **GIS exports**, and **Plugins**.

The **Export Folder** is where the files are written — pick it with **Browse** or
type the path. **Existing export files in the folder are overwritten.**

GIS-section exports are GIS layers, available in several formats via the
**Format** drop-down:

| Format | Extension |
|---|---|
| Esri Shapefile | `.shp` (with `.shx`, `.cpg`, `.dbf`, `.prj`) |
| MapInfo TAB | `.tab` |
| GeoJSON | `.geojson`, `.json` |
| GML | `.gml` |
| KML | `.kml`, `.kmz` |
| SpatiaLite | `.sqlite`, `.db` |
| AutoCAD DXF | `.dxf` |
| Microstation DGN | `.dgn` |

In the rest of this chapter, **`.xxx`** denotes one of these extensions.
