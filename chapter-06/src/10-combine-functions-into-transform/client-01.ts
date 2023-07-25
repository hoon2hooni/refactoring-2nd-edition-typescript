declare function acquireReading(): Reading;
declare function baseRate(month: number, year: number): number;
import { enrichReading } from './enrichReading';

interface Reading {
  month: number;
  year: number;
  quantity: number;
}

// Assuming these are functions with appropriate types defined elsewhere

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;
