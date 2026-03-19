# DevOps Overview

This template includes a simple but useful DevOps flow based on GitHub Actions.

## Workflows included

### 1. CI validation

File: `.github/workflows/ci.yml`

Runs on:

- push to `main`
- pull requests

Pipeline steps:

1. `npm ci`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run test:unit`
5. `npm run build`

This is the minimum quality gate for the project.

### 2. Preview package publish

File: `.github/workflows/publish-preview.yml`

Runs on:

- push to `main`

Purpose:

- publish a preview package for internal testing
- validate real installation before a stable release
- generate versions like `1.0.0-dev.15`

### 3. Stable release publish

File: `.github/workflows/release.yml`

Runs on:

- Git tags matching `v*`

Example:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Purpose:

- sync version from tag
- build and test the package
- publish the stable version
- generate release assets

## Why this flow is useful for CLI projects

CLI packages are often installed directly by other developers or internal teams.

Because of that, it is valuable to validate:

- the build
- the tests
- the packaging process
- the installation path
- the release path

## Related docs

- [DevOps customization overview](DEVOPS_CUSTOMIZATION.md)
- [.npmrc overview](NPMRC.md)
- [Github token overview](GITHUB_TOKEN.md)
- [Publishing overview](PUBLISHING.md)
