import { Channel } from "./Channel";

export class LandCable extends Channel {
  constructor(distanceKm: number) {
    super("Cable terrestre", distanceKm, 0.02);
  }
}
