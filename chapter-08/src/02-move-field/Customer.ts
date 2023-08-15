export class Customer {
  private name: string;
  private discountRate: number;
  private contract: CustomerContract;

  constructor(name: string, discountRate: number) {
    this.name = name;
    this.discountRate = discountRate;
    this.contract = new CustomerContract(new Date());
  }

  getDiscountRate() {
    return this.contract.discountRate;
  }

  setDiscountRate(aNumber: number) {
    this.contract.discountRate = aNumber;
  }

  becomePreferred() {
    this.contract.discountRate += 0.03;

    // some code
  }

  applyDiscount(amount: number) {
    return amount - amount * this.contract.discountRate;
  }
}

class CustomerContract {
  public startDate: Date;
  public discountRate = 0.1;

  constructor(startDate: Date) {
    this.startDate = startDate;
  }
}
