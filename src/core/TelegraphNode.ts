import { Signal } from "./Signal";
import { ProcessResult } from "./ProcessResult";

export interface TelegraphNode {
  readonly name: string;
  process(signal: Signal): ProcessResult;
}
