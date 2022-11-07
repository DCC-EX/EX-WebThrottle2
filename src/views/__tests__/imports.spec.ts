import { describe, test, expect } from "vitest";

describe("import vue components", () => {
  test("normal imports as expected", async () => {
    const cmp = await import("../Throttle.vue");
    expect(cmp).toBeDefined();
  });
});
