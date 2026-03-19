# Adding a Command and Service

This template separates **CLI registration** from **service logic**.

The usual flow is:

1. create or update a service in `src/services/`
2. register a command in `src/cli/commands/`
3. connect the command to the service
4. add tests
5. update docs if the command is user-facing

## Standard flow

### 1. Create the service

Example file:

```text
src/services/greet.service.ts
```

Example implementation:

```ts
import { toTitleCase } from "../core/utils/index.js";

export function greet(name: string): string {
  return `Hello, ${toTitleCase(name)}!`;
}
```

### 2. Export the service

In `src/services/index.ts`:

```ts
export * from "./greet.service.js";
```

### 3. Add a command register

Create a file like `src/cli/commands/register-greet.ts`.

A command register is responsible for wiring the CLI to the service.

It should explain and define:

#### Arguments

Arguments are required or positional values provided by the user.

Example:

```ts
.command("sum <numbers...>")
```

#### Options

Options are named flags such as `--name`, `--size`, or `--visible`.

Example:

```ts
.option("-n, --name <name>", "Name to greet.", "world")
```

#### Help Text

Help text gives discoverable examples and usage hints when the user runs `--help`.

Example:

```ts
.addHelpText(
  "after",
  [
    "Examples:",
    "  cli-example hello",
    "  cli-example hello --name world"
  ].join("\n")
)
```

#### Output

The command register should keep output simple and explicit.

Example:

```ts
.action((options: { name: string }) => {
  console.log(greet(options.name));
})
```

#### Calling Service

The command should call a service instead of placing business logic inside the callback.

Example:

```ts
import { greet } from "../../services/index.js";
```

## Full example

```ts
import type { Command } from "commander";

import { greet } from "../../services/index.js";

export function registerGreetCommands(program: Command): void {
  program
    .command("greet")
    .description("Print a friendly greeting.")
    .option("-n, --name <name>", "Name to greet.", "world")
    .addHelpText(
      "after",
      [
        "Examples:",
        "  cli-example greet",
        "  cli-example greet --name world",
      ].join("\n"),
    )
    .action((options: { name: string }) => {
      console.log(greet(options.name));
    });
}
```

### 4. Register the command in the root program

Import the register inside `src/cli/create-program.ts` and call it.

```ts
import { registerGreetCommands } from "./commands/register-greet.js";

registerGreetCommands(program);
```

### 5. Add tests

Create focused tests under `tests/`.

### 6. Update docs

If the command changes onboarding, installation, release behavior, or user-facing usage, update the relevant doc file.

## Good practices

- keep business logic out of Commander callbacks
- prefer services for reusable logic
- reuse `core/utils` before creating duplicate helpers
- raise explicit errors from `core/errors`
- always give meaningful descriptions to commands
- add help examples for commands users are likely to run directly
