import { Signal } from "../core/Signal";
import { SimpleRelay } from "./SimpleRelay";
import { BatteryRelay } from "./BatteryRelay";

const signal = new Signal("... --- ...", 0.1);

const relays = [new SimpleRelay(), new BatteryRelay(1)];

for (const r of relays) {
  const result = r.process(signal);
  console.log(result);
}
