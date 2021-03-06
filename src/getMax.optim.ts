import { Memoize } from "./memoize";
import { Board } from "./type";
import { canGoDown, canGoRight, getRemainingBoardIfWentDown, getRemainingBoardIfWentRight } from "./utils";

const noop = () => {};

export function getMaxRice(board: Board, onCallHook: () => void = noop): number {
  const memoized = new Memoize();

  function getMaxRiceInner(board: Board, onCallHook: () => void): number {
    onCallHook();

    if (memoized.has(board)) {
      return memoized.get(board);
    }

    const topLeftValue = board[0][0];

    let maxIfRight: number = 0;
    if (canGoRight(board)) {
      const remainingBoard = getRemainingBoardIfWentRight(board);
      maxIfRight = getMaxRiceInner(remainingBoard, onCallHook);
    }

    let maxIfDown: number = 0;
    if (canGoDown(board)) {
      const remainingBoard = getRemainingBoardIfWentDown(board);
      maxIfDown = getMaxRiceInner(remainingBoard, onCallHook);
    }

    const value = topLeftValue + Math.max(maxIfRight, maxIfDown);

    memoized.set(board, value);

    return value;
  }

  return getMaxRiceInner(board, onCallHook);
}
