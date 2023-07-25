// Assuming these are functions with appropriate types defined elsewhere
declare function acquireReading(): Reading;
declare function baseRate(month: number, year: number): number;
declare function taxThreshold(year: number): number;
import { enrichReading } from './enrichReading';

interface Reading {
  month: number;
  year: number;
  quantity: number;
}
const rawReading: Reading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;
