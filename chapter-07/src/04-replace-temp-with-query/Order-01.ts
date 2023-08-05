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
    const basePrice = this.#quantity * this.#itemPrice;
    let discountFactor = 0.98;

    if (basePrice > 1000) {
      discountFactor -= 0.03;
    }

    return basePrice * discountFactor;
  }
}
