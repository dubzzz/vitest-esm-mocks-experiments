// @ts-check
import { expect, test, vi } from "vitest";
import * as InternalMock from "../src/internal.js";
import { play } from "../src/use-internal.js";

test("spy internal", () => {
  // Arrange
  const compute = vi.spyOn(InternalMock, "compute");
  compute.mockReturnValue("from test");

  // Act / Assert
  expect(play()).toBe("from test");
  expect(compute).toHaveBeenCalledTimes(1);
});
