import {
  assertNonEmptyNumbers,
  averageNumbers,
  multiplyNumbers,
  sumNumbers,
} from "../core/utils/index.js";

export function sum(values: number[]): number {
  assertNonEmptyNumbers(values, "math sum");
  return sumNumbers(values);
}

export function multiply(values: number[]): number {
  assertNonEmptyNumbers(values, "math multiply");
  return multiplyNumbers(values);
}

export function average(values: number[]): number {
  return averageNumbers(values);
}
