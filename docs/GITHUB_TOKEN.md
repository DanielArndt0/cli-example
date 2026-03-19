# GitHub Token for `.npmrc`

If you install or publish packages through **GitHub Packages**, authentication is usually required.

## Where the token is used

A local machine may use the token in `.npmrc`:

```ini
@your-scope:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## Where to create the token

In GitHub, go to:

1. Settings
2. Developer settings
3. Personal access tokens
4. Create a token appropriate for your use case

## Common use cases

### Installing packages locally

You usually need a token that can read packages.

### Publishing from your machine

You usually need package write permission as well.

### Publishing from GitHub Actions

The workflow can often use `GITHUB_TOKEN` instead of a manually copied token.

## Important notes

- never commit a real token to the repository
- keep only `.npmrc.example` versioned
- store the real `.npmrc` locally or as a secret when appropriate
- review package visibility and repository permissions in GitHub
