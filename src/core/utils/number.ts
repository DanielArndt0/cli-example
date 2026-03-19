import { ValidationError } from "../errors/index.js";

export function parseNumber(value: string): number {
  const parsed = Number(value);

  if (Number.isNaN(parsed)) {
    throw new ValidationError(
      `The value \\"${value}\\" is not a valid number.`,
      { value },
    );
  }

  return parsed;
}

export function assertNonEmptyNumbers(
  values: number[],
  operationName: string,
): void {
  if (values.length === 0) {
    throw new ValidationError(
      `The command \\"${operationName}\\" expects at least one numeric value.`,
    );
  }
}

export function sumNumbers(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

export function multiplyNumbers(values: number[]): number {
  return values.reduce((total, value) => total * value, 1);
}

export function averageNumbers(values: number[]): number {
  assertNonEmptyNumbers(values, "math average");
  return sumNumbers(values) / values.length;
}
