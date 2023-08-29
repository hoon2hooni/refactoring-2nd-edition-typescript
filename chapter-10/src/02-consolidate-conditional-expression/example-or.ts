type Employee = {
  seniority: number;
  monthDisabled: number;
  isPartTime: any;
};

function disabilityAmount(anEmployee: Employee) {
  if (isNotEligibleForDisability(anEmployee)) {
    return 0;
  }

  // 장애 수당 계산
}

function isNotEligibleForDisability(anEmployee: Employee) {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthDisabled > 12 ||
    anEmployee.isPartTime
  );
}
