---
sidebar_position: 1
title: Prepare the Project
---

# Prepare the Project

Before configuring the software, you must define rigorously the network to build. This network shall
contain at least:

- All endpoints (buildings, homes passed…) that need to be connected;
- Nodes (CO, FCP…) and infrastructure (duct, aerial, new trenches…) on which the network will be able to rely;
- Specific engineering rules related to infrastructure routing, node and endpoint clustering, cabling, etc.

All these parameters will be gathered inside a Setics Sttar "project" that may be saved and reloaded for
further modifications.

The project data (location of endpoints and nodes, etc.) are saved by default in a format called **SDPROJ**.
Furthermore, there is a format called **SDCONFIG** which only contains the project configuration, excluding
the data.

The following paragraphs give a snapshot of the method to follow. Please understand that these guidelines
cannot cover every situation. Indeed, each project has its own particularities and you should adjust the
method to the set of data used. The same goes for the design and engineering rules.

## Identify Useful GIS Data and Check their Quality

Input GIS data of a Setics Sttar project can be regrouped into three categories:

- Infrastructure that can be reused/mobilised (polylines);
- Endpoints to connect (points);
- Mandatory, i.e. user-imposed, nodes of the network (points).

> *GIS: Geographic Information System.*
>
> Setics Sttar is also able to position new nodes automatically. This feature is covered later in this manual.

:::caution
The quality of input data impacts heavily the quality and the precision of the network built by Setics Sttar.
Thus, it is recommended to ensure as early as possible that GIS data have been digitized with the highest
quality possible, given the technical limitations, the budget allocated to the study and the level of
precision expected.
:::

### Underlying Infrastructure

The underlying infrastructure is the infrastructure the network will potentially rely upon. It includes:

- **Existing infrastructure** such as telecommunications ducts, potentially belonging to the incumbent,
  overhead communication or power lines on which you can add at least one additional cable, etc.
- **Road network:** as a last choice, if no other existing infrastructure is available, civil engineering
  will be envisioned to build the network along the roads. Therefore, we recommend that you load the road
  network into the project.

Setics Sttar Advanced Designer allows the user to work on every kind of underlying infrastructure as long as
the GIS data is made up of polyline features. It is also possible to load point data that represent, for
example, chambers (manholes…) or aerial supports (poles…).

### Nodes and Endpoints

Endpoints to be connected and nodes of the network are given to Setics Sttar through GIS layers of punctual
objects representing:

- **The endpoints** that need to be connected to the network. These shall contain pieces of information
  (attributes) specifying how many network outlets each site represents.
- **Operators' nodes** on which the network will rely. These nodes are not mandatory since Setics Sttar is
  able to position them on its own, once engineering rules have been set.
- If there are different levels of pre-located nodes, they must be loaded from different GIS data sources in
  order to be dealt with separately (see the *Map Tab* section).

## Define Engineering Rules

Specifying engineering rules allows you to control how Setics Sttar Advanced Designer will automatically
create the architecture and size the network.

A fundamental concept applied by Setics Sttar Advanced Designer is that an access network is organized as a
**tree**, with a central office or similar node at its top. This tree is structured by interconnected nodes
located at different hierarchical levels, each one dealing with a specific area of connected endpoints
(*service areas*).

## Define Reference Costs

Setics Sttar Advanced Designer functions for aided conception rely on a principle of **economic
optimization**. Consequently, users must provide a positive reference cost to each and every element of the
project. The reference currency unit is parameterizable and defined for the whole project.

Every type of infrastructure has to have a fixed and/or linear cost. Similarly, the creation of a node has a
cost. This may be the cost of construction, or even the net present value of the cost induced by renting the
building over several years or decades. The actual meaning of the cost is up to you.

Setics Sttar Advanced Designer designs a network optimizing the cost of infrastructures, which generally make
up the largest part of the network costs. Consequently, costs should be defined as closely as possible to
reality so that their values are taken into account in a realistic way and the best possible route is chosen.

:::info
For the optimization algorithms to work as expected, it is strongly discouraged to use zero or near-zero
values, especially for the infrastructure costs.
:::
