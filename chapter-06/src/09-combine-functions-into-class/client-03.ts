import { Reading } from './Reading';

declare function acquireReading(): Reading;
declare function baseRate(month: number, year: number): number;

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;

export function calculateBaseCharge(aReading: Reading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
