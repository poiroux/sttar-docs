---
sidebar_position: 12
title: Naming Rules
---

# Naming Rules

## Named objects

Every object created in a network receives a unique id assigned by Setics Sttar:

- Infrastructure sections (e.g. `L000001`),
- Nodes (e.g. `R001.01`),
- Endpoints (e.g. `S000001`),
- Cables (e.g. `C000001`),
- Splice closures (e.g. `B000001`).

The **Naming Rules** screen (**Project ▸ Naming Rules**) lets you specify a
custom format for these ids. Custom formats, when defined, are saved in the
project configuration file.

## Naming syntax

The naming format accepts any Unicode string — alphanumeric characters,
punctuation, hyphens, parentheses, brackets, quotes, and so on. It also accepts
**variables** that build identifiers from each element's contextual
information. A variable is written as:

```
{variable|option1=value1;option2=value2;…}
```

For example, the format `L99{uin|format=####} ({name})` returns an identifier
like `L990156 (MAIN STREET)` for an infrastructure section.

:::info Escaping braces
The symbols `{` and `}` and the text between them are interpreted as a variable
definition; an unsupported variable name is ignored. To include a literal `{` or
`}` in an identifier, double it: `{{` and `}}`. Setics Sttar always guarantees
unique identifiers — if a custom format would not, a numeric suffix is added.
:::

## Supported variables

### `uin` — unique numeric identifier

A value that is unique for each element. Options:

- **`format`** — a run of `#` characters; the count is the minimum number of
  digits. `{uin|format=###}` → `001`, `002`, …
- **`min`** — smallest possible value (default `1`). `{uin|min=500}` → `500`,
  `501`, …

### `din` — deduplication numeric identifier

Computed automatically to avoid duplicating an existing name/label — useful
combined with `name` (not guaranteed unique) when `uid` is not used. Options:

- **`min`** — smallest possible value (default `1`). `{din|min=500}` → `500`,
  `501`, …
- **`prefix`** — characters prepended to the number (default empty).
  `{din|prefix=_#}` → `_#1`, `_#2`, …
- **`optional`** — when set, the deduplication identifier is used only if needed
  to avoid a duplicate. `{din|optional}`.

### `name`

The element's name, taken from the input GIS layer attribute mapped to the
**Name** setting (configurable in *Import infrastructure data*).

### `external-id`

The element's external identifier, taken from the input GIS layer attribute
mapped to the unique **Identifier** setting.

## Rules specific to naming network nodes

Nodes form a parent-child tree (e.g. an FCP is logically connected to a CO — see
the *Data Model* appendix). Node identifiers reflect this by **concatenating the
parent node's identifier with the node's own identifier**.

With the default naming, a CO is `N001` and a child FCP is `N001.02` (`N001` =
parent CO, `.02` = the FCP within the CO's service area).

To reuse identifiers across projects/iterations, Setics Sttar ignores possible
repetitions. For example, if Project 1 created CO `N001` and FCP `N001.02`, then
in Project 2 — re-importing those layers with the previous identifiers as the
external id and using the format `{external-id}` for both levels — Setics Sttar
reuses the imposed COs and FCPs and keeps their identifiers (it will **not**
build `N001N001.02` for the FCP), while still honoring the node hierarchy in the
naming.
