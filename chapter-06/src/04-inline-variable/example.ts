interface Order {
  basePrice: number;
  // Add other properties of the order if needed
}

const isExtraFeeCharged = (anOrder: Order): boolean => {
  return anOrder.basePrice > 1000;
};
