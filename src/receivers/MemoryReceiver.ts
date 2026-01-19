import { Receiver } from "./Receiver";
import { Signal } from "../core/Signal";

export class MemoryReceiver extends Receiver {
  private messages: string[] = [];

  constructor(encoder: any) {
    super("Memoria", encoder);
  }

  // Decodifica la señal y la almacena
  output(signal: Signal): void {
    const decoded = this.encoder.decode(signal.encodedData);
    this.messages.push(decoded);
  }

  // Devuelve todos los mensajes almacenados
  getMessages(): string[] {
    return this.messages;
  }
}
