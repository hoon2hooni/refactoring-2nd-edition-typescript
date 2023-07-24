type Station = {
  name: string;
  readings: {
    temp: number;
    time: string;
  }[];
};

const station = {
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
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}
