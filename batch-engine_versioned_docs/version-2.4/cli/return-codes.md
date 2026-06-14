---
sidebar_position: 3
title: Return codes
---

# Return codes

The engine sets the process **exit code** so a calling script can branch on the
outcome. Use `START /WAIT` (or your shell's equivalent) so the code is available
to the caller.

| Code | Name | Meaning |
|---|---|---|
| `0` | OK | The run completed successfully. |
| `1` | Command sent to main instance | The command was forwarded to an already-running instance (not a batch-compute outcome). |
| `-1` | NOK | The run failed (general / unexpected error). |
| `-2` | Invalid arguments | The command line is invalid — e.g. no project file, project file not found, or no output directory. |
| `-3` | Licence error | No usable licence, licence selection/activation failed, or a licence-server error. |
| `-5` | EULA not accepted | The licence terms were not accepted (pass `--accepteula` for unattended runs). |

## Checking the code in a batch script

```bat
START /WAIT sttar -c project.sdconfig -o c:\temp --accepteula
IF %ERRORLEVEL% EQU 0 (
  echo Success
) ELSE (
  echo Failed with code %ERRORLEVEL%
)
```

:::tip
A non-zero, non-`1` code always indicates the run did **not** produce a complete
result. Treat `-2`, `-3` and `-5` as configuration problems (arguments,
licence, EULA) to fix before re-running; treat `-1` as a run failure to
investigate in the log file (`--logfile`).
:::
