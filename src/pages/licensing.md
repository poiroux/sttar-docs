---
title: Licensing
description: How Setics Sttar licensing works — CodeMeter runtime, workstation and network licenses, license keys.
---

# Licensing

Setics Sttar products are protected by the **WIBU CodeMeter** licensing system.
CodeMeter controls the rights to use each product and ships with tools to
configure license containers and the license server (the **CodeMeter Control
Center** and **CodeMeter WebAdmin**). This page is shared across all products
and open to any signed-in user.

## License types

A valid license unlocks a product; license **type** determines which product.

| Code | Unlocks |
|---|---|
| `STAD` | Advanced Designer |
| `STPL` | Planner |
| `STBE` | Batch Engine |
| Cloud | *Mapping to be finalized* |

## CodeMeter runtime

The **CodeMeter Runtime** must be installed before launching any Setics Sttar
product (version **7.10a or higher**). The product setup assistant installs it
automatically if missing; it is also available standalone on the
[Downloads](/downloads) page.

## Workstation license

A workstation (standalone) license stores the rights locally — in a license
**file** or on a USB **dongle**. Full procedure:
[Installing a workstation license](/advanced-designer/installation/workstation-license).

## Network license with a license server

A network license serves rights from a central server to connected
workstations. Clients and server communicate over IP on **TCP ports
22350–22353**. Full procedure:
[Installing a network license](/advanced-designer/installation/network-license).

## Managing license keys

Routine license-key administration — applying a remote update (**RAU**),
refreshing keys, and managing or deleting containers — is performed through the
CodeMeter Control Center / WebAdmin.

:::note[Detailed procedures]
Step-by-step license-key administration (RAU files, container maintenance,
license-server admin) is maintained in the Setics support knowledge base and
will be folded into this section during content migration. *(Placeholder —
source content not yet ported.)*
:::

## License errors

If a product reports a license error on launch, confirm the CodeMeter Runtime
is installed and the container is visible in the CodeMeter Control Center. See
[Troubleshooting](/troubleshooting) for common license-error cases.
