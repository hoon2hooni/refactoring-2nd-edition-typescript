type TemperatureRange = {
  low: number;
  high: number;
};

export class HeatingPlan {
  constructor(private _temperatureRange: TemperatureRange) {}

  withinRange(aNumberRange: TemperatureRange) {
    return (
      aNumberRange.low >= this._temperatureRange.low &&
      aNumberRange.high <= this._temperatureRange.high
    );
  }
}
