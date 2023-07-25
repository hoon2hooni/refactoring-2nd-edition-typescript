declare function acquireReading(): Reading;
declare function baseRate(month: number, year: number): number;
import { Reading } from './Reading';

// Assuming these are functions with appropriate types defined elsewhere

const rawReading = acquireReading();
const aReading: Reading = new Reading(rawReading);
const baseCharge: number = aReading.baseCharge;
