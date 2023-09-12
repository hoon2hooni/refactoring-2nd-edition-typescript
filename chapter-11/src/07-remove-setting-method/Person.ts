export class Person {
  private _name: string;
  private _id: number;

  constructor(name: string, id: number) {
    this._name = name;
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(arg: string) {
    this._name = arg;
  }

  get id() {
    return this._id;
  }

  set id(arg: number) {
    this._id = arg;
  }
}
