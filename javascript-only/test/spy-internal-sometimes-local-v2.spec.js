// @ts-check
import { beforeEach, expect, test, vi } from "vitest";
import * as InternalMock from "../src/internal.js";
import { play } from "../src/use-internal.js";

beforeEach(() => {
  vi.restoreAllMocks();
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
  // Arrange / Act / Assert
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
  // Arrange / Act / Assert
  expect(play()).toBe("from src");
});

test("spy internal (hybrid #1)", () => {
  // Arrange
  const compute = vi.spyOn(InternalMock, "compute");
  compute.mockReturnValue("from a subtle test");

  // Act / Assert
  expect(play()).toBe("from a subtle test");
  expect(compute).toHaveBeenCalledTimes(1);

  // Act / Assert
  vi.restoreAllMocks();
  expect(play()).toBe("from src");
  expect(compute).toHaveBeenCalledTimes(0);
});

test("spy internal (hybrid #2)", () => {
  // Arrange
  const compute = vi.spyOn(InternalMock, "compute");
  compute.mockReturnValue("from another subtle test");

  // Act / Assert
  expect(play()).toBe("from another subtle test");
  expect(compute).toHaveBeenCalledTimes(1);

  // Act / Assert
  compute.mockRestore();
  expect(play()).toBe("from src");
  expect(compute).toHaveBeenCalledTimes(0);
});
