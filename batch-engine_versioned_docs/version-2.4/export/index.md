---
sidebar_position: 1
title: Output Files
---

# Output Files

The Batch Engine writes the **same reports and GIS layers** as the interactive
application. In batch mode the output set is not chosen in a dialog — it is
selected on the command line with the **`--exportgroup`** / **`--reports`**
options and written to the **`--outputdir`** folder (see
**[Command-Line Interface](../cli/)**). The descriptions below document the
contents of each output file regardless of how it is produced.

Exports are grouped into:

- the **[Summary Report](./summary-report)** (Excel business report),
- **[Tree & table exports](./tree-and-table-exports)** (project config, infrastructure
  tree, routing tables, transmission tree, fiber connectivity),
- **[Diagrams & plans](./diagrams-and-plans)** (cabling and duct diagrams, splicing
  plans, link budget),
- **[GIS layers](./gis-layers)** (nodes, service areas, endpoints, pathways, cables,
  closures, ducts…).

## Output folder and formats

The output folder is the **`--outputdir`** passed on the command line. **Existing
output files in the folder are overwritten.**

GIS-section outputs are GIS layers, written in the format configured for the
project (set in the application; the same formats are available):

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
