/**
 * 예시: 서브클래스가 여러 개일 때
 */

type BirdData = EuropeanBirdData | AfricanSwallowData | NorwegianBlueParrotData;
type CommonProperties = {
  name: string;
  plumage: string;
};

type EuropeanBirdData = CommonProperties & {
  type: '유럽 제비';
};

type AfricanSwallowData = CommonProperties & {
  type: '아프리카 제비';
  numberOfCoconuts: number;
};

type NorwegianBlueParrotData = CommonProperties & {
  type: '노르웨이 파랑 앵무';
  voltage: number;
  isNailed: boolean;
};

export class Bird {
  private _name: string;
  protected _plumage: string;
  private _speciesDelegate: SpeciesDelegate;

  constructor(data: BirdData) {
    this._name = data.name;
    this._plumage = data.plumage;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }

  get name() {
    return this._name;
  }

  get plumage() {
    return this._speciesDelegate.plumage;
  }

  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }

  selectSpeciesDelegate(data: BirdData) {
    switch (data.type) {
      case '유럽 제비':
        return new EuropeanSwallowDelegate(data, this);
      case '아프리카 제비':
        return new AfricanSwallowDelegate(data, this);
      case '노르웨이 파랑 앵무':
        return new NorwegianBlueParrotDelegate(data, this);
      default:
        return new SpeciesDelegate(data, this);
    }
  }
}

class SpeciesDelegate {
  private _bird: Bird;
  protected _plumage: string;
  constructor(data: CommonProperties, bird: Bird) {
    this._bird = bird;
    this._plumage = data.plumage;
  }

  get airSpeedVelocity(): null | number {
    return null;
  }

  get plumage(): string {
    return this._bird.plumage || '보통이다';
  }
}

class AfricanSwallowDelegate extends SpeciesDelegate {
  private _numberOfCoconuts: number;
  constructor(data: AfricanSwallowData, bird: Bird) {
    super(data, bird);
    this._numberOfCoconuts = data.numberOfCoconuts;
  }

  get airSpeedVelocity(): number {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class EuropeanSwallowDelegate extends SpeciesDelegate {
  constructor(data: EuropeanBirdData, bird: Bird) {
    super(data, bird);
  }
  get airSpeedVelocity() {
    return 35;
  }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
  private _voltage: number;
  private _isNailed: boolean;
  constructor(data: NorwegianBlueParrotData, bird: Bird) {
    super(data, bird);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get plumage() {
    if (this._voltage > 100) {
      return '그을렸다';
    } else {
      return this._plumage || '예쁘다';
    }
  }

  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }
}
