export interface Encoder {
  encode(text: string): string;
  decode(encoded: string): string;
}
