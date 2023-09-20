class Party {
  private _name: string;
  private _monthlyCost: number;
  constructor(name: string, monthlyCost: number) {
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
  get name() {
    return this._name;
  }

  get monthlyCost() {
    return this._monthlyCost;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

export class Employee extends Party {
  private _id: string;
  constructor(name: string, id: string, monthlyCost: number) {
    super(name, monthlyCost);
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

///////////////////////////////////
type Staff = {
  monthlyCost: number;
};

class Department extends Party {
  private _staff: Staff[];
  constructor(name: string, staff: Staff[]) {
    super(
      name,
      staff.reduce((sum, e) => sum + e.monthlyCost, 0),
    );
    this._staff = staff;
  }

  get staff() {
    return this._staff.slice();
  }

  get headCount() {
    return this.staff.length;
  }
}
///////////////////////////////////
