export class Party {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
}

export class Employee extends Party {
  private _id: string;
  private _monthlyCost: number;
  constructor(name: string, id: string, monthlyCost: number) {
    super(name);
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
}

export class Department extends Party {
  private _staff: string;
  constructor(name: string, staff: string) {
    super(name);
    this._staff = staff;
  }
}
