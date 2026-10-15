# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Release notes

Source of truth: `Sttar Release Notes.html` (outside the repo, path in `scripts/gen-changelog.mjs`, override with `RELEASE_NOTES_HTML`). Its "Internal notes" section is never published.

After a STTAR build:

1. `npm run scan:builds -- --version 2.4.6` lists the builds not yet documented, with one draft entry per commit (`--check` exits 2 when the notes are behind). Builds are cut by the `Build X.Y.Z.NNNN` marker commits: a build contains the commits reachable from its marker and not from the previous one.
2. Write the customer-facing entries in the source HTML (dated backup first), and add the build to the shipped-build map (`TECH_ONLY_BUILDS` when it has no customer-facing change).
3. `npm run publish:notes` regenerates the pages, builds, commits the generated files, pushes and deploys. It does nothing when the generated pages are unchanged.
