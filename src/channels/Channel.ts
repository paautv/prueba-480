import { TelegraphNode } from "../core/TelegraphNode";
import { Signal } from "../core/Signal";
import { ProcessResult } from "../core/ProcessResult";
import { TransmissionError } from "../core/errors/TransmissionError";

export abstract class Channel implements TelegraphNode {
  constructor(
    public readonly name: string,
    protected readonly distanceKm: number,
    protected readonly lossPerKm: number
  ) {}

  process(signal: Signal): ProcessResult {
    // Pérdida proporcional a la distancia
    const loss = this.distanceKm * this.lossPerKm;
    signal.strength -= loss;
    
    // No se puede fuerza negativa
    signal.strength = Math.max(signal.strength, 0.0);

    // Si la señal no llega al mínima aceptable
    if (signal.strength <= 0) {
      return {
        success: false,
        error: new TransmissionError(
          "señal degradada irreversiblemente",
          `${this.name} km ${this.distanceKm}`
        )
      };
    }

    return { success: true, signal };
  }
}
