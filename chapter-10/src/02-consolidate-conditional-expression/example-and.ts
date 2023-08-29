export type Employee = {
  onVacation: boolean;
  seniority: number;
};

export function calculateVacation(anEmployee: Employee) {
  let vacationDays = 0;
  if (anEmployee.onVacation) {
    if (anEmployee.seniority > 10) {
      vacationDays = 1;
    } else {
      vacationDays = 0.5;
    }
  }
  return vacationDays;
}
