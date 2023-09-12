export class ChargeCalculator {
  private _customer: { baseRate: number };
  private _usage: number;
  private _provider: { connectionCharge: number };

  constructor(
    customer: { baseRate: number },
    usage: number,
    provider: { connectionCharge: number },
  ) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }

  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }

  get charge() {
    return this.baseCharge * this._provider.connectionCharge;
  }
}

