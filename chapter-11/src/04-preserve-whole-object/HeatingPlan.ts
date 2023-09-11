export class HeatingPlan {
  constructor(private _temperatureRange: { low: number; high: number }) {}

  withinRange(bottom: number, top: number) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }
}
