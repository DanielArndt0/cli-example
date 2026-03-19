import { theme } from "../ui/theme.js";

export function rootFooter(): string {
  return `
${theme.section("Quick start")}
  ${theme.command("cli-example --help")}
  ${theme.command("cli-example --version")}
  ${theme.command("cli-example hello --name world")}
  ${theme.command("cli-example math sum 10 20 30")}
  ${theme.command("cli-example system info")}
  ${theme.command('cli-example text digits "Order #AB-123"')}

${theme.section("Architecture")}
  ${theme.muted("Keep command registration in src/cli/commands.")}
  ${theme.muted("Keep reusable logic in src/services.")}
  ${theme.muted("Keep shared utilities, types and errors in src/core.")}
`;
}
