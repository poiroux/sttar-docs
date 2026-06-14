---
sidebar_position: 8
title: Ducts & Microducts Tab
---

# Ducts & Microducts Tab

The Ducts and Microducts window assigns a specific type of duct to the desired
infrastructure.

## Main window

The tab has three parts: add a new duct/microduct parameter, available support,
and available duct.

| Command | Description |
|---|---|
| **Add Parameters** | Adds a new empty settings block; an empty block is removed when the tab is reloaded. |
| **Refresh View** | Refreshes the view after the equipment database is modified. |
| **Supports** | Adds available infrastructure supports and/or connections between infrastructures, from the Infrastructure tab (see *Available support* below). |
| **Allowed Ducts** | Adds available ducts and microducts from the Equipment Database (see *Available duct* below). |

## Available support

Click **+** to choose the supports that restrict the ducts/microducts allowed on
the bundle of infrastructure supports added in this block. Available
infrastructures must be set in the Infrastructure tab.

For a connection between two supports, they appear if their **Duct Affinity** is
set to *Standalone* in the Topology parameter (between two infrastructures, or
between an architecture and an infrastructure). Non-standalone connecting
supports can be shown via **Show all connecting support** (bottom-left).

## Available duct

Click **+** to choose the ducts and microducts eligible for the bundle of
infrastructure supports defined above. Available ducts and microducts must be
set in the Equipment Database.
