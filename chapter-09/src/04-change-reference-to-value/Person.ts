import { TelephoneNumber } from './TelephoneNumber';

export class Person {
  private _telephoneNumber: TelephoneNumber;

  constructor() {
    this._telephoneNumber = new TelephoneNumber(1, 1);
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }

  set officeNumber(arg) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
  }
}
