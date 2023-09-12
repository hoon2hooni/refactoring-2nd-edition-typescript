type OriginalState = {
  originState: string;
};

type MedicalExam = {
  isSmoker: boolean;
};

type ScoringGuide = {
  stateWithLowCertification: (state: string) => boolean;
};

function score(
  candidate: OriginalState,
  medicalExam: MedicalExam,
  scoringGuide: ScoringGuide,
) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
  private _candidate: OriginalState;
  private _medicalExam: MedicalExam;
  private _scoringGuide: ScoringGuide;
  private _result = 0;
  private _healthLevel = 0;
  private _highMedicalRiskFlag = false;
  constructor(
    candidate: OriginalState,
    medicalExam: MedicalExam,
    scoringGuide: ScoringGuide,
  ) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }
  execute() {
    this._result = 0;
    this._healthLevel = 0;
    this._highMedicalRiskFlag = false;
    this.scoreSmoking();
    let certificationGrade = 'regular';

    if (
      this._scoringGuide.stateWithLowCertification(this._candidate.originState)
    ) {
      certificationGrade = 'low';
      this._result -= 5;
    }

    // 비슷한 코드가 한참 이어짐
    this._result -= Math.max(this._healthLevel - 5, 0);

    return result;
  }

  scoreSmoking() {
    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._highMedicalRiskFlag = true;
    }
  }
}
