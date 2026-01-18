import { Encoder } from "./Encoder";

export class BinaryEncoder implements Encoder {
  public readonly name = "Binary";

  // Codifica texto a Binario
  encode(text: string): string {
    return text.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
  }

  // Decodifica Binario a texto
  decode(encoded: string): string {
    return encoded.split(" ").map(b => String.fromCharCode(parseInt(b, 2))).join("");
  }
}
