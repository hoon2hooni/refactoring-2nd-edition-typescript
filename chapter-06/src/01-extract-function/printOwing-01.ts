/**
 * 유효범위를 벗어나는 변수가 없을 때
 */
function printOwing(invoice: {
  customer: string;
  orders: { amount: number }[];
  dueDate?: Date;
}) {
  let outstanding = 0;

  // 배너 출력 로직을 함수로 추출
  console.log('*****************');
  console.log('**** 고객 채무 ****');
  console.log('*****************');

  // 미해결 채무 (outstanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );

  // 마감일 (dueState)을 기록한다.
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

// Clock 객체를 아래와 같이 정의해야 합니다.
class Clock {
  static get today() {
    return new Date();
  }
}

// 예시를 위해 함수를 호출합니다.
const invoice = {
  customer: 'John Doe',
  orders: [{ amount: 100 }, { amount: 200 }, { amount: 300 }],
};

printOwing(invoice);
