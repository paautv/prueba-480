import { Signal } from "./Signal";
import { TransmissionError } from "./errors/TransmissionError";

export type ProcessResult =
  | { success: true; signal: Signal }
  | { success: false; error: TransmissionError };
