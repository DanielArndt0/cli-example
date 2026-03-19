import type { Command } from "commander";

import { pickRandomValue } from "../../services/index.js";

export function registerRandomCommands(program: Command): void {
  const random = program
    .command("random")
    .description("Run examples that depend on random selection.")
    .addHelpText(
      "after",
      ["Examples:", "  cli-example random pick apple banana orange"].join("\n"),
    );

  random
    .command("pick <items...>")
    .description("Pick one random item from the provided list.")
    .action((items: string[]) => {
      console.log(pickRandomValue(items));
    });
}
