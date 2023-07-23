interface Order {
  quantity: number;
  itemPrice: number;
}

const order: Order = {
  quantity: 600,
  itemPrice: 10,
};

((order: Order) => {
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 0.05)
  );
})(order);
