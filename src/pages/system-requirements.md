---
title: System requirements
description: Hardware and software requirements for running Setics Sttar.
---

# System requirements

These requirements apply to all desktop Setics Sttar products (Advanced
Designer, Planner, Batch Engine). The setup program checks that they are present
before installation.

## Hardware

**Workstation** — a desktop or laptop PC running **Microsoft Windows 10 or 11**.
Recommended: an Intel Core i5 64-bit processor or better, at least 2.5 GHz,
**16 GB RAM** and **2 GB** of free disk space. A free USB port is needed only if
the license keys are stored on a dongle; license *files* require no USB port.

**Network license server** — a server (Microsoft Windows or Linux, among
others), optionally a free USB port for a license dongle, and one or more
Windows workstations connected to it. Clients and server communicate over IP on
**TCP ports 22350–22353**.

## Software

- **Microsoft .NET Framework 4.8 or higher** — installed from the package
  (`dotnetfx48.exe`) or by the setup assistant.
- **Microsoft Visual C++ 2022 redistributable** — included in the package and
  installed by the setup assistant if missing.
- **WIBU CodeMeter Runtime 7.10a or higher** — included in the package, or
  installed by the setup assistant. See [Licensing](/licensing).

:::note[License Manager utility]
The optional **License Manager** tool (**Help ▸ License Manager**) is a separate
executable that requires the **Microsoft .NET Desktop Runtime 8.0**. The main
application does not depend on it.
:::

## IT security

Customer IT-security guidance (network exposure, firewall rules for the license
server, data handling) is maintained as a dedicated support document.

:::info[Placeholder]
The IT Security information sheet is part of the ancillary content to migrate
from the support portal; it will be linked or inlined here. *(Source content not
yet ported.)*
:::
