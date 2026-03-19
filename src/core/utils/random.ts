export function randomInt(min: number, max: number): number {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);

  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

export function randomItem<T>(values: T[]): T | undefined {
  if (values.length === 0) {
    return undefined;
  }

  return values[randomInt(0, values.length - 1)];
}
