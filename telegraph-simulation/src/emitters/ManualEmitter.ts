import { Emitter } from "./Emitter";
import { Encoder } from "../encoding/Encoder";

export class ManualEmitter extends Emitter {
  constructor(encoder: Encoder) {
    super("Emisor manual", encoder);
  }
}
