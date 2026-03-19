import type { Command } from "commander";

import { hello } from "../../services/index.js";

export function registerHelloCommands(program: Command): void {
  program
    .command("hello")
    .description("Print a friendly greeting.")
    .option("-n, --name <name>", "Name to greet.", "world")
    .addHelpText(
      "after",
      [
        "Examples:",
        "  cli-example hello",
        "  cli-example hello --name world",
        '  cli-example hello --name "open source"',
      ].join("\n"),
    )
    .action((options: { name: string }) => {
      console.log(hello(options.name));
    });
}
