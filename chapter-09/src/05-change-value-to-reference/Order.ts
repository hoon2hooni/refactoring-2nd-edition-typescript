import { Customer } from './Customer';

export class Order {
  private _number: number;
  private _customer: Customer;

  constructor(data: { number: number; customer: number }) {
    this._number = data.number;
    this._customer = new Customer(data.customer); // 고객 ID
  }

  get customer() {
    return this._customer;
  }
}
