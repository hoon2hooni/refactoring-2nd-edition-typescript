/**
 * 유효범위를 벗어나는 변수가 없을 때
 */

type Invoice = {
  customer: string;
  orders: {
    amount: number;
  }[];
  dueDate?: Date;
};

function printOwing(invoice: Invoice) {
  // 배너 출력 로직을 함수로 추출
  printBanner();

  // 미해결 채무 (outstanding)를 계산한다.
  const outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);

  // 마감일 (dueState)을 기록한다.
  printDetails(invoice, outstanding);
}

// Clock 객체를 아래와 같이 정의해야 합니다.
class Clock {
  static get today() {
    return new Date();
  }
}

// 예시를 위해 함수를 호출합니다.
const invoice: Invoice = {
  customer: 'John Doe',
  orders: [{ amount: 100 }, { amount: 200 }, { amount: 300 }],
};

printOwing(invoice);

function printBanner() {
  console.log('*****************');
  console.log('**** 고객 채무 ****');
  console.log('*****************');
}

function calculateOutstanding(invoice: Invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice: Invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );
}

function printDetails(invoice: Invoice, outstanding: number) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice?.dueDate?.toLocaleDateString()}`);
}

