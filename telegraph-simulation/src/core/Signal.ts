export class Signal {
  constructor(
    public readonly encodedData: string,
    public strength: number,
    public readonly trace: string[] = []
  ) {}

  addTrace(componentName: string): void {
    this.trace.push(componentName);
  }

  isDegraded(): boolean {
    return this.strength <= 0;
  }
}
