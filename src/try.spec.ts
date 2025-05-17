import { describe, it } from "vitest";

describe.concurrent("try", () => {
  it("should not fail", ({ expect }) => {
    expect(true).toBeTruthy();
  });

  it.fails("should fail", ({ expect }) => {
    expect(true).toBeFalsy();
  });
});
