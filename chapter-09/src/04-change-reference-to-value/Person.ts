import { TelephoneNumber } from './TelephoneNumber';

export class Person {
  private _telephoneNumber: TelephoneNumber;

  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }


  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }
}
