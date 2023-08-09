export class Department {
  _manager = '매니저';

  get manager(): string {
    return this._manager;
  }

  set manager(arg: string) {
    this._manager = arg;
  }
}

export class Person {
  private _name: string;
  private _department = new Department();

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  set department(arg: Department) {
    this._department = arg;
  }

  get manager() {
    return this._department.manager;
  }

  set manager(arg: string) {
    this._department.manager = arg;
  }
}

/**
 * 리펙토링 후 코드
 */
let manager = new Person('매니저').manager;
