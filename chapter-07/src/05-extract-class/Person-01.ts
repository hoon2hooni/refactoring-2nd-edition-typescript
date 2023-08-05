export class Person {
  #name = '';
  #telephoneNumber: TelephoneNumber;

  constructor() {
    this.#telephoneNumber = new TelephoneNumber();
  }
  get name() {
    return this.#name;
  }

  set name(arg: string) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString();
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(arg: string) {
    this.#telephoneNumber.areaCode = arg;
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(arg: number) {
    this.#telephoneNumber.number = arg;
  }
}

class TelephoneNumber {
  #areaCode = '';
  #number = 1;

  toString() {
    return `(${this.areaCode}) ${this.number}`;
  }

  get areaCode() {
    return this.#areaCode;
  }

  set areaCode(arg: string) {
    this.#areaCode = arg;
  }

  get number() {
    return this.#number;
  }

  set number(arg: number) {
    this.#number = arg;
  }
}
