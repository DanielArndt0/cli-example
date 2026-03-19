# DevOps Customization

When you copy this template into a real repository, some DevOps values must be updated.

## Files you will usually change

### `.github/workflows/publish-preview.yml`

Review:

- Node version
- package scope in `setup-node`
- publish strategy
- tag naming conventions

### `.github/workflows/release.yml`

Review:

- package scope in `setup-node`
- release asset names
- whether you want GitHub Packages, npmjs or another registry

### `package.json`

Review:

- `name`
- `publishConfig.registry`
- `bin`
- description and metadata

## Important values to replace

### Scope

If you publish to GitHub Packages, the scope usually matches your GitHub user or organization.

Example:

```json
"name": "@your-user/cli-example"
```

And in workflows:

```yml
scope: "@your-user"
```

### Registry

For GitHub Packages:

```json
"publishConfig": {
  "registry": "https://npm.pkg.github.com"
}
```

### Release trigger

The stable workflow currently reacts to tags like:

```text
v1.0.0
```

If your team uses another convention, update the workflow trigger.

## What can break if you forget customization

- preview publish may fail
- stable publish may go to the wrong registry
- install commands in the docs may be wrong
- binary name may not match your final CLI
- scope in `.npmrc` may not match the real package
- the workflow may keep pointing to an example package name
