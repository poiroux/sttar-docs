---
sidebar_position: 3
title: Batch script
---

# Batch script

Compute every project in a folder, give each its own output directory and log,
and stop on the first failure.

```bat
@echo off
setlocal
set STTAR="C:\Program Files\Setics\Setics Sttar\STTAR.exe"
set SRC=C:\projects
set OUT=C:\out

for %%P in ("%SRC%\*.sdconfig") do (
  echo Computing %%~nxP ...
  START /WAIT %STTAR% -c "%%P" -o "%OUT%\%%~nP" --accepteula --logfile "%OUT%\%%~nP\run.log"
  if errorlevel 1 (
    echo FAILED %%~nxP with code %errorlevel%
    goto :error
  )
)

echo All projects computed.
exit /b 0

:error
echo Batch stopped on error.
exit /b %errorlevel%
```

Notes:

- `%%~nP` is the project name without extension — used as the per-project output
  folder.
- `if errorlevel 1` is true for any code **≥ 1**; for finer handling, test
  `%errorlevel%` against the specific [return codes](../cli/return-codes).
- Remove `goto :error` if you prefer to continue past failed projects and review
  the logs afterwards.
