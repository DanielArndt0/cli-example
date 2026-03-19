import type { Command } from "commander";

import { getLastValue, getUniqueValues } from "../../services/index.js";

export function registerArrayCommands(program: Command): void {
  const array = program
    .command("array")
    .description("Run array-oriented examples using reusable helpers.")
    .addHelpText(
      "after",
      [
        "Examples:",
        "  cli-example array last red blue green",
        "  cli-example array unique red blue red green",
      ].join("\n"),
    );

  array
    .command("last <items...>")
    .description("Print the last item from the list.")
    .action((items: string[]) => {
      console.log(getLastValue(items));
    });

  array
    .command("unique <items...>")
    .description("Print unique items from the list.")
    .action((items: string[]) => {
      console.log(getUniqueValues(items).join("\n"));
    });
}
