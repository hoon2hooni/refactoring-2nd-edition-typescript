export interface Product {
  basePrice: number;
  discountThreshold: number;
  discountRate: number;
}

export interface ShippingMethod {
  discountThreshold: number;
  discountedFee: number;
  feePerCase: number;
}

export function priceOrder(
  product: Product,
  quantity: number,
  shippingMethod: ShippingMethod,
): number {
  const priceData = calculatePriceData(product, quantity);
  return applyShipping(priceData, shippingMethod);
}

function calculatePriceData(product: Product, quantity: number) {
  const basePrice: number = product.basePrice * quantity;
  const discount: number =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  return { basePrice, quantity, discount };
}

function applyShipping(
  priceData: { basePrice: number; quantity: number; discount: number },
  shippingMethod: ShippingMethod,
) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
}
