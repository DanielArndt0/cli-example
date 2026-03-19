# CLI Example

**CLI Example** is a reusable template for building command-line tools with **TypeScript**, **Commander**, **Tsup**, **Vitest**, and **GitHub Actions**.

The README stays intentionally short. The detailed maintenance docs live in the `docs/` folder.

## What this repository includes

- CLI entrypoint with separated command registrars
- `core` layer for errors, common types, and utilities
- `services` layer for reusable logic
- example commands with arguments, options, and help text
- build, lint, typecheck, and test scripts
- GitHub Actions for CI and publishing

## Example commands

```bash
cli-example --help
cli-example --version
cli-example hello --name world
cli-example math sum 10 20 30
cli-example math multiply 2 3 4
cli-example system info
cli-example text digits "Order #AB-123"
cli-example array unique red blue red green
cli-example random pick apple banana orange
```

## Local development

```bash
npm install
npm run build
npm run cli -- --help
npm run cli -- system info
npm run cli -- math average 5 10 15
```

## Documentation map

- [Project structure overview](docs/PROJECT_STRUCTURE.md)
- [Adding a command and service](docs/ADDING_A_COMMAND.md)
- [Core layer overview](docs/CORE.md)
- [DevOps overview](docs/DEVOPS_OVERVIEW.md)
- [DevOps customization](docs/DEVOPS_CUSTOMIZATION.md)
- [.npmrc overview](docs/NPMRC.md)
- [GitHub token overview](docs/GITHUB_TOKEN.md)
- [Publishing](docs/PUBLISHING.md)

## Credits

Repository template maintained by **Daniel Arndt**.
