export class Person {
  private _id: number;
  private _name: string | undefined;

  constructor(id: number) {
    this._id = id;
  }

  get name(): string | undefined {
    return this._name;
  }

  set name(arg: string) {
    this._name = arg;
  }

  get id() {
    return this._id;
  }
}

const martin = new Person(123);
martin.name = '마틴';
