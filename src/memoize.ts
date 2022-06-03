import { Board } from "./type";

export class Memoize {
  private cache = new Map<string, number>();

  public has(board: Board): boolean {
    const key = this.getKey(board);
    return this.cache.has(key);
  }

  public get(board: Board): number {
    const key = this.getKey(board);
    return this.cache.get(key);
  }

  public set(board: Board, value: number) {
    const key = this.getKey(board);
    this.cache.set(key, value);
  }

  private getKey(board: Board): string {
    return JSON.stringify(board);
  }
}
