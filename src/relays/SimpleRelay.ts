import { Relay } from "./Relay";
import { Signal } from "../core/Signal";
import { ProcessResult } from "../core/ProcessResult";

export class SimpleRelay extends Relay {
  constructor() {
    super("Relé simple");
  }

  process(signal: Signal): ProcessResult {
    // Procesa la señal entrante amplificandola si es débil
    if (signal.strength < this.threshold) {
      // Amplia la señal
      signal.strength = Math.min(signal.strength + 0.5, 1.0);
    }

    return { success: true, signal };
  }
}
