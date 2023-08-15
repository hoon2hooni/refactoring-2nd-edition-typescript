import { CustomerContract } from './CustomerContract';
import { dateToday } from './utils';

export class Customer {
  private name: string;
  private discountRate: number;
  private contract: CustomerContract;

  constructor(name: string, discountRate: number) {
    this.name = name;
    this.discountRate = discountRate;
    this.contract = new CustomerContract(dateToday());
  }

  getDiscountRate() {
    return this.discountRate;
  }

  becomePreferred() {
    this.discountRate += 0.03;

    // some code
  }

  applyDiscount(amount: number) {
    return amount - amount * this.discountRate;
  }
}