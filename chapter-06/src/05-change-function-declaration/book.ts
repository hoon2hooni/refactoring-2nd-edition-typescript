import { assert } from 'console';
/**
 * 매개변수 추가하기
 */
class Book {
  #reservations: Customer[] = [];
  addReservation(customer: Customer) {
    this.#reservations.push(customer);
  }
}

interface Customer {}
