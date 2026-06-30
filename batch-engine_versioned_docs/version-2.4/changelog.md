---
sidebar_position: 7
title: What changed
---

# What changed in this version

Cumulative release notes for the STTAR 2.4 line (2.4.0 → 2.4.6).

## 2.4.6 — Maintenance & features · 2026 · maintenance branch

Sttar 2.4.6 introduces the Design Instructions Visualizer — a new window for browsing, searching and locating design instructions on the map — alongside targeted improvements to routing, cabling and the bill of quantities, and a number of bug fixes carried over from production feedback.

### Highlights

- **New — Design Instructions Visualizer** _(2.4.6.5841)_  
  A dedicated window listing every design instruction in the current project, with a detail panel showing all properties of the selected instruction, search, refresh and "locate on map" actions, and an updated icon in the menu and on the map context menu.
- **New — Map-driven filtering of design instructions** _(2.4.6.5841)_  
  Filter the list to instructions attached to the currently selected map elements. Supports single and multi-selection, a one-shot snapshot mode and an opt-in "lock to map selection" live mode, with a clear filter chip showing the selected element names and a one-click reset.
- **New — Cost-override option in the Bill of Quantities** _(2.4.6.5828)_  
  Nodes and endpoints can now carry a cost-override flag that is reflected in the BOQ output, giving more flexibility for project-specific pricing.
- **New — Clustering by served endpoints** _(2.4.6.5828)_  
  A new option drives clustering and node placement based on the number of served endpoints, complementing the existing distance-based criteria.
- **New — Node Placement By Level** _(2.4.6.5830)_  
  Architecture branches are now merged into a common parent Support and placed level-by-level, producing more predictable node layouts on multi-tier networks.

### Improvements

- **Improved — Smarter splice handling on cable merge** _(2.4.6.5840)_  
  When merging cables, the existing splice closure is now re-used instead of creating a new straight joint, and obsolete closures are removed automatically.
- **Improved — Cassette numbering preserved** _(2.4.6.5840)_  
  Cassette numbers are now preserved on straight-joint fibers and added to unused fibers for consistency in splice-plan reports.
- **Improved — Connection status propagation** _(2.4.6.5840)_  
  New connection statuses (5 and 6) flag nodes placed despite parent capacity constraints and propagate through downstream nodes and endpoints, keeping the network state coherent for reporting.
- **Improved — Routing through network nodes** _(2.4.6.5840)_  
  Detours when routing through a network node have been reduced by removing unnecessary node-related edges from the routing graph; the downstream-nodes metric has been corrected.
- **Improved — Batch engine** _(2.4.6.5828)_  
  A pass of robustness and consistency improvements has been applied to the batch engine, including a new basic progress manager for cable merging.
- **Improved — Duct model instructions** _(2.4.6.5840)_  
  The duct-model instruction can now be modified, giving more control over the assembly of duct designs.

### Bug fixes

- **Fixed — SimplifyBranchingAtNodes path validation** _(2.4.6.5841)_  
  The full control-tree path from joint to descendant is now validated when simplifying branching at nodes, preventing invalid simplifications.
- **Fixed — Edge characteristics on partial RebuildEdges** _(2.4.6.5841)_  
  Edge characteristics are now copied rather than swapped during a partial RebuildEdges operation, avoiding stale references on neighbouring edges.
- **Fixed — User state preserved across RebuildEdges** _(2.4.6.5841)_  
  Imposed and Deleted user-state flags are now preserved across the reset performed by RebuildEdges.
- **Fixed — Splice plan report** _(2.4.6.5828)_  
  Hyperlink formatting in the splice-plan report has been corrected.
- **Fixed — Support Source picker robustness** _(2.4.6.5828)_  
  The Support Source picker no longer fails to open when the FME executable cannot be located; a graceful fallback is used instead.
- **Fixed — Valid layers dictionary** _(2.4.6.5840)_  
  Only distinct elements are added to the valid-layers dictionary, preventing duplicate entries on certain projects.
- **Fixed — GDAL native dependency redirects** _(2.4.6.5841)_  
  Binding redirects for the GDAL native libraries are now pinned to the shipped 3.3.2 build, eliminating a startup `TypeInitializationException` seen on some installations.

## 2.4.5 — Released November 2025 · build 2.4.5.5827

Sttar 2.4.5 is a major release that introduces full Imperial system support, a substantial routing refactor, the Connecting Access Structure attribute, a reorganised infrastructure legend, and a new rank-based cost breakdown report. It also brings a wave of cabling, splice-plan and routing robustness improvements.

### Highlights

- **New — Imperial system support** _(2.4.5.5819)_  
  Native end-to-end support for Imperial units across the application — projects, exports and reports adapt to the user's chosen unit system.
- **New — Connecting Access Structure attribute** _(2.4.5.5819)_  
  A new `ConnectingAccessStructure` attribute records the access structure used when creating connecting edges; importable at project setup.
- **New — Reorganised infrastructure legend** _(2.4.5.5821)_  
  All infrastructures are now grouped in a single tab in the map legend, with subgroups for lines, points and interconnections.
- **New — Rank-based cost breakdown report** _(2.4.5.5817)_  
  A new variant of the cost breakdown report orders items by rank for easier comparison across designs.
- **New — Node placement — distance from downstream nodes** _(2.4.5.5815)_  
  A new option lets node placement count the distance from downstream nodes instead of endpoints.
- **New — Splice-plan starting level** _(2.4.5.5820)_  
  The splice-plan export now lets users choose the starting level, useful when reviewing only part of the network.
- **New — Mutualisation option between areas** _(2.4.5.5821)_  
  A new UI option controls whether to mutualise between areas when the parent is not set.

### Improvements

- **Improved — Routing refactor** _(2.4.5.5819)_  
  A substantial routing refactor lays cleaner foundations for future routing options, including an additional run that connects vertices with capacity constraints.
- **Improved — Attribute mapping** _(2.4.5.5817)_  
  A round of attribute-mapping improvements refines parsing, validation and the UI controls.
- **Improved — Currency box** _(2.4.5.5821)_  
  The currency selection control has been improved for clarity and consistency.
- **Improved — Property grid** _(2.4.5.5821)_  
  Several long-standing rough edges in the property grid have been smoothed out.
- **Improved — Fixed cost on ducts** _(2.4.5.5817)_  
  Ducts can now carry a fixed cost, with merging logic that respects cost-efficiency rules.
- **Improved — Fiber-line serialization** _(2.4.5.5817)_  
  Fibre lines are now properly serialised, improving project persistence and reload behaviour.
- **Improved — Cable-merging UI** _(2.4.5.5817)_  
  When the merge dialog has many cable or splice-closure items, action buttons no longer get clipped out of view.
- **Improved — Support naming hygiene** _(2.4.5.5817)_  
  Duplicate support names are now discouraged with a warning, reducing downstream confusion.
- **Improved — Co-located nodes at the root** _(2.4.5.5817)_  
  Co-located nodes are now allowed at the network root, with accompanying small fixes.
- **Improved — EULA form refresh** _(2.4.5.5820)_  
  The end-user license agreement form has been updated.

### Bug fixes

- **Fixed — Cabling and splicing** _(2.4.5.5815, 2.4.5.5817, 2.4.5.5821)_  
  Closure model selection on straight-joint creation now uses the tree-node settings; closures merged at a location are properly reflected on all cables; missing fibres in cabling on project load; midspan splice-closure parameter resolution; cable-merging fix when two devices share a location at the end of the cable; cable cost combinations respecting the max-cables-per-section constraint; `RebuildCable` API rebuilds the same cable type, multipart vs single.
- **Fixed — Routing** _(2.4.5.5817, 2.4.5.5821)_  
  Deleting an interconnection to a node in advanced-search routing no longer fails; routing now handles the no-service-area input case correctly using parent node supports; the waiting-list mechanism in `DefaultConnectivityDesigner` now also covers patch panels; routing path is properly rewarded for later priority and service-area passes.
- **Fixed — Map and supports** _(2.4.5.5817, 2.4.5.5820)_  
  Infrastructure-support deletion no longer freezes the interface; map-feature selection is cleared before support deletion; deleted support sources properly clear all elements regardless of geometry type; attribute-table position/size normalised on opening; duplicated-support deletion input regression fixed.
- **Fixed — Export schema** _(2.4.5.5817, 2.4.5.5826)_  
  `Net_Nodes` aligned with `Net_Endpoints`: unconnected nodes still produce a feature with the matching connection status; `PathwayAccessStructure` IDs added to conduit labelling variables.
- **Fixed — OSM source picker** _(2.4.5.5815)_  
  When downloading pathway or obstacle data from OSM, users can now choose the geometry type explicitly in the support source picker.
- **Fixed — Project loading resilience** _(2.4.5.5817)_  
  If an exception occurs during network loading, the rest of the project (without the network) now continues to load instead of aborting.

## 2.4.4 — Maintenance & features · Released November 2024 · build 2.4.4.5812

Sttar 2.4.4 strengthens the cabling and splicing pipelines, expands the export schema to align with 2.3, refines node placement around infrastructure transitions, and resolves a large batch of cable-merging and connectivity issues.

### Highlights

- **New — Node placement in infra-change option** _(2.4.4.5799)_  
  A new option controls how node placement behaves when the upstream and downstream sections use different infrastructures.
- **New — Cabling instructions movable post-merge** _(2.4.4.5810)_  
  Cabling instructions can now be reordered after the cable merging step so the cable model and closures of multipart cables can be modified.
- **New — Connecting supports as obstacles** _(2.4.4.5809)_  
  Connecting supports can now be configured as obstacles in the dedicated settings.
- **New — Node-extension control across infra transitions** _(2.4.4.5806)_  
  A new option lets users decide whether to extend a node that was placed upstream of an infrastructure transition.
- **New — Fibre-connectivity export columns aligned with 2.3** _(2.4.4.5809)_  
  New columns added to the fibre-connectivity export to match the 2.3 schema, easing migration from older versions.

### Improvements

- **Improved — Cable-merging logic** _(2.4.4.5781, 2.4.4.5799, 2.4.4.5806)_  
  Inline storage is now removed from cables before merging; the merge condition is less restrictive (only blocking when the same fibres come back and forth, 5806); blueprint reconstruction now keeps valid downstream cables on partial blueprint failure; additional cable merging fixes ship in 5799.
- **Improved — Attribute mapping** _(2.4.4.5781)_  
  A first pass of the attribute-mapping overhaul lands in this release, with PostGIS support and validation improvements.
- **Improved — Patch-panel handling** _(2.4.4.5809, 2.4.4.5810)_  
  Patch-panel connectivity has been corrected and hardcoded models replaced with actual project models (PRs 440, 449).
- **Improved — Cumulative cost report** _(2.4.4.5811)_  
  A round of cumulative cost report fixes lands in this release.
- **Improved — Splice closure model resolution from project database** _(2.4.4.5812)_  
  The Cabling API now reads the splice-closure generic model directly from the project database, eliminating a class of subtle resolution issues.
- **Improved — Conduit-design diagnostics** _(2.4.4.5781)_  
  Conduit-design failure logging is now more informative, making it easier to diagnose unsuccessful runs.
- **Improved — Engineering-rules import safety** _(2.4.4.5809)_  
  The "Import Engineering Rules" menu has been disabled in release builds to prevent inadvertent use.

### Bug fixes

- **Fixed — Cable merging — exceptions and edge cases** _(2.4.4.5781, 2.4.4.5806, 2.4.4.5811)_  
  Several exceptions and incorrect outputs during cable merging have been eliminated: inserting cable sections; duplicate upstream cables for downstream sections; missing closure models on merging storage-only cases; repeated cuts at the same location; transmission-tree correctness at cabinets when the upstream cable is in midspan; unmerged cables caused by zero-length detours.
- **Fixed — CablingDiagram with shared splice closures** _(2.4.4.5810)_  
  The CablingDiagram no longer breaks when several splitters share a splice closure.
- **Fixed — Splice-counting and closure model resolution** _(2.4.4.5811, 2.4.4.5812)_  
  Fibres starting or ending in a closure are excluded from splice counts; the splice-closure generic model is now read directly from the project database in the Cabling API.
- **Fixed — OpenStreetMap data loading** _(2.4.4.5781, 2.4.4.5811)_  
  Two separate issues preventing OpenStreetMap data from loading properly into projects have been resolved: an SDCONFIG-load case and a follow-up resilience fix.
- **Fixed — Support source — PostGIS connections** _(2.4.4.5810)_  
  Opening an existing SDCONFIG with a PostGIS connection now picks the correct support-source type.
- **Fixed — Node placement — invalid downstream nodes** _(2.4.4.5781, 2.4.4.5799, 2.4.4.5809)_  
  Node placement no longer creates a node under a downstream level node; placement is nudged closer to isolated points when centering fails; node-centering exception when the centering reaches a downstream node has also been resolved.
- **Fixed — Duct-assembly configuration view** _(2.4.4.5781, 2.4.4.5791)_  
  Setting a non-zero total of ducts auto-selects the duct model; setting it to zero unselects it; selecting a model with zero tubes flags the row in red. A null-exception case when a duct assembly has no subducts is also resolved. Build 5791 also adds a fix that only scales up the size of duct assemblies between two larger sections, preventing incorrect progressive-scale-down behaviour.
- **Fixed — Reports and exports** _(2.4.4.5806, 2.4.4.5809, 2.4.4.5810)_  
  Fibre-connectivity export exception; Summary report double-counted quantities; cabling exports double features and missing network in batch engine; pathway sections failing to merge with cable slack loops; old link-budget infinite loop; FiberId numbering corrections.
- **Fixed — Fibre-line continuity** _(2.4.4.5806)_  
  Fibre lines stay coherent when modifying cable models, when fusing cables lengthwise, and when handling spare fibres in multi-level cable model selection.
- **Fixed — Midspan passthrough cables** _(2.4.4.5791)_  
  Avoided creating a double midspan with passthrough cables that were not merged, and corrected the fibre count when choosing the multilevel cable model.

## 2.4.3 — Maintenance & features · Released March 2024

Sttar 2.4.3 focuses on stability of the cabling and splicing pipelines, smarter routing around zero-termination endpoints, and a wave of UI consistency improvements on the Support Source picker and filters.

### Highlights

- **New — Voronoi service-area toggle** _(2.4.3.5773)_  
  A new option lets users enable or disable the Voronoi-based service-area computation depending on project needs.
- **New — Multi-Level Cables export and Project Summary** _(2.4.3.5773)_  
  The export and summary surface multi-level cable structures for richer reporting on hierarchical networks.

### Improvements

- **Improved — Duplicate-support cabling settings preserved** _(2.4.3.5773)_  
  Cabling settings are now copied when duplicating an infrastructure or architecture support, avoiding manual reconfiguration.
- **Improved — Merged-conduit cleanup** _(2.4.3.5773)_  
  Previously merged conduits are now properly cleaned up when merging again, preventing dangling references.
- **Improved — Filter and preprocessing UI** _(2.4.3.5773)_  
  The SupportSource preprocessing view, the generic filter view and the AttributePattern filter parameters have all received layout polish and consistency fixes.
- **Improved — Spare-fibre handling** _(2.4.3.5773)_  
  Spare fibres are now excluded according to the dimensioning settings, matching the user's stated configuration.
- **Improved — Validation notes and markups layers separated** _(2.4.3.5773)_  
  Validation notes and markups now live on independent layers so they can be styled and toggled independently.

### Bug fixes

- **Fixed — Cables report — most-upstream cable** _(2.4.3.5773)_  
  An exception when a cable started on the most upstream junction of the tree (junction between virtual root and first node) has been eliminated.
- **Fixed — Fibre connectivity through generic boxes** _(2.4.3.5773)_  
  Fibre connectivity now resumes correctly upstream of generic boxes; a regression introduced earlier in the 2.4 cycle has been corrected.
- **Fixed — Routing on zero-termination endpoints** _(2.4.3.5773)_  
  An infinite loop in the routing sequencer when some endpoints had zero terminations has been resolved.
- **Fixed — Cable merging — closure fallback** _(2.4.3.5773)_  
  When cutting a cable for merging, a generic-box closure is now returned as a fallback if no other model is available, preventing an exception.
- **Fixed — Splice plan: correct upstream cable** _(2.4.3.5773)_  
  Fibres are now spliced into the correct upstream cable when several upstream cables are available.
- **Fixed — Capacity reset on priority routing** _(2.4.3.5773)_  
  Capacity reset on nodes during priority routing has been corrected.
- **Fixed — Other fixes** _(2.4.3.5773)_  
  Splice plan export issue, infinite loops in node placement locator, manually-created connecting edges with same source/target vertex, missing spatial reference system, equipment selection on nodes with fibre need but no terminations.

## 2.4.2 — Maintenance & features · Released May 2023

Sttar 2.4.2 introduces new map layers for the access network, refactors the multi-part cable pipeline, and resolves a number of crashes around the Support Source picker and the attribute table.

### Highlights

- **New — Net_Cabinets and Net_PathwayAccessStructures layers**  
  Two new map layers expose cabinets and pathway access structures alongside the existing access-network layers.
- **New — Refreshed splash screen**  
  The launch experience gets a new splash screen for 2.4.2.

### Improvements

- **Improved — Multi-part cable pipeline**  
  A multi-pass refactor delivers cleaner abstractions and a dedicated optimisation pass for multi-part cables.
- **Improved — Support Source picker resilience**  
  Several robustness issues in the Support Source picker have been addressed, including better handling of no-spatial-reference cases.
- **Improved — Panoramic view abstraction**  
  A new `IPanoramicViewCapability` interface standardises how panoramic-view providers plug into the application.

### Bug fixes

- **Fixed — Crash on bulk endpoint/node delete**  
  Deleting multiple endpoints or nodes no longer crashes the application.
- **Fixed — Validation notes creation exception**  
  An exception during validation-notes creation no longer brings down the application — the failure is logged and recovery continues.
- **Fixed — Splice-plan export — Usage column**  
  The Usage column in the splice-plan export now displays the correct text for SPLICE and STOCK rows.
- **Fixed — Spare-fibre need by level**  
  `SPRFNEED` now reflects the spare-fibre need according to the dimensioning settings on the matching network level.
- **Fixed — Other fixes**  
  Support Source picker UI not refreshing on layer change, new spatial reference systems not being selected, attribute-table tab issues, attribute-table filter crash on mixed-type selections, CenterlinesToEdgelines random output, CablingDiagram fixes.

## 2.4.1 — Maintenance · Released December 2022

Sttar 2.4.1 polishes the Project Details view, restores property-grid features users had come to expect from 2.3, and brings back several attribute-table affordances along with contextual help.

### Improvements

- **Improved — Project Details view**  
  A coloured background on the project summary section, a rounded grey map border with translucent project rectangle, and proper handling of very-large project extents make this view noticeably more polished.
- **Improved — Property grid feature parity with 2.3**  
  The search box, description panel, sort and group buttons are back on the property grid, restoring 2.3-era ergonomics.
- **Improved — Attribute table refinements**  
  Consistent 12-pt font, improved highlight-feature button, clearer template for unavailable cells, and a cleaner column-footer toggle.
- **Improved — Contextual help (F1)**  
  F1 now opens the relevant online help page from the Application Options window and from the Export window.

### Bug fixes

- **Fixed — Attribute-table crash**  
  A crash in the attribute table has been resolved.
- **Fixed — Design Instructions parameter resolution**  
  Obsolete `FiberSources` references in the Design Instructions parameter finders no longer break unit tests R030 and R036.
- **Fixed — Other fixes**  
  Minimize button restored on the feature attributes table window; AttributeMapping settings issues in the Support Source picker; `FormatException` on empty strings in the cost and length user controls.

## 2.4.0 — Feature release · Released October 2022

Sttar 2.4.0 integrates punctual infrastructure into the cabling algorithm, rewrites the filter implementation in the UI, and ships a refreshed splash screen along with a reorganised menu structure.

### Highlights

- **New — Punctual infrastructure in the cabling algorithm**  
  Punctual infrastructure is now first-class in the cabling pipeline, and the corresponding map vertex is shown when selecting a punctual infrastructure.
- **New — 2.4 splash screen**  
  A new splash screen image marks the 2.4 milestone.

### Improvements

- **Improved — Filter UI rewrite**  
  The filter implementation in the UI has been reworked, with targeted fixes to the Support Source picker.
- **Improved — Project extent helper**  
  A new `GetExtent` method on the Project class standardises how extents are computed across the application.
- **Improved — Menu structure and log format**  
  The Architecture, Routing and Import Engineering Rules menu entries have been reorganised; the application log now uses a dot decimal separator for sub-second timestamps.
- **Improved — Larger Support IDs**  
  The maximum value for a Support Id has been raised to 9999.

### Bug fixes

- **Fixed — Attribute table — missing length and cost columns**  
  The attribute table now correctly shows the additional length and cost columns that had been hidden by an internal regression.
- **Fixed — Duct connector creation**  
  Duct connector sections are now created with the correct connector model instead of falling back to a closure.
- **Fixed — Feature-set reports — null guard**  
  A `NullReferenceException` when computing the object type of a null feature in feature-set reports has been eliminated.
