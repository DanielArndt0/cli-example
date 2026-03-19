export function padLeft(
  value: string | number,
  size: number,
  fill = "0",
): string {
  return String(value).padStart(size, fill);
}

export function maskSuffix(value: string, visibleDigits = 4): string {
  if (value.length <= visibleDigits) {
    return value;
  }

  const hidden = "*".repeat(value.length - visibleDigits);
  return `${hidden}${value.slice(-visibleDigits)}`;
}
