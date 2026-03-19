import { describe, expect, it } from "vitest";

import {
  averageNumbers,
  getLastItem,
  maskSuffix,
  onlyDigits,
  uniqueItems,
} from "../src/core/utils/index.js";

describe("core utils", () => {
  it("keeps only digits", () => {
    expect(onlyDigits("A1-B2-C3")).toBe("123");
  });

  it("masks the suffix correctly", () => {
    expect(maskSuffix("1234567890", 4)).toBe("******7890");
  });

  it("returns the last item", () => {
    expect(getLastItem(["a", "b", "c"])).toBe("c");
  });

  it("returns unique items", () => {
    expect(uniqueItems(["red", "blue", "red"])).toEqual(["red", "blue"]);
  });

  it("calculates the average", () => {
    expect(averageNumbers([10, 20, 30])).toBe(20);
  });
});
