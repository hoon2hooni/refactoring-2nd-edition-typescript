interface Order {
  basePrice: number;
  // Add other properties of the order if needed
}

const isExtraFeeCharged = (anOrder: Order): boolean => {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
};
