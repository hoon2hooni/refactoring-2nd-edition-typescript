/**
 * 리팩토링 전
 */

declare function acquireReading(): Reading;
declare function baseRate(month: number, year: number): number;

interface Reading {
  month: number;
  year: number;
  quantity: number;
}

const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

export function calculateBaseCharge(aReading: Reading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
