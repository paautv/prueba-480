export class TransmissionError {
  constructor(
    public readonly message: string,
    public readonly failedComponent: string
  ) {}

  toString(): string {
    return `\nERROR: ${this.message} en ${this.failedComponent}\n`;
  }
}
