---
sidebar_position: 1
title: Command-Line Interface
---

# Command-Line Interface

The Batch Engine is the Setics Sttar executable run with command-line options
instead of the graphical interface. The executable is **`STTAR.exe`** (referred
to as `sttar` in the examples below).

## Usage

```text
sttar -c <project-file> -o <output-dir> [options]
```

To compute a network in batch mode you need at least:

- a **project file** — the `.sdconfig` project to compute, given as the first
  positional argument;
- an **output directory** — where the reports and GIS layers are written
  (`-o` / `--outputdir`).

### Minimal example

```bat
sttar -c project.sdconfig -o c:\temp
```

### Wait for completion in a script

Use `START /WAIT` so the calling script blocks until the run finishes and the
return code is available:

```bat
START /WAIT sttar -c project.sdconfig -o c:\temp
```

:::info[Unattended runs]
For a fully unattended run, accept the licence terms with `--accepteula` and, if
the machine hosts several licences, select one with `--licenseid` (optionally
`--activatelicense`). Without `--accepteula` an unaccepted EULA stops the run
with the *EULA not accepted* return code.
:::

## Application modes

The engine has several mutually-exclusive **modes**. Batch processing uses
`--compute`; the others are listed for completeness.

| Mode | Option | Description |
|---|---|---|
| **Compute** | `-c`, `--compute` | Computes the project in command-line mode (Batch Engine). |
| GUI | `-g`, `--gui` | Starts the graphical interface with the preferred edition. |
| GUI (Advanced Designer) | `--startadvanceddesigner` | Starts the GUI in the Advanced Designer edition. |
| GUI (Planner) | `--startplanner` | Starts the GUI in the Planner edition. |
| Get setting | `--getparam` | Reads the value of an application setting. |
| Set setting | `--setparam` | Writes the value of an application setting. |
| Query licence servers | `--qlicserv` | Queries the licence servers for information. |

Continue with **[Parameters](./parameters)** for the full option reference and
**[Return codes](./return-codes)** for scripting.
