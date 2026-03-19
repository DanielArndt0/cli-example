import type { Command } from "commander";

import {
  extractDigits,
  maskText,
  padText,
  titleText,
} from "../../services/index.js";

export function registerTextCommands(program: Command): void {
  const text = program
    .command("text")
    .description("Run small text transformations using shared utilities.")
    .addHelpText(
      "after",
      [
        "Examples:",
        '  cli-example text digits "Order #AB-123"',
        '  cli-example text mask "1234567890" --visible 4',
        '  cli-example text title "hello world"',
        "  cli-example text pad 42 --size 5 --fill 0",
      ].join("\n"),
    );

  text
    .command("digits <value>")
    .description("Extract only the digits from a value.")
    .action((value: string) => {
      console.log(extractDigits(value));
    });

  text
    .command("mask <value>")
    .description("Mask a value while keeping the last visible characters.")
    .option(
      "--visible <count>",
      "Number of visible characters at the end.",
      "4",
    )
    .action((value: string, options: { visible: string }) => {
      console.log(maskText(value, Number(options.visible)));
    });

  text
    .command("title <value>")
    .description("Convert the value to title case.")
    .action((value: string) => {
      console.log(titleText(value));
    });

  text
    .command("pad <value>")
    .description("Pad a value to the left.")
    .option("--size <size>", "Final size of the output.", "5")
    .option("--fill <char>", "Single character used as filler.", "0")
    .action((value: string, options: { size: string; fill: string }) => {
      console.log(padText(value, Number(options.size), options.fill));
    });
}
