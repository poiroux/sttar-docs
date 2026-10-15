---
sidebar_position: 4
title: Installing a Network License
---

# Installing a Network License with a License Server

A network license is served centrally by CodeMeter running on a license server,
and consumed by Setics Sttar on the workstations.

## On the license server machine

Only **CodeMeter** is installed on the server — not the Setics Sttar
application.

1. Insert the USB drive supplied with the installation kit into an available USB
   port of the server, or download the software provided by our support team.
2. Open the CodeMeter web administration tool: right-click the **CodeMeter
   Control Center** icon (in the Windows taskbar notification area) and choose
   **Web Administration**.
3. Go to the **Configuration** tab, then the **Server** tab in the second level
   of the menu at the top of the page.
4. Tick **Enable** in the **Network Server** panel, then click **Apply**.

![CodeMeter Control Center icon in the Windows taskbar](/img/manuals/fig1.png)

![CodeMeter WebAdmin — Configuration ▸ Server tab](/img/manuals/2-3-1-codemeter-version_v2.jpg)

The steps above apply to a server running Microsoft Windows.

## On the workstations

1. Install Setics Sttar on each workstation, following the steps in
   [Installing a workstation license](./workstation-license).
2. CodeMeter configures itself automatically on each workstation as a client of
   the license server.
3. *(Optional)* Configure CodeMeter's **Server Search List** to specify which
   license server to use: open **CodeMeter WebAdmin ▸ Configuration ▸ Basic**
   and add the server's name or IP address to the **Server Search List**.

:::info
If the automatically detected license server is not found, or acquiring
licenses from it takes too long, specifying the server's name or IP address in
CodeMeter WebAdmin may be required.
:::
