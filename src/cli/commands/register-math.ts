import type { Command } from "commander";

import { parseNumber } from "../../core/utils/index.js";
import { average, multiply, sum } from "../../services/index.js";

export function registerMathCommands(program: Command): void {
  const math = program
    .command("math")
    .description("Run small math examples backed by reusable services.")
    .addHelpText(
      "after",
      [
        "Examples:",
        "  cli-example math sum 10 20 30",
        "  cli-example math multiply 2 3 4",
        "  cli-example math average 5 10 15",
      ].join("\n"),
    );

  math
    .command("sum <numbers...>")
    .description("Sum a list of numeric values.")
    .action((numbers: string[]) => {
      const parsed = numbers.map(parseNumber);
      console.log(sum(parsed));
    });

  math
    .command("multiply <numbers...>")
    .description("Multiply a list of numeric values.")
    .action((numbers: string[]) => {
      const parsed = numbers.map(parseNumber);
      console.log(multiply(parsed));
    });

  math
    .command("average <numbers...>")
    .description("Calculate the average of numeric values.")
    .action((numbers: string[]) => {
      const parsed = numbers.map(parseNumber);
      console.log(average(parsed));
    });
}
