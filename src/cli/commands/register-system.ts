import type { Command } from "commander";

import { APP_CONFIG } from "../shared/app-config.js";
import {
  getAppEnvironment,
  getAppInfo,
  getAppName,
  getAppVersion,
} from "../../services/index.js";

export function registerSystemCommands(program: Command): void {
  const system = program
    .command("system")
    .description("Read application metadata and environment information.")
    .addHelpText(
      "after",
      [
        "Examples:",
        "  cli-example system info",
        "  cli-example system name",
        "  cli-example system version",
        "  cli-example system env",
      ].join("\n"),
    );

  system
    .command("info")
    .description("Print the application name, version and environment.")
    .action(() => {
      console.log(getAppInfo(APP_CONFIG));
    });

  system
    .command("name")
    .description("Print the application name.")
    .action(() => {
      console.log(getAppName(APP_CONFIG));
    });

  system
    .command("version")
    .description("Print the application version.")
    .action(() => {
      console.log(getAppVersion(APP_CONFIG));
    });

  system
    .command("env")
    .description("Print the current application environment.")
    .action(() => {
      console.log(getAppEnvironment(APP_CONFIG));
    });
}
