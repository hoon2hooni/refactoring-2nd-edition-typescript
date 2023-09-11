declare const thermostat: {
  selectedTemperature: number;
  currentTemperature: number;
};

declare const thePlan: HeatingPlan;

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

  targetTemperature(selectedTemperature: number) {
    if (selectedTemperature > this._max) {
      return this._max;
    } else if (selectedTemperature < this._min) {
      return this._min;
    } else {
      return selectedTemperature;
    }
  }
}

if (
  thePlan.targetTemperature(thermostat.currentTemperature) >
  thermostat.selectedTemperature
) {
  setToHeat();
} else if (
  thePlan.targetTemperature(thermostat.currentTemperature) <
  thermostat.currentTemperature
) {
  setToCool();
} else {
  setOff();
}
