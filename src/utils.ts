import { Board } from "./type";

export function canGoDown(board: Board): boolean {
  return board.length > 1;
}

export function getRemainingBoardIfWentDown(board: Board): Board {
  const [_firstRow, ...restBoard] = board;
  return restBoard;
}

export function canGoRight(board: Board): boolean {
  return board[0].length > 1;
}

export function getRemainingBoardIfWentRight(board: Board): Board {
  return board.map(([_firstCell, ...restRow]) => [...restRow]);
}
