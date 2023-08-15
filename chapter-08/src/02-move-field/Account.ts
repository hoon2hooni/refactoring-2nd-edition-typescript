class Account {
  constructor(
    private _number: number,
    private _type: AccountType,
  ) {
    this._type = _type;
  }

  get interestRate() {
    return this._type.interestRate;
  }

  get number() {
    return this._number;
  }

  get type() {
    return this._type;
  }
}

class AccountType {
  type: string;
  interestRate: number;

  constructor(type: string, interestRate: number) {
    this.type = type;
    this.interestRate = interestRate;
  }
}
