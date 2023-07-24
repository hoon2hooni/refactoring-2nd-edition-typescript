import { readingsOutsideRange } from './numberRange-01';

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

describe('readingsOutsideRange', () => {
  //특정 범위에 벗어난 측정값을 찾는다.
  it('returns the alerts correctly', () => {
    //given
    const range = { min: 50, max: 55 };
    //when
    const alerts = readingsOutsideRange(station, range.min, range.max);
    //then
    console.log(alerts);
    expect(alerts).toEqual([
      { temp: 47, time: '2016-11-10 09:10' },
      { temp: 58, time: '2016-11-10 09:30' },
    ]);
  });
});
