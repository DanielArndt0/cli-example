export function onlyDigits(value: string): string {
  return value.replace(/\D+/g, "");
}

export function hasOnlyDigits(value: string): boolean {
  return /^\d+$/.test(value);
}
