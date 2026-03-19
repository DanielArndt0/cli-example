import { ServiceError, ValidationError } from "../core/errors/index.js";
import { randomItem } from "../core/utils/index.js";

export function pickRandomValue(items: string[]): string {
  if (items.length === 0) {
    throw new ValidationError("The command requires at least one item.");
  }

  const picked = randomItem(items);

  if (!picked) {
    throw new ServiceError("A random item could not be selected.");
  }

  return picked;
}
