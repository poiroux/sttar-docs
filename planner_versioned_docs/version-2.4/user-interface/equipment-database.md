---
sidebar_position: 11
title: Equipment Database
---

# Equipment Database

The Equipment Database holds the technical characteristics and costs of the
equipment usable in a project, grouped into seven datasheets:

- Cabinets and Racks
- Cables
- Splice Closures
- Duct and Microduct Assemblies
- Ducts and Microduct Tubes
- Splitters
- Generic Equipment

Each datasheet shares the same controls: **Add** creates an entry, **Delete**
removes the selected one, **Delete All** clears the whole database, and
**Import…** loads a predefined equipment database.

## Cabinets and Racks

| Setting | Description |
|---|---|
| **Product name** | Name of the cabinet or rack. |
| **Description** | Brief description of the product. |
| **Manufacturer** | Manufacturer name. |
| **Model number** | Unique product id (user-chosen or auto-generated). |
| **Unit price** | Price in the selected currency. |
| **Capacity** | Number of terminations the cabinet/rack can host. |

## Cables

| Setting | Description |
|---|---|
| **Product name** | Name of the cable. |
| **Description** | Brief description of the product. |
| **Manufacturer** | Manufacturer name. |
| **Model number** | Unique product id. |
| **Unit price** | Price in the selected currency. |
| **Diameter** | Cable diameter (mm). |
| **Fibre count** | Number of fibers in the cable. |
| **Tube capacity** | Number of fibers per tube. For a single-tube cable, use the same value as the fibre count. |
| **Maximal length** | Maximum cable length (m). |

## Splice Closures

| Setting | Description |
|---|---|
| **Product name** | Name of the splice closure. |
| **Description** | Brief description of the product. |
| **Manufacturer** | Manufacturer name. |
| **Model number** | Unique product id. |
| **Unit price** | Price in the selected currency. |
| **Capacity** | Number of splices the closure can host. |
| **Cable port diameters** | Diameter of each port (mm), separated by semicolons. Example: a closure with four 12 mm ports and one 20 mm port → `12; 12; 12; 12; 20`. |

## Duct and Microduct Assemblies

| Setting | Description |
|---|---|
| **Product name** | Name of the (micro-)duct assembly. |
| **Description** | Brief description of the product. |
| **Manufacturer** | Manufacturer name. |
| **Model number** | Unique product id. |
| **Unit price** | Price in the selected currency. |
| **Outside diameter** | Outside diameter (mm). |
| **Number of Microducts** | The microduct tubes that make up the assembly. |

## Ducts and Microduct Tubes

| Setting | Description |
|---|---|
| **Product name** | Name of the (micro-)duct tube. |
| **Description** | Brief description of the product. |
| **Manufacturer** | Manufacturer name. |
| **Model number** | Unique product id. |
| **Unit price** | Price in the selected currency. |
| **Outside diameter** | Outside diameter (mm). |
| **Inside diameter** | Inside diameter (mm). |
| **Compatible cables** | The cables that can be used in the tube. |

## Splitters

| Setting | Description |
|---|---|
| **Product name** | Name of the splitter. |
| **Description** | Brief description of the product. |
| **Manufacturer** | Manufacturer name. |
| **Model number** | Unique product id. |
| **Unit price** | Price in the selected currency. |
| **Split ratio** | Split ratio of 1 to *n*. |
| **Attenuation** | Splitter attenuation (dB). |

## Generic Equipment

Equipment used for exceptional cases.

**Generic Cabinet**

| Setting | Description |
|---|---|
| **Generic name** | Generic cabinet or rack. |
| **Unit price** | Price in the selected currency. |

**Generic Cable**

| Setting | Description |
|---|---|
| **Generic name** | Generic cable name. |
| **Unit price** | Price in the selected currency. |
| **Tube capacity** | Number of fibers per tube. |

**Generic Splice Closure**

| Setting | Description |
|---|---|
| **Generic name** | Generic splice-closure name. |
| **Unit price** | Price in the selected currency. |
