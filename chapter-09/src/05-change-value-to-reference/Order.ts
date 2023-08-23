import { Customer } from './Customer';
import { registerCustomer } from './repositoryObject';

export class Order {
  private _number: number;
  private _customer: Customer;

  constructor(data: { number: number; customer: number }) {
    this._number = data.number;
    this._customer = registerCustomer(data.customer); // 고객 ID
  }

  get customer() {
    return this._customer;
  }
}
