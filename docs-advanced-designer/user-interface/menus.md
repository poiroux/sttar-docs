---
sidebar_position: 2
title: Menus
---

# Menus

The menu bar at the top of the main window groups the application commands into
four menus: **File**, **Project**, **Tools** and **Help**.

## File menu

| Command | Description | Shortcut |
|---|---|---|
| **New project** | Creates a blank project. | Ctrl + N |
| **Open Project…** | Opens an existing project from its `.sdconfig` or `.sdproj` file. V1.x `.sttar` files are also supported and converted automatically to the new format. | Ctrl + O |
| **Save** | Saves the current project, reusing the last file name and location. On first save, a dialog asks for the name and location of the `.sdproj` (or `.sdconfig`) file. | Ctrl + S |
| **Save as…** | Saves the project under a new file name; subsequent **Save** commands use this new file. | |
| **Save Copy As…** | Saves a copy to another file; subsequent **Save** commands keep using the original file. | |
| **Export** | Opens the export screen to select the project elements to export and the output formats. | |
| **Close project** | Closes the project. | |
| **Recent projects** | Reopens a recent project. Projects whose file is no longer accessible are greyed out. | |
| **Exit** | Exits Setics Sttar. If a license server is in use, the license is released. | Alt + F4 |

:::info Project file formats
- **`.sdproj`** — a compressed *Advanced Designer* project file containing the
  project settings **and** a local copy of the infrastructure and architecture
  data (reusable infrastructure, nodes, endpoints). Cabling data is **not**
  saved (it can be recomputed by re-running the project).
- **`.sdconfig`** — a project file containing only the settings plus **links**
  to the source data files; the data itself is not saved.
:::

## Project menu

| Command | Description | Shortcut |
|---|---|---|
| **Project settings** | Opens the settings tab specific to the current project (see the **Project Tab** section). | F5 |
| **Results** | Opens the tab showing estimated infrastructure/equipment quantities and project costs (see the **Results Tab** section). | |
| **Map** | Opens a map tab to view input data and results (see the **Map Tab** section). | F6 |
| **Infrastructure** | Opens the tab to import, create and configure infrastructures (see the **Infrastructure Tab** section). | |
| **Passive Architecture** | Opens the tab to import, create and configure passive architectures — nodes and endpoints (see the **Architecture Tab** section). | |
| **Cable System** | Opens the cable-system configuration tab (see the **Cable System Tab** section). | |
| **Duct & Microduct System** | Opens the duct-settings configuration tab (see the **Ducts & Microducts Tab** section). | |
| **Network Optimization** | Opens the network-optimization settings tab (see the **Network Optimization Tab** section). | |
| **Import Engineering Rules** | Imports engineering rules into the current project. | |

## Tools menu

| Command | Description |
|---|---|
| **Options** | Opens the application-options window (see the **Options** section). |
| **License Selector** | Selects the license server and the active Setics Sttar license (see the **License Selector** section). |
| **Plugins** | Access to the extended functionalities provided by the plugins loaded at startup (see the **Plugins** section). |

## Help menu

| Command | Description |
|---|---|
| **Website** | Opens the product website [setics-sttar.com](http://www.setics-sttar.com/). |
| **Online Support** | Opens the [online support platform](http://support.setics-sttar.com/) to report anomalies (login required). |
| **Online Help** | Opens the online help on the support platform (login required). |
| **Log File** | Opens the application log file, which records events that help resolve problems. |
| **Get Latest Release** | Opens the latest-release article on the support platform (login required). |
| **About…** | Information about Setics Sttar. |
