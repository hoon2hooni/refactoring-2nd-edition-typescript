class Account {
  private _interestRate: number;

  constructor(
    private _number: number,
    private _type: string,
    interestRate: number,
  ) {
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }

  get number() {
    return this._number;
  }

  get type() {
    return this._type;
  }
}
