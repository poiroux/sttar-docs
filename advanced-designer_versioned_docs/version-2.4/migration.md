---
sidebar_position: 5
title: Migration
---

# Migration

This chapter deals with migrating a project created by a previous Setics Sttar
version, and outlines the points that deserve particular attention.

## From version 1 to version 2.2

Projects saved with version 1 of the software (`.sttar` format, all 1.x
versions) are compatible with version 2. They are loaded and automatically
converted into the new data and settings model — all that remains is to save the
project in a suitable file.

New settings present in version 2 but absent from version 1 are set so the
algorithms behave the same way as in version 1. In some cases these settings
take non-default values, namely:

- Route finder options (routing);
- Activation of all pathway-sharing options (deactivated by default).

## From version 2.0–2.1 to version 2.2

### Changes to cabinets

Cabinets are no longer created when there are no cables.

- **In version 2.1.4** — if there are no cables, cabinets are still created to
  match the dimensioning needs at that location.
- **From version 2.2.1 onwards** — cabinets are only created if cables reach
  them.

### Changes to the `Net_Pathways` export

The `SPAREFIB` attribute changed meaning: from version 2.2.1 it is the spare
fiber *need* instead of the result of *total fiber − used fiber need*.

- **In versions 2.2.0 and 2.2.1** — `SPAREFIB` is the minimum required number of
  spare fibers as per the configuration.
- **From version 2.2.2 onwards** — the value reverted to the version 2.1.4
  behavior: `SPAREFIB` is the total number of unused fibers.

### Changes to the `Net_Cables` exports

The `ENDAID` and `ENDBID` attributes in `Net_Cables`,
`Net_Cables_ClosureSections` and `Net_Cables_PathwaySections` changed. When no
network node or endpoint was available, that field used to contain the element
id of the access-network section going upstream from that point.

- **In versions 2.2.0 and 2.2.1** — the *Access Network Junction ID* is used: an
  internal-object identifier for the location, typically like `J000001.1`.
- **From version 2.2.2 onwards** — the *Pathway Access Structure ID* is used:
  the identifier of the Pathway Access Structure at that location, typically
  like `J000001`.

:::info[Resolving identifiers]
- To get the **node** identifier, use `NODEAID` / `NODEBID` — left blank when the
  cable does not connect to a node on that end.
- To get the **endpoint** identifier, use `ENDPTBID` — left blank when the cable
  does not connect to an endpoint on that end.
- To get the **pathway access structure** identifier, use `INFRAAID` /
  `INFRABID` — never blank.
:::
