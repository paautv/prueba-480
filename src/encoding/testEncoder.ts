import { MorseEncoder } from "./MorseEncoder";

const encoder = new MorseEncoder();

const encoded = encoder.encode("SOS");
console.log(encoded);

const decoded = encoder.decode(encoded);
console.log(decoded);
