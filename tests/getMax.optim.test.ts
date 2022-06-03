import { describe, it, expect } from "vitest";
import { getMaxRice } from "../src/getMax.optim";

describe("no optim", () => {
  it("case 1", () => {
    const board = [[1]];
    const maxRice = getMaxRice(board);
    expect(maxRice).toBe(1);
  });
  it("case 2 - two paths", () => {
    const board = [
      [0, 2],
      [1, 0],
    ];
    const maxRice = getMaxRice(board);
    expect(maxRice).toBe(2);
  });
  it("case 3 - non greedy", () => {
    const board = [
      [0, 0, 2],
      [1, 0, 1],
      [1, 0, 0],
    ];
    const maxRice = getMaxRice(board);
    expect(maxRice).toBe(3);
  });
});

describe("no optim - complexity", () => {
  it("case 1", () => {
    const board = [[1]];
    let counter = 0;
    getMaxRice(board, () => counter++);
    expect(counter).toBe(1);
  });
  it("case 2 - two paths", () => {
    const board = [
      [0, 2],
      [1, 0],
    ];
    let counter = 0;
    getMaxRice(board, () => counter++);
    expect(counter).toBe(5);
  });
  it("case 3 - non greedy", () => {
    const board = [
      [0, 0, 2],
      [1, 0, 1],
      [1, 0, 0],
    ];
    let counter = 0;
    getMaxRice(board, () => counter++);
    expect(counter).toBe(13);
  });
  it("case 4", () => {
    const board = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    let counter = 0;
    getMaxRice(board, () => counter++);
    expect(counter).toBe(25);
  });
  it("case 5", () => {
    const board = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    let counter = 0;
    getMaxRice(board, () => counter++);
    expect(counter).toBe(41);
  });
});
