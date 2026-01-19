import { Encoder } from "../encoding/Encoder";
import { Signal } from "../core/Signal";
import { ProcessResult } from "../core/ProcessResult";
import { TransmissionError } from "../core/errors/TransmissionError";

export abstract class Emitter {
  protected poweredOn = false;

  constructor(
    protected readonly name: string,
    protected readonly encoder: Encoder
  ) {}

  // Encede el emisor
  powerOn(): void {
    this.poweredOn = true;
  }

  // Apaga el emisor
  powerOff(): void {
    this.poweredOn = false;
  }

  codeMessage(message: string): string{
    // Codifica el mensaje
    const encoded = this.encoder.encode(message);

    return encoded;
  }

  sendPulses(message: string): ProcessResult  {
    // Comprueba el estado del emisor
    if (!this.poweredOn) {
      // Devuelve error en caso de estar apagado
      return {
        success: false,
        error: new TransmissionError("emisor apagado", this.name)
      };
    }

    return { success: true, signal: new Signal(message, 1.0) };
  }
}
