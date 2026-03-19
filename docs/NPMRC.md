# Configuring `.npmrc`

If this CLI is published to **GitHub Packages**, the machine installing it needs an `.npmrc` configuration.

## Example `.npmrc`

```ini
@your-scope:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## What each line means

### Scope line

Routes all packages under `@your-scope` to GitHub Packages.

### Token line

Authenticates the request.

## Where to place the file

Common options:

- project root
- user home directory

## Safe practice

Commit only `.npmrc.example` and never a real token.

## Related doc

For the token itself, see [Github token overview](GITHUB_TOKEN.md).
