export type Person = {
  age: number;
  salary: number;
};

const people: Person[] = [];

const youngest = youngestAge();
const totalSalary = getTotalSalary();

function youngestAge() {
  return Math.min(...people.map((p) => p.age));
}

function getTotalSalary() {
  return people.reduce((total, p) => total + p.salary, 0);
}

console.log(`최연소: ${youngest}, 총 급여: ${totalSalary}`);
