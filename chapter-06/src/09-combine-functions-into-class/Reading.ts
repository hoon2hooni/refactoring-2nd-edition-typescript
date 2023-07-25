// Assuming these are functions with appropriate types defined elsewhere
declare function baseRate(month: number, year: number): number;
declare function taxThreshold(year: number): number;

interface ReadingData {
  customer: string;
  quantity: number;
  month: number;
  year: number;
}

export class Reading {
  #customer: string;
  #quantity: number;
  #month: number;
  #year: number;
  constructor(data: ReadingData) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }
  get customer() {
    return this.#customer;
  }
  get quantity() {
    return this.#quantity;
  }
  get month() {
    return this.#month;
  }
  get year() {
    return this.#year;
  }
}
