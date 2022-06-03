import { Board } from "./type";
import { canGoDown, canGoRight, goDown, goRight } from "./utils";

const noop = () => {};

export function getMaxRice(board: Board, onCallHook: () => void = noop): number {
  onCallHook();

  const topLeftValue = board[0][0];
  const maxIfRight = canGoRight(board) ? getMaxRice(goRight(board), onCallHook) : 0;
  const maxIfDown = canGoDown(board) ? getMaxRice(goDown(board), onCallHook) : 0;

  const value = topLeftValue + Math.max(maxIfRight, maxIfDown);

  return value;
}
