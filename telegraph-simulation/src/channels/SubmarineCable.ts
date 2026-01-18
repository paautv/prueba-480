import { Channel } from "./Channel";

export class SubmarineCable extends Channel {
  constructor(distanceKm: number) {
    super("Cable submarino", distanceKm, 0.04);
  }
}
