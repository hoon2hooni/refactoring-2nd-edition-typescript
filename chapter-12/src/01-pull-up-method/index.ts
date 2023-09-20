class Party {
  monthlyCost = 3000;
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

export class Employee extends Party {}

export class Department extends Party {}
