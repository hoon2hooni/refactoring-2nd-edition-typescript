export class Employee {
  private _name: string;
  private _type: EmployeeType;

  constructor(name: string, type: string) {
    this._name = name;
    this.type = type;
  }

  get type(): EmployeeType {
    return this._type;
  }

  get typeString() {
    return this._type.toString();
  }

  set type(arg: string) {
    this._type = Employee.createEmployee(arg);
  }

  get capitalizedType(): string {
    return (
      this.typeString.charAt(0).toUpperCase() + this.typeString.substr(1).toLowerCase()
    );
  }

  static createEmployee(type: string): EmployeeType {
    switch (type) {
      case 'engineer':
        return new Engineer();
      case 'salesperson':
        return new Salesperson();
      case 'manager':
        return new Manager();
      default:
        throw new Error(`Employee cannot be of type ${type}`);
    }
  }
}

class EmployeeType {}

class Engineer extends EmployeeType {
  toString() {
    return 'engineer';
  }
}

class Salesperson extends EmployeeType {
  toString() {
    return 'salesperson';
  }
}

class Manager extends EmployeeType {
  toString() {
    return 'manager';
  }
}
