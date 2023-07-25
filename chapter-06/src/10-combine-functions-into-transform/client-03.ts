/**
 * 리팩토링 전
 */

declare function acquireReading(): Reading;
declare function baseRate(month: number, year: number): number;
import { enrichReading } from './enrichReading';

interface Reading {
  month: number;
  year: number;
  quantity: number;
}

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

export function calculateBaseCharge(aReading: Reading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
