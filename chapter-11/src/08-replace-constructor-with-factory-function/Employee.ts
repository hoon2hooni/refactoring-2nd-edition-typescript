type TypeCode = 'E' | 'M' | 'S';
export class Employee {
  private _name: string;
  private _typeCode: TypeCode;

  constructor(name: string, typeCode: TypeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return {
      E: 'Engineer',
      M: 'Manager',
      S: 'Salesperson',
    };
  }
}

const candidate = new Employee('hooni', 'E');
