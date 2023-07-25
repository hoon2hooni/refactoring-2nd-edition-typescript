// Assuming these are functions with appropriate types defined elsewhere
declare function baseRate(month: number, year: number): number;
declare function taxThreshold(year: number): number;

interface ReadingData {
  customer: string;
  quantity: number;
  month: number;
  year: number;
}

export class Reading {}
