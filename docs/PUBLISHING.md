# Publishing Guide

This template supports a simple package publishing flow.

## Preview publish

Preview publishing happens from `main` through GitHub Actions.

This is useful when you want to test installation before cutting a stable release.

## Stable publish

Stable publishing is based on Git tags.

Example:

```bash
git tag v1.0.0
git push origin v1.0.0
```

After the tag is pushed, the release workflow can:

- run validation again
- publish the package
- create release artifacts

## Manual local validation before release

```bash
npm install
npm run lint
npm run typecheck
npm run test:unit
npm run build
```

## Recommended publishing checklist

- version is correct
- package name is correct
- scope is correct
- `.npmrc` docs are aligned
- workflows point to the correct scope
- README install instructions are correct
