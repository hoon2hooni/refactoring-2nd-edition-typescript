interface Bird {
  name: string;
  type: string;
  numberOfCoconuts?: number;
  voltage?: number;
  isNailed?: boolean;
}

function plumages(birds: Bird[]) {
  return new Map(birds.map((b: Bird) => [b.name, plumage(b)]));
}

function speeds(birds: Bird[]) {
  return new Map(birds.map((b: Bird) => [b.name, airSpeedVelocity(b)]));
}

// 깃털 상태
function plumage(bird: Bird) {
  switch (bird.type) {
    case '유럽 제비':
      return '보통이다';
    case '아프리카 제비':
      return bird.numberOfCoconuts! > 2 ? '지쳤다' : '보통이다';
    case '노르웨이 파랑 앵무':
      return bird.voltage! > 100 ? '그을렸다' : '예쁘다';
    default:
      return '알 수 없다';
  }
}


// 비행 속도
function airSpeedVelocity(bird: Bird) {
  switch (bird.type) {
    case '유럽 제비':
      return 35;
    case '아프리카 제비':
      return 40 - 2 * bird.numberOfCoconuts!;
    case '노르웨이 파랑 앵무':
      return bird.isNailed! ? 0 : 10 + bird.voltage! / 10;
    default:
      return null;
  }
}
