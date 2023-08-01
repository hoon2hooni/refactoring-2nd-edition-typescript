type Course = {
  name: string;
  isAdvanced: boolean;
};

class Person {
  private _name: string;
  private _courses: Course[];

  constructor(name: string) {
    this._name = name;
    this._courses = [];
  }

  get name(): string {
    return this._name;
  }

  get courses(): Course[] {
    return this._courses;
  }

  set courses(aList: Course[]) {
    this._courses = aList;
  }
}
