class ProductionPlan {
  private _production: number;
  private _adjustments: { amount: number }[];

  constructor(production: number) {
    this._production = production;
    this._adjustments = [];
  }

  applyAdjustment(anAdjustment: { amount: number }) {
    this._adjustments.push(anAdjustment);
  }

  get calculatedProductionAccumulator() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
}
