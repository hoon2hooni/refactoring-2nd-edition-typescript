export class TelephoneNumber {
  private _areaCode: number = 123;
  private _number: number = 1;

  constructor(areaCode: number, number: number) {
    this._areaCode = areaCode;
    this._number = number;
  }

  get areaCode(): number {
    return this._areaCode;
  }

  set areaCode(arg: number) {
    this._areaCode = arg;
  }

  get number(): number {
    return this._number;
  }

  set number(arg: number) {
    this._number = arg;
  }
}
