type Instrument = {
  capital: number;
  interestRate: number;
  duration: number;
  income: number;
  adjustmentFactor: number;
};

function adjustedCapital(anInstrument: Instrument) {
  if (
    anInstrument.capital <= 0 ||
    anInstrument.interestRate <= 0 ||
    anInstrument.duration <= 0
  ) {
    return 0;
  }

  return (
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor
  );
}
