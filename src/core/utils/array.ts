export function getLastItem<T>(values: T[]): T | undefined {
  return values.at(-1);
}

export function compactArray<T>(
  values: Array<T | null | undefined | false | "">,
): T[] {
  return values.filter(Boolean) as T[];
}

export function uniqueItems<T>(values: T[]): T[] {
  return [...new Set(values)];
}
