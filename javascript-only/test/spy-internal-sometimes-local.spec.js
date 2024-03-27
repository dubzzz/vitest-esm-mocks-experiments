// @ts-check
import { beforeEach, expect, test, vi } from "vitest";
import * as InternalMock from "../src/internal.js";
import { play } from "../src/use-internal.js";

beforeEach(() => {
  vi.resetModules();
});

test("spy internal (yes #1)", () => {
  // Arrange
  const compute = vi.spyOn(InternalMock, "compute");
  compute.mockReturnValue("from test");

  // Act / Assert
  expect(play()).toBe("from test");
  expect(compute).toHaveBeenCalledTimes(1);
});

test("spy internal (no #1)", async () => {
  // Arrange
  const compute = vi.spyOn(InternalMock, "compute");
  compute.mockImplementation(
    (await vi.importActual("../src/internal.js")).compute
  );

  // Act / Assert
  expect(play()).toBe("from src");
});

test("spy internal (yes #2)", () => {
  // Arrange
  const compute = vi.spyOn(InternalMock, "compute");
  compute.mockReturnValue("from another test");

  // Act / Assert
  expect(play()).toBe("from another test");
  expect(compute).toHaveBeenCalledTimes(1);
});

test("spy internal (no #2)", async () => {
  // Arrange
  const compute = vi.spyOn(InternalMock, "compute");
  compute.mockImplementation(
    (await vi.importActual("../src/internal.js")).compute
  );

  // Act / Assert
  expect(play()).toBe("from src");
});
