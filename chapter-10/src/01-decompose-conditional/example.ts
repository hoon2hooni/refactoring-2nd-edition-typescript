
const plan = {
  summerStart: new Date('2022-06-01'),
  summerEnd: new Date('2022-09-01'),
  summerRate: 10,
  regularRate: 5,
  regularServiceCharge: 1,
};
let charge: number;
const quantity = 10;

const enhancedDate = (d: Date) => {
  return {
    isBefore: (otherDate: Date) => d < otherDate,
    isAfter: (otherDate: Date) => d > otherDate,
  };
};

const aDate = enhancedDate(new Date());

if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
  charge = quantity * plan.summerRate;
} else {
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
}
