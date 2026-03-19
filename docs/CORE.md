# Core Layer

The `src/core/` folder contains the shared foundation of the CLI.

## Structure

```text
src/core/
├─ errors/
├─ types/
└─ utils/
```

## `errors/`

Use this folder for reusable error classes.

Current examples:

- `AppError`
- `ValidationError`
- `ServiceError`

These errors make failures easier to classify and easier to format in the CLI output layer.

## `types/`

Use this folder for common shared types.

Current examples:

- `AppEnvironment`
- `AppConfig`
- `KeyValue<T>`
- `Result<T>`
- `Failure`

Recommended rule: keep cross-cutting shared types here instead of scattering them across the project.

## `utils/`

Use this folder for generic helpers that are not tied to a specific service.

Current examples:

- array helpers
- digit helpers
- format helpers
- number helpers
- random helpers
- string helpers

## Example of reuse

The `text` and `math` services use `core` helpers instead of reimplementing logic inside the command layer.

That gives you:

- less duplication
- better tests
- cleaner command callbacks
