import { ValidationError } from "../core/errors/index.js";
import { getLastItem, uniqueItems } from "../core/utils/index.js";

export function getLastValue(items: string[]): string {
  const last = getLastItem(items);

  if (last === undefined) {
    throw new ValidationError("The command requires at least one item.");
  }

  return last;
}

export function getUniqueValues(items: string[]): string[] {
  if (items.length === 0) {
    throw new ValidationError("The command requires at least one item.");
  }

  return uniqueItems(items);
}
