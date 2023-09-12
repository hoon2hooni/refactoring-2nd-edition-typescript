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

//1단계
function createEmployee(name: string, typeCode: TypeCode) {
  return new Employee(name, typeCode);
}

//2단계
function createEngineer(name: string) {
  return new Employee(name, 'E');
}

const candidate = createEngineer('hooni');
