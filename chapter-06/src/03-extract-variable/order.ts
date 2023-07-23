interface OrderData {
  quantity: number;
  itemPrice: number;
}

export class Order {
  #data: OrderData;

  constructor(aRecord: OrderData) {
    this.#data = aRecord;
  }

  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 0.05);
  }

  get quantity() {
    return this.#data.quantity;
  }

  get itemPrice() {
    return this.#data.itemPrice;
  }
}
