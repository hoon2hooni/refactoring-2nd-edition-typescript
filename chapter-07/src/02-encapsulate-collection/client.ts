import { Course } from './Course';
import { Person } from './Person-01';

declare function readBasicCourseNames(filename: string): string[];

const basicCourseNames = readBasicCourseNames('basicCourses.txt');
const aPerson = new Person('Martin Fowler');

for (const name of readBasicCourseNames('additionalCourses.txt')) {
  aPerson.addCourse(new Course(name, true));
}
