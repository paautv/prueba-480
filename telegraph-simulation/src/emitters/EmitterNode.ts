import { TelegraphNode } from "../core/TelegraphNode";
import { Emitter } from "./Emitter";
import { Signal } from "../core/Signal";
import { ProcessResult } from "../core/ProcessResult";

export class EmitterNode implements TelegraphNode {
  constructor(private emitter: Emitter) {}

  get name(): string {
    return this.emitter["name"];
  }

  process(signal: Signal): ProcessResult {
    return { success: true, signal };
  }
}
