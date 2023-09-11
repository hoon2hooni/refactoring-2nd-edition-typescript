/**
 * 리팩토링 전
 */
export type Customer = {
  // Define the properties of a customer here
};

function bookConcert(aCustomer: Customer, isPremium: boolean) {
  if (isPremium) {
    // 프리미엄 예약용 로직
  } else {
    // 일반 예약용 로직
  }
}
