const colorsEnabled =
  process.stdout.isTTY &&
  !process.argv.includes("--no-color") &&
  process.env.NO_COLOR === undefined;

function paint(code: number, value: string): string {
  if (!colorsEnabled) {
    return value;
  }

  return `\u001B[${code}m${value}\u001B[0m`;
}

export const theme = {
  muted: (value: string) => paint(90, value),
  red: (value: string) => paint(31, value),
  command: (value: string) => paint(36, value),
  flag: (value: string) => paint(33, value),
  section: (value: string) => paint(36, paint(1, value)),
  errorLabel: (value: string) => paint(31, paint(1, value)),
};
