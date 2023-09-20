/**
 * 예시: 서브클래스가 여러 개일 때
 */

function createBird(
  bird: EuropeanBird | AfricanSwallowData | NorwegianBlueParrotData,
) {
  switch (bird.type) {
    case '유럽 제비':
      return new EuropeanSwallow(bird);
    case '아프리카 제비':
      return new AfricanSwallow(bird);
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

type Data = {
  name: string;
  plumage: string;
};

type EuropeanBird = Data & {
  type: '유럽 제비';
};

type AfricanSwallowData = Data & {
  type: '아프리카 제비';
  numberOfCoconuts: number;
};

type NorwegianBlueParrotData = Data & {
  type: '노르웨이 파랑 앵무';
  voltage: number;
  isNailed: boolean;
};

export class Bird {
  private _name: string;
  protected _plumage: string;
  constructor(data: Data) {
    this._name = data.name;
    this._plumage = data.plumage;
  }

  get name() {
    return this._name;
  }

  get plumage() {
    return this._plumage || '보통이다';
  }
}

class EuropeanSwallow extends Bird {
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  private _numberOfCoconuts: number;
  constructor(data: AfricanSwallowData) {
    super(data);

    this._numberOfCoconuts = data.numberOfCoconuts;
  }

  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  private _voltage: number;
  private _isNailed: boolean;

  constructor(data: NorwegianBlueParrotData) {
    super(data);

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
