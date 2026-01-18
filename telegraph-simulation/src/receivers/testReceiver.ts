import { Signal } from "../core/Signal";
import { MorseEncoder } from "../encoding/MorseEncoder";
import { ConsoleReceiver } from "./ConsoleReceiver";

const encoder = new MorseEncoder();
const receiver = new ConsoleReceiver(encoder);

const signal = new Signal(encoder.encode("SOS"), 1.0);

const result = receiver.process(signal);

if (result.success) {
  receiver.output(signal);
} else {
  console.error(result.error.toString());
}
