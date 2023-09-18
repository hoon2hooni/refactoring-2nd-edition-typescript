type EmployeeType = 'engineer' | 'manager' | 'salesperson';

export class Employee {
  private _name: string;
  private _type: EmployeeType;
  constructor(name: string, type: EmployeeType) {
    this._name = name;
    this._type = type;
  }

  get type() {
    return this._type;
  }

  set type(arg) {
    this._type = arg;
  }

  get capitalizedType() {
    return (
      this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase()
    );
  }

  toString() {
    return `${this._name} (${this.capitalizedType})`;
  }
}


