import { Command } from "commander";

import { registerArrayCommands } from "./commands/register-array.js";
import { registerHelloCommands } from "./commands/register-hello.js";
import { registerMathCommands } from "./commands/register-math.js";
import { registerRandomCommands } from "./commands/register-random.js";
import { registerSystemCommands } from "./commands/register-system.js";
import { registerTextCommands } from "./commands/register-text.js";
import { APP_CONFIG } from "./shared/app-config.js";
import { rootFooter } from "./shared/help.js";
import { configureProgramUi } from "./ui/output.js";

export function buildProgram(): Command {
  const program = new Command();

  configureProgramUi(program);

  program
    .name(APP_CONFIG.appName)
    .description(
      "Reusable example CLI template built with TypeScript and Commander.",
    )
    .version(APP_CONFIG.version)
    .showHelpAfterError('(use "--help" for detailed usage)')
    .showSuggestionAfterError(true)
    .addHelpText("after", rootFooter());

  registerHelloCommands(program);
  registerMathCommands(program);
  registerSystemCommands(program);
  registerTextCommands(program);
  registerArrayCommands(program);
  registerRandomCommands(program);

  return program;
}
