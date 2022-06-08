import { describe, it, expect } from "vitest";
import { canGoDown, canGoRight, getRemainingBoardIfWentDown, getRemainingBoardIfWentRight } from "../src/utils";

describe("utils - can", () => {
  it("canGoDown - OK", () => {
    const board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const can = canGoDown(board);
    expect(can).toBe(true);
  });

  it("canGoDown - KO", () => {
    const board = [[1, 2, 3]];
    const can = canGoDown(board);
    expect(can).toBe(false);
  });

  it("canGoRight - OK", () => {
    const board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const can = canGoRight(board);
    expect(can).toBe(true);
  });

  it("canGoRight - KO", () => {
    const board = [[1], [4], [7]];
    const can = canGoRight(board);
    expect(can).toBe(false);
  });
});

describe("utils - go", () => {
  it("goDown - OK", () => {
    const board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const newBoard = getRemainingBoardIfWentDown(board);
    expect(newBoard).toEqual([
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });

  it("goRight - OK", () => {
    const board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const newBoard = getRemainingBoardIfWentRight(board);
    expect(newBoard).toEqual([
      [2, 3],
      [5, 6],
      [8, 9],
    ]);
  });
});
