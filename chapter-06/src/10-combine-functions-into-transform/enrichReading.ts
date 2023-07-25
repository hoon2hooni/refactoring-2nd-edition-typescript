import _ from 'lodash';
declare function baseRate(month: number, year: number): number;
declare function taxThreshold(year: number): number;
type Reading = {
  month: number;
  year: number;
  quantity: number;
};

export function calculateBaseCharge(aReading: Reading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

export function enrichReading(original: Reading) {
  const result = _.cloneDeep(original) as Reading & {
    baseCharge: number;
    taxableCharge: number;
  };
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year),
  );
  return result;
}
