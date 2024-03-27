// @ts-check
import { expect, test, vi } from "vitest";
import PathMock from "path";
import { play } from "../src/use-package.js";

test("spy package", () => {
  // Arrange
  const extname = vi.spyOn(PathMock, "extname");
  extname.mockReturnValue(".yop");

  // Act / Assert
  expect(play()).toBe(".yop");
  expect(extname).toHaveBeenCalledTimes(1);
});
