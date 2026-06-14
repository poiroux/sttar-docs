---
sidebar_position: 2
title: Simple run
---

# Simple run

Compute a single project and write the default outputs to a folder:

```bat
START /WAIT sttar -c "C:\projects\city.sdconfig" -o "C:\out\city" --accepteula --logfile "C:\out\city\run.log"
```

What this does:

- computes `city.sdconfig`;
- writes the **default export group** to `C:\out\city`;
- accepts the EULA so the run is unattended;
- keeps a session log next to the outputs.

To add a specific report on top of the default group, list it with `--reports`:

```bat
START /WAIT sttar -c "C:\projects\city.sdconfig" -o "C:\out\city" -r SummaryReport --accepteula
```

To produce **only** a named export group (nothing else), use `--exportgroup`:

```bat
START /WAIT sttar -c "C:\projects\city.sdconfig" -o "C:\out\city" -e MyGroup --accepteula
```
