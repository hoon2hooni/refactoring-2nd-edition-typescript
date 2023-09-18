export class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return 'X';
  }

  // 생략
}

class Male extends Person {
  get genderCode() {
    return 'M';
  }
}

class Female extends Person {
  get genderCode() {
    return 'F';
  }
}

const people = [new Male('John'), new Female('Jane')];

const numberOfMales = people.filter((p) => p instanceof Male).length;
