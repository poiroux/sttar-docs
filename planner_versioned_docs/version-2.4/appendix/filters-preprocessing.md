---
sidebar_position: 5
title: Filters & Preprocessing
---

# Setting of Filters and Preprocessing of Input Data

Filters and preprocessing are available when importing input data, under the
**Preprocessing** option (see *Import infrastructure data* and *Import passive
architecture data*). Select the filter/preprocessing option, click **Add**, and
fill in both the preprocessing settings **and** the data import settings, then
click **OK**. Several preprocessings and filters can be created on the same data
source.

## Filter on attribute

Filters input data by a pattern.

| Setting | Description |
|---|---|
| **Attribute** | Attribute to filter on (from the input data's attributes). |
| **Pattern** | Expression filtering the imported elements. |

Pattern rules (examples assume a road-type data source):

- **Case-insensitive** — `main street` matches "Main Street", "MAIN STREET", …
- An **empty** pattern returns only features that have a value (excludes empty
  ones).
- **`*`** wildcard — `w*` matches anything starting with "w" ("Willow Rd"…);
  `*rd` matches anything ending in "rd"; `b*t` matches "Birch Street". A leading
  **and** trailing asterisk (`*a*`) is **not** supported.
- **`OR`** combines values: `'*road' OR '*drive' OR '*lane'`. The operator must be
  uppercase and values in single quotes.
- **`NE`** ("not equal") excludes: `NE 'highway*'` returns anything not starting
  with "Highway". Uppercase operator, single-quoted values.
- Single quotes are unnecessary when no operator is used (`'high street'` ≡
  `high street`). `OR` and `NE` can be combined. An **AND** condition is created
  with two successive separate filters.

Operators: `EQ` (equal), `NE` (not equal), `GE` (greater than or equal), `GT`
(greater than), `LE` (less than or equal), `LT` (less than).

## Generate edgelines from centerlines

Creates edge lines from a linear input — useful when you only have a road
center line but need both traffic lanes.

| Setting | Description |
|---|---|
| **Default width** | Width (m) used when the attribute is invalid or unavailable. |
| **Width attribute** | Attribute holding each feature's width. |

## Remove multipart geometries

Joins parts that share attributes but are stored as separate geometries into a
single entity.

| Setting | Description |
|---|---|
| **Strategy** | *JoinOrSkip* — try to bring the parts together, otherwise reject the multi-geometry. |

## Preprocess with FME

Available under the **Preprocessing** option — select *Processing with FME* and
click **Add**. If no FME project is selected, click **Options…** to open the
settings:

| Setting | Description |
|---|---|
| **FME Engine** | Path to the FME executable (**Browse…**). |
| **FME Workspace** | Path to the FME project (**Browse…**). |

Once both are set, the window refreshes and offers project-specific settings
(e.g. selecting the source input data). Click **OK** — the Preprocessing option
then shows the selected FME project name.

## Split lines at intersections

| Setting | Description |
|---|---|
| **Merge distance** | Distance below which two cutting points are combined (m). |
| **Search radius** | Maximum distance at which two lines are considered to intersect even if they do not touch (m). |
| **Snap distance** | Distance below which a cutting point joins the nearest line vertex (m). |

## Split lines into equal parts

Splits a linear input into segments of the same length.

| Parameter | Description |
|---|---|
| **Maximum length** | Splitting length (m). |

This does **not** split at intersections — combine with *Split lines at
intersections* to get both.

## Split points by capacity

Splits points by their capacity.

| Parameter | Description |
|---|---|
| **Capacity attribute** | Attribute holding each point's capacity. |
| **Dispersion distance** | Minimum distance between the additional points. |
| **Dispersion style** | *None*, *Circles*, *Squares*, or *SunflowerSeeds*. |
| **Maximum capacity** | Maximum capacity per point; excess is distributed to additional points. |

**Dispersion styles** — *None*: additional points stacked on the original;
*Circles*: concentric circles (outer circle may be incomplete); *Squares*: a grid
from the top-left (last row may be incomplete); *SunflowerSeeds*: a compact,
smooth arrangement around the original point.
