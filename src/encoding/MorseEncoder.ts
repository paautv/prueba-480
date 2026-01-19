import { Encoder } from "./Encoder";

export class MorseEncoder implements Encoder {
  public readonly name = "Morse";
  
  // Mapa de caracteres a Morse
  private readonly morseMap: Record<string, string> = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    " ": "/"
  };

  // Mapa inverso para decodificar Morse a texto
  private readonly reverseMorseMap: Record<string, string> = Object.fromEntries(
    Object.entries(this.morseMap).map(([k, v]) => [v, k])
  );

  // Codifica texto a Morse
  encode(text: string): string {
    return text
      .toUpperCase()
      .split("")
      .map(char => this.morseMap[char] ?? "")
      .join(" ");
  }

  // Decodifica Morse a texto
  decode(encoded: string): string {
    return encoded
      .split(" ")
      .map(code => this.reverseMorseMap[code] ?? "")
      .join("");
  }
}
