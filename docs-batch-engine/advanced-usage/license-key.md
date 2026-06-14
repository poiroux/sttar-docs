---
sidebar_position: 4
title: Using a licence key
---

# Using a licence key

On a machine that can see several Setics Sttar licences (for example a licence
server with multiple keys), select the exact one to use with `--licenseid` so
the engine does not pick the wrong key.

```bat
START /WAIT sttar -c project.sdconfig -o c:\out --accepteula --licenseid <license-id>
```

If the chosen key is present but **not yet active**, allow the engine to activate
it automatically:

```bat
START /WAIT sttar -c project.sdconfig -o c:\out --accepteula --licenseid <license-id> --activatelicense
```

Guidelines:

- The licence identifier must be **well-formed**; an invalid format stops the
  run with the *invalid arguments* return code.
- A licensing problem (no usable licence, selection or activation failure,
  server error) returns the *licence error* code `-3` — see
  **[Return codes](../cli/return-codes)**.
- To inspect what the licence servers expose, run the engine in query mode:

  ```bat
  sttar --qlicserv
  ```
