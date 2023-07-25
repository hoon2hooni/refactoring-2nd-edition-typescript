declare function acquireReading(): Reading;
declare function baseRate(month: number, year: number): number;

interface Reading {
  month: number;
  year: number;
  quantity: number;
}

// Assuming these are functions with appropriate types defined elsewhere

export const aReading: Reading = acquireReading();
export const baseCharge: number =
  baseRate(aReading.month, aReading.year) * aReading.quantity;
