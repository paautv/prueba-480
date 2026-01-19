import { Relay } from "./Relay";
import { Signal } from "../core/Signal";
import { ProcessResult } from "../core/ProcessResult";
import { TransmissionError } from "../core/errors/TransmissionError";

export class BatteryRelay extends Relay {
  private energy: number;

  constructor(initialEnergy: number) {
    super("Relé con batería");
    this.energy = initialEnergy;
  }

  process(signal: Signal): ProcessResult {
    // Procesa la señal entrante amplificandola si es débil y hay energía
    if (signal.strength < this.threshold) {
      // Comprueba la energía de la batería
      if (this.energy <= 0) {
        // Devuelve error en caso de estar sin energía
        return {
          success: false,
          error: new TransmissionError(
            "relé sin energía, no puede amplificar",
            this.name
          )
        };
      }

      // Amplia la señal y baja la energía
      signal.strength = Math.min(signal.strength + 0.5, 1.0);
      this.energy -= 1;
    }

    return { success: true, signal };
  }
}
