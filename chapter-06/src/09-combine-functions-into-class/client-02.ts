// Assuming these are functions with appropriate types defined elsewhere
declare function acquireReading(): Reading;
declare function baseRate(month: number, year: number): number;
declare function taxThreshold(year: number): number;

interface Reading {
  month: number;
  year: number;
  quantity: number;
}
export const aReading: Reading = acquireReading();
export const base: number =
  baseRate(aReading.month, aReading.year) * aReading.quantity;
export const taxableCharge: number = Math.max(
  0,
  base - taxThreshold(aReading.year),
);
