---
title: Troubleshooting & FAQ
description: Common issues and where to find answers when using Setics Sttar.
---

# Troubleshooting & FAQ

Common questions and known issues across the Setics Sttar products. Detailed
resolutions for several items below live in the Setics support knowledge base
and are being migrated here — those are flagged as placeholders rather than
guessed.

## Where is the log file?

Each product writes a log under your Windows user profile:

```
%LocalAppData%\Setics\Setics Sttar\<version>\STTAR.log
```

When reporting an issue to support, attach this file — it records the
`ERROR`/`FATAL` entries that explain most failures.

## Licensing issues

- **License error on launch** — confirm the **CodeMeter Runtime** is installed
  and your license container is visible in the **CodeMeter Control Center**. See
  [Licensing](/licensing).
- **Specific license error codes** (e.g. *error 200*) and remote-update (RAU)
  problems — *resolution documented in the support knowledge base (placeholder —
  source content not yet ported).*

## Startup & runtime errors

- **Runtime error R6025** — *known issue; resolution documented in the support
  knowledge base (placeholder — source content not yet ported).*
- **Accented characters in a SIG / input file** cause an import or read error —
  *resolution documented in the support knowledge base (placeholder — source
  content not yet ported).*

## Data preparation

For preparing GIS input data outside the product (for example with the QGIS
Modeler), see the data-preparation guidance — related to the manual's
[Filters & preprocessing](/advanced-designer/appendix/filters-preprocessing)
appendix.

:::info[Help us improve]
This FAQ is seeded from the support portal's most frequent topics. Items marked
*placeholder* are pending content migration; the structure is in place so each
answer can be filled in without changing links.
:::
