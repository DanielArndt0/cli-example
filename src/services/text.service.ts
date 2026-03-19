import { ValidationError } from "../core/errors/index.js";
import {
  maskSuffix,
  onlyDigits,
  padLeft,
  toTitleCase,
} from "../core/utils/index.js";

export function extractDigits(value: string): string {
  const digits = onlyDigits(value);

  if (!digits) {
    throw new ValidationError("No digits were found in the provided value.", {
      value,
    });
  }

  return digits;
}

export function maskText(value: string, visibleDigits = 4): string {
  if (visibleDigits < 0) {
    throw new ValidationError(
      'The option "--visible" must be zero or greater.',
      {
        visibleDigits,
      },
    );
  }

  return maskSuffix(value, visibleDigits);
}

export function titleText(value: string): string {
  return toTitleCase(value);
}

export function padText(value: string, size: number, fill = "0"): string {
  if (size < value.length) {
    throw new ValidationError(
      'The option "--size" must be greater than or equal to the input length.',
      { size, valueLength: value.length },
    );
  }

  if (fill.length !== 1) {
    throw new ValidationError(
      'The option "--fill" must contain exactly one character.',
      {
        fill,
      },
    );
  }

  return padLeft(value, size, fill);
}
