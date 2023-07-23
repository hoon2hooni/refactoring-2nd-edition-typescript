interface Order {
  quantity: number;
  itemPrice: number;
}

export function price(order: Order): number {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shippingFee = Math.min(order.quantity * order.itemPrice * 0.1, 0.05);
  // 가격(price) = 기본 가격 - 수량 할인 + 배송비
  return (
    basePrice -
    quantityDiscount +
    shippingFee
  );
}
