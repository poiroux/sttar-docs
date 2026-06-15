---
sidebar_position: 7
title: What changed
---

# What changed in this version

Release notes for STTAR 2.5 (the current *Next* line).

Sttar 2.5 is a major release that refreshes the visual identity, modernizes the technology stack, introduces the standalone License Manager utility, expands data-import and attribute-mapping capabilities, and brings significant performance and ergonomy improvements across the application.

### Highlights

- **New — 2026 visual identity**  
  New "S" application logo, refreshed toolbar and menu icons, and a redesigned HTML splash banner powered by WebView2 with an animated progress indicator.
- **New — License Manager utility**  
  A new standalone tool for managing CodeMeter licenses. Drag-and-drop support for CodeMeter files, taskbar indicators for service and local-server status, and a dedicated menu entry in the main application.
- **New — Endpoint categories**  
  Endpoints can now carry a category attribute, importable from source data and used throughout the design pipeline.
- **New — Connecting Access Structure attribute**  
  A new `ConnectingAccessStructureName` attribute records the access structure used when creating connecting edges; importable at project setup.
- **New — Vetro FiberMap integration plugin**  
  Full Vetro integration plugin covering all relevant layers and attributes for round-trip exchange with Vetro FiberMap.
- **New — Modernized technology stack**  
  The application now requires Microsoft.NET Framework 4.8 (general use) and Microsoft.NET Desktop Runtime 8.0 (License Manager). GDAL/OGR has been upgraded to version 3.8.4 for improved geospatial support.

### Improvements

- **Improved — Attribute mapping overhaul**  
  A new attribute-selector view with type-aware input parsing, default values, colour-coded specific values, placeholders and tooltips. Nullable types are properly handled, user input is validated against the attribute data type, and duplicates on source reload are eliminated.
- **Improved — Map selection performance**  
  Significant speed-ups when selecting and deselecting features on the map. The rectangle and polygon selection tools have been refactored onto a shared base for consistent behaviour.
- **Improved — Service area loading and buffer size**  
  Service-area loading is faster, and a new service area buffer size setting gives users finer control over service-area generation.
- **Improved — Cabling algorithm cancellation**  
  The cabling algorithm now responds to cancellation requests, so long optimizations can be safely interrupted.
- **Improved — Attribute table — group similar values**  
  The attribute table view now groups similar values for faster bulk inspection, with copy/paste support across cells.
- **Improved — Validation notes**  
  Validation notes are now triggered automatically whenever a support source is loaded or unloaded. The "project contains invalid settings" prompt now displays detailed information about the offending notes.
- **Improved — Cross-version project loading**  
  A confirmation dialog is shown when opening a project created by a different version of the application, reducing the risk of unintended migrations.
- **Improved — Export attributes**  
  A new `INFCONNAME` column in the `Net_Endpoints` and `Net_Nodes` exports indicates the name of the vertex each item connects to.
- **Improved — 2.5 ergonomy pass**  
  A dedicated round of UI polish: toolbar groups reorganized, optimization-step icons wired through the project details view, and the network-reset action gets its own distinct icon.

### Bug fixes

- **Fixed — Infinite loop on legacy SDCONFIG files**  
  An infrequent infinite loop when loading SDCONFIG files containing unknown element types (for instance undefined reports) has been resolved.
- **Fixed — Basemap activation**  
  Enabling the basemap after a source/provider change while the basemap was hidden no longer fails to refresh.
- **Fixed — Obstacle commands in the Planner Edition**  
  Obstacle-related commands on the Infrastructure Model view in the Planner Edition now work as expected.
- **Fixed — Currency labels**  
  The Euro currency was previously displayed under an incorrect English name — now resolved.
- **Fixed — OSM import**  
  Temporary-file creation when downloading points from OpenStreetMap is now compatible with the upgraded OGR version.
- **Fixed — Routing on conduit and capacity edge cases**  
  Several routing issues have been corrected: capacity reset on nodes during priority routing, missing SRS on certain support sources, null-reference cases in attribute mapping, and conduit-design failure logging.
- **Fixed — Support source picker**  
  Display resolution issues in the support-source picker have been resolved.
