type EmployeeType = 'engineer' | 'manager' | 'salesperson';

export class Employee {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
}

class Engineer extends Employee {
  get type(): EmployeeType {
    return 'engineer';
  }
}

class Salesperson extends Employee {
  get type(): EmployeeType {
    return 'salesperson';
  }
}

class Manager extends Employee {
  get type(): EmployeeType {
    return 'manager';
  }
}

function createEmployee(name: string, type: EmployeeType): Employee {
  switch (type) {
    case 'engineer':
      return new Engineer(name);
    case 'salesperson':
      return new Salesperson(name);
    case 'manager':
      return new Manager(name);
  }
}
