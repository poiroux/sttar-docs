---
sidebar_position: 4
title: What changed
---

# What changed in this version

Release notes for the STTAR 2.3 maintenance branch (2.3.0 → 2.3.15).

The 2.3 line has been a long-running maintenance branch, accumulating a steady stream of fixes and small improvements over four years (2.3.0 through 2.3.15). Below is a consolidated digest of the most user-visible changes.

### Highlights

- **New — Net_Cabinets and Net_PathwayAccessStructures map layers** _(2.3.13.5739)_  
  Cabinets and pathway access structures are now exposed as dedicated map layers.
- **New — Cloud server support** _(2.3.14.5770)_  
  A new `Sttarcloud` build configuration plus a `--cloudlicensemaxendpoints` command-line option enable Sttar to run in cloud-server scenarios with endpoint-count licensing.
- **New — `--inputdir` CLI argument** _(2.3.12.5707)_  
  A new optional argument lets users specify a different base directory for data sources when opening an SDCONFIG file.

### Improvements

- **Improved — CablingDiagram — conduit variables** _(2.3.13.5739)_  
  New variables related to conduits have been added to the CablingDiagram report.
- **Improved — Map context-menu — multi-conduit details** _(2.3.13.5739)_  
  The conduit identifier and model number are now displayed in the map context menu when several conduits or sections are selected.
- **Improved — Google Street View provider refresh** _(2.3.13.5739)_  
  The integrated Street View panoramic provider has been updated following the end of support for older Internet browsers.
- **Improved — Splice-plan splitter usage** _(2.3.13.5739)_  
  When the last splitter of a given ratio is not full and smaller split-ratios are available, the plan now optimises usage across them.

### Bug fixes

- **Fixed — Routing & splice plan** _(2.3.12.5707, 2.3.13.5739)_  
  Splice plan failure when several splitters are on the same upstream fibre; collocated endpoints incorrectly removed from the routing graph in Advanced Search; passthrough mistakenly reusing fibres allocated to a splitter; connecting support of nodes collocated with multiple infrastructures.
- **Fixed — Export and reports** _(2.3.13.5739, 2.3.14.5770, 2.3.15.5798)_  
  Esri FileGDB and AutoCAD DXF export failures; Link Budget export issue; `RemoveMultiPartGeometries` filter generating straight-line polylines incorrectly; Net_PathwayAccessStructure not removed from the map legend when the network design is cleared.
- **Fixed — Stability** _(2.3.13.5739, 2.3.14.5770, 2.3.15.5798)_  
  Infinite loop in the `JoinLineStringsBetweenJunctions` filter under certain conditions; Duct Settings view failing to open on projects with invalid Support references; Euro currency English label corrected from "Croatian Kuna" to "Euro".
