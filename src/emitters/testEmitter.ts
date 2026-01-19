import { ManualEmitter } from "./ManualEmitter";
import { MorseEncoder } from "../encoding/MorseEncoder";

const emitter = new ManualEmitter(new MorseEncoder());

emitter.powerOn();
const signal = emitter.sendPulses("SOS");

console.log(signal);
