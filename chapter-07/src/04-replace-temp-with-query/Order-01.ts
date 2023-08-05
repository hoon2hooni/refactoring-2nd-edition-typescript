export class Order {
  #quantity: number;
  #item: any;
  #itemPrice: number;

  constructor(quantity: number, item: any) {
    this.#quantity = quantity;
    this.#item = item;
    this.#itemPrice = this.#item.price;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }

  get basePrice() {
    return this.#quantity * this.#itemPrice;
  }

  get discountFactor() {
    let discountFactor = 0.98;
    if (this.basePrice > 1000) {
      discountFactor -= 0.03;
    }
    return discountFactor;
  }
}
