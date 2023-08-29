export type Employee = {
  onVacation: boolean;
  seniority: number;
};

export function calculateVacation(anEmployee: Employee) {
  if (anEmployee.onVacation && anEmployee.seniority > 10) {
    return 1;
  }
  return 0.5;
}
