import { Course } from './Course';
declare function readBasicCourseNames(filename: string): Course[];

const basicCourseNames = readBasicCourseNames('basicCourses.txt');
const aPerson: { courses: Course[] } = { courses: [] };
aPerson.courses = basicCourseNames.map((c) => new Course(c.name, false));
