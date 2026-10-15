---
sidebar_position: 2
title: Configure the Project
---

# Configure the Project

Configuring a project happens across three tabs, in order:

1. [Set up the Project](#set-up-the-project)
2. [Load and Configure Infrastructures](#load-and-configure-infrastructures)
3. [Load and Configure the Network Architecture](#load-and-configure-the-network-architecture)

## Set up the Project

![The Project tab](/img/manuals/captureproj.png)

The **Project** tab allows you to configure the current project. For each project, it is recommended that you
define:

- A project name,
- The region in which the project is located,
- The spatial reference system of the project,
- The currency,
- A project equipment database (required to create cables, connectors, etc.),
- Applications.

See details of the Project tab in the *Project Tab* section, and details about the equipment database in the
*Equipment Database* section (User Interface chapter).

## Load and Configure Infrastructures

The **Infrastructure** tab allows you to add GIS data from reusable infrastructures to the project and to
configure these data. See details in the *Infrastructure Tab* section.

![The Infrastructure tab](/img/manuals/user-interface-infrastructure-tab-stad23.jpg)

The **Add Pathway Support** button adds an infrastructure in the window. To import the data, click on
**Import Datasource…**

When importing an infrastructure, you define:

- A name for the data source,
- The geographic data file to be imported,
- The corresponding spatial reference system,
- Attributes present in the data source, which will allow you to import certain characteristics of the
  infrastructures (e.g. identifiers, lengths, etc.).

The data source import settings are explained in the *Import Infrastructure Data* section.

![Infrastructure import settings](/img/manuals/captureinfraimport.png)

In the imported infrastructure's properties, it is necessary to fill in the **cost** and **topology**
properties of the infrastructure. The costs are important because they play a role in:

- The financial rating of the network and its elements,
- Depending on its settings, the choice of routes.

See details in the *Infrastructure Properties* section.

## Load and Configure the Network Architecture

The passive architecture includes two types of data: the **nodes** (for example POP, CO, FCP, FDT…) as well
as the **endpoints**.

The **Architecture** tab allows you to configure the use of the input GIS layers containing the points to be
reused or created, as well as to define the interconnections between the nodes or endpoints and the
infrastructures, the equipment to be used, and the costs linked to this equipment.

![The Architecture tab](/img/manuals/capturearchitecture_v1.png)

The buttons **Add Node Support** and **Add Endpoint Support** allow you to create the supports for importing
node- and endpoint-related data.

Click **Add Node Support**, then click **Import Datasource** to import a node support. When importing nodes,
you define:

- A name,
- The geographic data file (point layer) to be imported (numerous supported formats, including `.shp`),
- A spatial reference system (it is generally recognized by the software),
- Optionally, a field in the table representing the length of each infrastructure segment (by default, the
  length is calculated by the software),
- Fiber dimensioning (dimensioning of used fibers and spare fibers).

![Node import settings](/img/manuals/capturearchitectureimportnode.png)

In the properties of the imported nodes, it is necessary to fill in the properties of costs, equipment, and
topology. See details in the *Import Passive Architecture Data* section.

It is also possible to have Setics Sttar Advanced Designer size and automatically place additional nodes
according to engineering and level rules. See details of automatic node placement in the *Node Properties*
section.

Click **Add Endpoint Support**, then click **Import Datasource** to import endpoint support. When importing
endpoints, you define:

- A name,
- The geographic data file (point layer) to be imported (numerous supported formats, including `.shp`),
- A spatial reference system (it is generally recognized by the software),
- Optionally, a field in the table representing the length of each infrastructure segment,
- Fiber dimensioning (dimensioning of used fibers and spare fibers).

![Endpoint import settings](/img/manuals/capturearchitectureimportendpoint.png)

In the properties of the imported endpoints, it is necessary to fill in the cost and topology properties.
See details in the *Endpoint Properties* section.
