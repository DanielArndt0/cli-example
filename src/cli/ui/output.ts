import type { Command, Option } from "commander";

import { AppError } from "../../core/errors/index.js";
import { theme } from "./theme.js";

export function configureProgramUi(program: Command): void {
  program.configureOutput({
    writeErr: (str) => process.stderr.write(str),
    outputError: (str, write) => {
      write(theme.red(str));
    },
  });

  program.configureHelp({
    subcommandTerm: (cmd) => theme.command(cmd.name()),
    optionTerm: (option: Option) => theme.flag(option.flags),
  });
}

export function handleCliError(error: unknown): never {
  if (error instanceof AppError) {
    console.error(`${theme.errorLabel(error.code)} ${error.message}`);

    if (error.details !== undefined && process.env.DEBUG_CLI === "true") {
      console.error(theme.muted(`details: ${JSON.stringify(error.details)}`));
    }

    process.exit(1);
  }

  const message = error instanceof Error ? error.message : String(error);
  console.error(`${theme.errorLabel("UNEXPECTED_ERROR")} ${message}`);
  process.exit(1);
}
