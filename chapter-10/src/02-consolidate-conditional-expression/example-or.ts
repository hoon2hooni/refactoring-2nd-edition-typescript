type Employee = {
  seniority: number;
  monthDisabled: number;
  isPartTime: any;
};

function disabilityAmount(anEmployee: Employee) {
  if (anEmployee.seniority < 2) return 0;
  if (anEmployee.monthDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;

  // 장애 수당 계산
}
