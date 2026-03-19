import { toTitleCase } from "../core/utils/index.js";

export function hello(name: string): string {
  return `Hello, ${toTitleCase(name)}!`;
}
