---
sidebar_position: 2
title: Parameters
---

# Parameters

Options are **case-insensitive**. Each has a long form (`--name`) and most a
short form (`-x`). The **project file** is passed as a positional argument (the
first non-option value), not behind a flag.

## Project file (positional)

```bat
sttar -c project.sdconfig -o c:\temp
```

The project file (`.sdconfig`) is **required** for a compute run and must exist;
if it is missing or the path is wrong, the run stops with an *invalid arguments*
return code.

## Run options

| Option | Argument | Description |
|---|---|---|
| `-o`, `--outputdir` | `<dir>` | **Output directory** for the reports and GIS layers. **Required** for a compute run. Existing files in the folder are overwritten. |
| `--inputdir` | `<dir>` | Root directory used to resolve relative input paths. |
| `--outputlang` | `<lang>` | Language for the generated output. |
| `-e`, `--exportgroup` | `<group>` | Set of reports to produce: `Default` (default), `None`, or the name of an export group defined in the project. |
| `-r`, `--reports` | `<r1> <r2> …` | One or more individual reports to produce **in addition** to the default export group. |
| `--coordfile` | `<file>` | Writes a file with all processed network endpoint coordinates. |
| `-l`, `--logfile` | `<file>` | Writes a dedicated log file for the session. The path must be valid. |

## Verbosity

`--quiet` and `--verbose` are mutually exclusive.

| Option | Description |
|---|---|
| `-q`, `--quiet` | Prints no message to standard output. |
| `-v`, `--verbose` | Prints detailed messages to standard output. |

## Licensing

| Option | Argument | Description |
|---|---|---|
| `--accepteula` | — | Accepts the licence terms explicitly (required for an unattended run). |
| `--licenseid` | `<id>` | Selects the licence key to use by its unique licence identifier. The identifier must be well-formed. |
| `--activatelicense` | — | Allows an inactive licence key to be activated automatically. |

## Help

| Option | Description |
|---|---|
| `-h`, `--help` | Displays the command-line usage instructions. |

:::note
A few additional cloud-only options exist in cloud builds of the engine; they
are not part of the standard on-premises Batch Engine and are omitted here.
:::
