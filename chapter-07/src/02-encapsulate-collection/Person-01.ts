import { Course } from './Course';

export class Person {
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
    return this._courses.slice();
  }

  set courses(aList: Course[]) {
    this._courses = aList.slice();
  }

  addCourse(aCourse: Course) {
    this._courses.push(aCourse);
  }

  removeCourse(
    aCourse: Course,
    fnIfAbsent = () => {
      throw new RangeError('강좌가 없습니다.');
    },
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    this._courses.splice(index, 1);
  }
}
