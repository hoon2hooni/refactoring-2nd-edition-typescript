interface Order {
  quantity: number;
  itemPrice: number;
}

const order: Order = {
  quantity: 600,
  itemPrice: 10,
};

((order: Order) => {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 0.05);

  return basePrice - quantityDiscount + shipping;
})(order);
