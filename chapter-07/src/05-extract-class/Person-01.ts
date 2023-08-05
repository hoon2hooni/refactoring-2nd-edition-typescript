export class Person {
  #name = '';
  #officeAreaCode = '';
  #officeNumber = '';

  get name() {
    return this.#name;
  }

  set name(arg: string) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }

  get officeAreaCode() {
    return this.#officeAreaCode;
  }

  set officeAreaCode(arg: string) {
    this.#officeAreaCode = arg;
  }

  get officeNumber() {
    return this.#officeNumber;
  }

  set officeNumber(arg: string) {
    this.#officeNumber = arg;
  }
}
