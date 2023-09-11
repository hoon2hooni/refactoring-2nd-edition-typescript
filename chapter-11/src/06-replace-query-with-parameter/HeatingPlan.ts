declare const thermostat: {
  selectedTemperature: number;
  currentTemperature: number;
};

declare const thePlan: {
  targetTemperature: number;
};

declare function setToHeat(): void;
declare function setToCool(): void;
declare function setOff(): void;

class HeatingPlan {
  private _max: number;
  private _min: number;

  constructor(min: number, max: number) {
    this._max = max;
    this._min = min;
  }

  get targetTemperature() {
    if (thermostat.selectedTemperature > this._max) {
      return this._max;
    } else if (thermostat.selectedTemperature < this._min) {
      return this._min;
    } else {
      return thermostat.selectedTemperature;
    }
  }
}

if (thePlan.targetTemperature > thermostat.currentTemperature) {
  setToHeat();
} else if (thePlan.targetTemperature < thermostat.currentTemperature) {
  setToCool();
} else {
  setOff();
}
