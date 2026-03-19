import { describe, expect, it } from "vitest";

import {
  extractDigits,
  getAppEnvironment,
  getAppInfo,
  getUniqueValues,
  hello,
  maskText,
  multiply,
  padText,
  sum,
  titleText,
} from "../src/services/index.js";

describe("services", () => {
  it("builds the app info string", () => {
    expect(
      getAppInfo({
        appName: "cli-example",
        version: "1.0.0",
        environment: "development",
      }),
    ).toBe("cli-example v1.0.0 [development]");
  });

  it("reads the app environment", () => {
    expect(
      getAppEnvironment({
        appName: "cli-example",
        version: "1.0.0",
        environment: "test",
      }),
    ).toBe("test");
  });

  it("greets using title case", () => {
    expect(hello("hello world")).toBe("Hello, Hello World!");
  });

  it("sums values", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it("multiplies values", () => {
    expect(multiply([2, 3, 4])).toBe(24);
  });

  it("extracts digits from text", () => {
    expect(extractDigits("Order #AB-123")).toBe("123");
  });

  it("masks text", () => {
    expect(maskText("1234567890", 4)).toBe("******7890");
  });

  it("pads text", () => {
    expect(padText("42", 5, "0")).toBe("00042");
  });

  it("formats title text", () => {
    expect(titleText("hello world")).toBe("Hello World");
  });

  it("returns unique values", () => {
    expect(getUniqueValues(["red", "blue", "red"])).toEqual(["red", "blue"]);
  });
});
