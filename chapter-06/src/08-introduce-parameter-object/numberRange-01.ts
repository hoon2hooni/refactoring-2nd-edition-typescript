type Station = {
  name: string;
  readings: {
    temp: number;
    time: string;
  }[];
};

export const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

export function readingsOutsideRange(
  station: Station,
  min: number,
  max: number,
) {
  const range = new NumberRange(min, max);
  return station.readings.filter((r) => !range.contains(r.temp));
}

class NumberRange {
  #data: { min: number; max: number };
  constructor(min: number, max: number) {
    this.#data = { min, max };
  }
  get min() {
    return this.#data.min;
  }
  get max() {
    return this.#data.max;
  }
  contains(arg: number) {
    return arg >= this.min && arg <= this.max;
  }
}
