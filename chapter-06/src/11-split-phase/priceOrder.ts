interface Product {
  basePrice: number;
  discountThreshold: number;
  discountRate: number;
}

interface ShippingMethod {
  discountThreshold: number;
  discountedFee: number;
  feePerCase: number;
}

export function priceOrder(
  product: Product,
  quantity: number,
  shippingMethod: ShippingMethod,
): number {
  const basePrice: number = product.basePrice * quantity;
  const discount: number =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const shippingPerCase: number =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost: number = quantity * shippingPerCase;
  const price: number = basePrice - discount + shippingCost;

  return price;
}
