import { Receiver } from "./Receiver";
import { Signal } from "../core/Signal";

export class ConsoleReceiver extends Receiver {
  constructor(encoder: any) {
    super("Receptor", encoder);
  }

  output(signal: Signal): void {
    // Decodifica el mensaje
    const decoded = this.encoder.decode(signal.encodedData);
    // Muestra el camino del mensaje y el mensaje decodificado
    console.log(`\nProceso: ${signal.trace.join(" -> ")}`);
    console.log(`\nMensaje recibido correctamente: ${decoded}\n`);
  }
}
