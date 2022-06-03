import { Memoize } from "./memoize";
import { Board } from "./type";
import { canGoDown, canGoRight, goDown, goRight } from "./utils";

const noop = () => {};

export function getMaxRice(board: Board, onCallHook: () => void = noop): number {
  const memoized = new Memoize();

  function getMaxRiceInner(board: Board, onCallHook: () => void): number {
    onCallHook();

    if (memoized.has(board)) {
      return memoized.get(board);
    }

    const topLeftValue = board[0][0];
    const maxIfRight = canGoRight(board) ? getMaxRiceInner(goRight(board), onCallHook) : 0;
    const maxIfDown = canGoDown(board) ? getMaxRiceInner(goDown(board), onCallHook) : 0;

    const value = topLeftValue + Math.max(maxIfRight, maxIfDown);

    memoized.set(board, value);

    return value;
  }

  return getMaxRiceInner(board, onCallHook);
}
