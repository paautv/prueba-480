import { TelegraphNode } from "../core/TelegraphNode";
import { Signal } from "../core/Signal";
import { ProcessResult } from "../core/ProcessResult";
import { TransmissionError } from "../core/errors/TransmissionError";
import { Encoder } from "../encoding/Encoder";

export abstract class Receiver implements TelegraphNode {
  constructor(
    public readonly name: string,
    protected readonly encoder: Encoder,
    protected readonly minStrength: number = 0.1
  ) {}

  process(signal: Signal): ProcessResult {
    // Procesa la señal entrante si es mayor al mínimo
    if (signal.strength < this.minStrength) {
      return {
        success: false,
        error: new TransmissionError(
          "señal demasiado débil, corrupción probable",
          this.name
        )
      };
    }

    return { success: true, signal };
  }

  abstract output(signal: Signal, system: string): void;
}
