class Party {}

export class Employee extends Party {
  private _name: string;
  private _id: string;
  private _monthlyCost: number;
  constructor(name: string, id: string, monthlyCost: number) {
    super();

    this._name = name;
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
}

export class Department extends Party {
  private _name: string;
  private _staff: string;
  constructor(name: string, staff: string) {
    super();

    this._name = name;
    this._staff = staff;
  }
}
