import { LandCable } from "./LandCable";
import { Signal } from "../core/Signal";

const channel = new LandCable(30);
const signal = new Signal("... --- ...", 1.0);

const result = channel.process(signal);

console.log(result);
