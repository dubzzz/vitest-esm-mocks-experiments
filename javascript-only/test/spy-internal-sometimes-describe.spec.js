// @ts-check
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import * as InternalMock from "../src/internal.js";
import { play } from "../src/use-internal.js";

beforeEach(() => {
  vi.resetModules();
});

describe("describe #1", () => {
  it("spy internal (yes #1)", () => {
    // Arrange
    const compute = vi.spyOn(InternalMock, "compute");
    compute.mockReturnValue("from test");

    // Act / Assert
    expect(play()).toBe("from test");
    expect(compute).toHaveBeenCalledTimes(1);
  });

  it("spy internal (yes #2)", () => {
    // Arrange
    const compute = vi.spyOn(InternalMock, "compute");
    compute.mockReturnValue("from another test");

    // Act / Assert
    expect(play()).toBe("from another test");
    expect(compute).toHaveBeenCalledTimes(1);
  });
});

describe("describe #2", () => {
  beforeAll(async () => {
    const compute = vi.spyOn(InternalMock, "compute");
    compute.mockImplementation(
      (await vi.importActual("../src/internal.js")).compute
    );
  });

  it("spy internal (no #1)", async () => {
    // Arrange / Act / Assert
    expect(play()).toBe("from src");
  });

  it("spy internal (no #2)", async () => {
    // Arrange / Act / Assert
    expect(play()).toBe("from src");
  });
});

describe("describe #3", () => {
  it("spy internal (yes #1)", () => {
    // Arrange
    const compute = vi.spyOn(InternalMock, "compute");
    compute.mockReturnValue("from test");

    // Act / Assert
    expect(play()).toBe("from test");
    expect(compute).toHaveBeenCalledTimes(1);
  });

  it("spy internal (yes #2)", () => {
    // Arrange
    const compute = vi.spyOn(InternalMock, "compute");
    compute.mockReturnValue("from another test");

    // Act / Assert
    expect(play()).toBe("from another test");
    expect(compute).toHaveBeenCalledTimes(1);
  });
});

describe("describe #4", () => {
  beforeAll(async () => {
    const compute = vi.spyOn(InternalMock, "compute");
    compute.mockImplementation(
      (await vi.importActual("../src/internal.js")).compute
    );
  });

  it("spy internal (no #1)", async () => {
    // Arrange / Act / Assert
    expect(play()).toBe("from src");
  });

  it("spy internal (no #2)", async () => {
    // Arrange / Act / Assert
    expect(play()).toBe("from src");
  });
});
