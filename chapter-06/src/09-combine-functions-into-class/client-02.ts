// Assuming these are functions with appropriate types defined elsewhere
declare function acquireReading(): Reading;
declare function baseRate(month: number, year: number): number;
declare function taxThreshold(year: number): number;
import { Reading } from './Reading';

const rawReading = acquireReading();
const aReading = new Reading(rawReading);

export const taxableCharge = aReading.taxableCharge;
