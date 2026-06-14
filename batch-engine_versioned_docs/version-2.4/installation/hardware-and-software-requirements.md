---
sidebar_position: 2
title: Hardware & Software Requirements
---

# Hardware and Software Requirements

## Hardware

**Workstation configuration** — a workstation or desktop/laptop PC running
Microsoft Windows 10 or 11. We recommend an Intel Core i5 64-bit processor or
better, at least 2.5 GHz, **16 GB RAM** and **2 GB** of free disk storage. A
free USB port is needed only if the license keys are stored on a dongle;
license *files* require no USB port.

**Network license with license server** — a server (several operating systems
are supported, including Microsoft Windows and Linux), optionally a free USB
port to store the license keys on a dongle, and one or more Windows workstations
connected to the server. Clients and server communicate over IP on **TCP ports
22350–22353**.

## Software

- **Microsoft .NET Framework 4.6.2 or higher.** If needed, install it from the
  `dotnetfx46.exe` file in the installation package, or let the setup assistant
  download and install it.
- **WIBU CodeMeter.** Install from `CodeMeterRuntime.exe` version 7.10a or
  higher (32-bit and 64-bit Windows) included in the installation package, or
  let the setup assistant download and install it.

:::info
CodeMeter is the license server that controls the rights to use Setics Sttar
products. Developed by WIBU, it ships with tools to configure the license
server and the license-key containers, such as the **CodeMeter Control Center**
and **CodeMeter WebAdmin**.
:::

The Setics Sttar setup program checks that these requirements are present.
