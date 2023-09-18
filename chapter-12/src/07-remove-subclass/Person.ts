export class Person {
  private _name: string;
  private _genderCode: string;
  constructor(name: string, genderCode: string) {
    this._name = name;
    this._genderCode = genderCode;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return this._genderCode;
  }

  get isMale(): boolean {
    return this.genderCode === 'M';
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

const people = [new Person('John', 'M'), new Person('Jane', 'F')];
const numberOfMales = people.filter((p) => p.isMale).length;

//client
type Record = {
  gender: string;
  name: string;
};

function loadFromInput(data: Record[]) {
  return data.map(createPerson);
}

export function createPerson(aRecord: Record) {
  switch (aRecord.gender) {
    case 'M':
      return new Person(aRecord.name, 'M');
    case 'F':
      return new Person(aRecord.name, 'F');
    default:
      return new Person(aRecord.name, 'X');
  }
}
