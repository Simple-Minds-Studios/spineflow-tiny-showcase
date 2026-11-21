# Legacy build provenance

The active gallery uses HTML, CSS, browser JavaScript and Node’s built-in test/filesystem APIs. It has no third-party npm dependencies and needs no package installation.

The former root `package.json` declared React, Create React App and build tooling that this gallery does not execute. Its `pnpm-lock.yaml` describes an unused dependency tree. Those declarations and the lockfile were removed from the active branch after a dependency audit; their original bytes remain in Git history before this change and in the historical personal source trajectory.

Use the `08bcc2d9c03e4f812b2d301cffaba6df12e7cf1b` commit to inspect the pre-cleanup organization files. The older standalone exhibit remains at `client/public/spineflow-v5.6.html` in source and `legacy/spineflow-v5.6.html` in the deployment. Legacy TypeScript/Vite configuration files are historical references, not the active build.

Do not restore or install the legacy dependency tree as if it were a maintained application. A future framework-based edition needs its own dependency update and validation. No vulnerabilities were dismissed merely to hide alerts.

Validation: `npm test` and `npm run build`, using Node 22 or newer.
