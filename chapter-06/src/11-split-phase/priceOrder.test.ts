import { Product, ShippingMethod, priceOrder } from './priceOrder';
describe('priceOrder', () => {
  it('calculates the price correctly without discount or shipping cost', () => {
    const product: Product = {
      basePrice: 10,
      discountThreshold: 5,
      discountRate: 0.1,
    };
    const quantity = 3;
    const shippingMethod: ShippingMethod = {
      discountThreshold: 100,
      discountedFee: 5,
      feePerCase: 10,
    };
    const expectedPrice = 60;
    const result = priceOrder(product, quantity, shippingMethod);
    expect(result).toEqual(expectedPrice);
  });

  it('calculates the price correctly with discount but without shipping cost', () => {
    const product: Product = {
      basePrice: 10,
      discountThreshold: 5,
      discountRate: 0.1,
    };
    const quantity = 10;
    const shippingMethod: ShippingMethod = {
      discountThreshold: 100,
      discountedFee: 5,
      feePerCase: 10,
    };
    const expectedPrice = 195;
    const result = priceOrder(product, quantity, shippingMethod);
    expect(result).toEqual(expectedPrice);
  });

  it('calculates the price correctly with discount and discounted shipping cost', () => {
    const product: Product = {
      basePrice: 10,
      discountThreshold: 5,
      discountRate: 0.1,
    };
    const quantity = 20;
    const shippingMethod: ShippingMethod = {
      discountThreshold: 100,
      discountedFee: 5,
      feePerCase: 10,
    };
    const expectedPrice = 285;
    const result = priceOrder(product, quantity, shippingMethod);
    expect(result).toEqual(expectedPrice);
  });

  it('calculates the price correctly with discount and regular shipping cost', () => {
    const product: Product = {
      basePrice: 10,
      discountThreshold: 5,
      discountRate: 0.1,
    };
    const quantity = 20;
    const shippingMethod: ShippingMethod = {
      discountThreshold: 1000,
      discountedFee: 5,
      feePerCase: 10,
    };
    const expectedPrice = 385;
    const result = priceOrder(product, quantity, shippingMethod);
    expect(result).toEqual(expectedPrice);
  });
});
