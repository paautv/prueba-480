import { TelegraphNode } from "../core/TelegraphNode";
import { Signal } from "../core/Signal";
import { ProcessResult } from "../core/ProcessResult";

export abstract class Relay implements TelegraphNode {
  constructor(
    public readonly name: string,
    protected readonly threshold: number = 0.2
  ) {}

  abstract process(signal: Signal): ProcessResult;
}
