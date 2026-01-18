import { Signal } from "./Signal";
import { TelegraphNode } from "./TelegraphNode";
import { ProcessResult } from "./ProcessResult";

export class TelegraphSystem {
  constructor(private readonly nodes: TelegraphNode[]) {}

  transmit(initialSignal: Signal): ProcessResult {
    let currentSignal = initialSignal;

    // Itera sobre todos los nodos procesando la señal
    for (const node of this.nodes) {
      currentSignal.addTrace(node.name);

      const result = node.process(currentSignal);

      if (!result.success) {
        return result;
      }

      currentSignal = result.signal;
    }

    return { success: true, signal: currentSignal };
  }
}
