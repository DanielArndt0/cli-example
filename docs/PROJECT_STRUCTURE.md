# Project Structure

This template keeps the CLI layer thin and pushes reusable logic into services and shared core helpers.

## Recommended structure

```text
src/
├─ cli/
│  ├─ commands/
│  ├─ shared/
│  └─ ui/
├─ core/
│  ├─ errors/
│  ├─ types/
│  └─ utils/
├─ services/
├─ cli.ts
└─ index.ts
```

## Folder responsibilities

### `src/cli/`

Contains command registration, help customization, output formatting, and argument parsing.

Keep this layer focused on:

- registering commands
- defining arguments and options
- formatting CLI output
- calling services

Avoid placing business rules here.

### `src/core/`

Contains foundations reused across the project.

Examples:

- custom error classes
- common shared types
- number parsing helpers
- formatting helpers
- array helpers
- random helpers

### `src/services/`

Contains reusable logic called by the CLI.

Examples in this template:

- greeting service
- app info service
- math service
- text service
- array service
- random service

## Request flow in this architecture

1. the user runs a command
2. the command registrar parses arguments and options
3. the command calls a service
4. the service uses `core` helpers when needed
5. the CLI prints the result or formats the error

## Why this scales well

- command files stay readable
- services stay testable
- shared helpers have a clear home
- new projects can reuse the same mental model
