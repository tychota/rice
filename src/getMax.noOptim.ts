import { Board } from "./type";
import { canGoDown, canGoRight, getRemainingBoardIfWentDown, getRemainingBoardIfWentRight } from "./utils";

const noop = () => {};

export function getMaxRice(board: Board, onCallHook: () => void = noop): number {
  onCallHook();

  const topLeftValue = board[0][0];

  let maxIfRight: number = 0;
  if (canGoRight(board)) {
    const remainingBoard = getRemainingBoardIfWentRight(board);
    maxIfRight = getMaxRice(remainingBoard, onCallHook);
  }

  let maxIfDown: number = 0;
  if (canGoDown(board)) {
    const remainingBoard = getRemainingBoardIfWentDown(board);
    maxIfDown = getMaxRice(remainingBoard, onCallHook);
  }

  const value = topLeftValue + Math.max(maxIfRight, maxIfDown);

  return value;
}
