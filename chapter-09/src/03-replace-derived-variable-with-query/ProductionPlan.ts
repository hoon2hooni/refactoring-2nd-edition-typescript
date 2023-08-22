class ProductionPlan {
  private production: number;
  private adjustments: { amount: number }[];

  constructor(production: number) {
    this.production = production;
    this.adjustments = [];
  }

  getProduction() {
    return this.production;
  }

  applyAdjustment(anAdjustment: { amount: number }) {
    this.adjustments.push(anAdjustment);
    this.production += anAdjustment.amount;
  }
}
