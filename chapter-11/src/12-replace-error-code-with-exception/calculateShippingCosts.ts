export type Order = {
  country: string;
};
declare const orderData: {
  country: string;
};
declare const countryData: {
  shippingRules: {
    [key: string]: {
      [key: string]: number;
    };
  };
};

declare class ShippingRules {
  constructor(data: { [key: string]: number });
}

declare const errorList: {
  order: Order;
  errorCode: number;
}[];

class OrderProcessingError extends Error {
  code: number;
  constructor(errorCode: number) {
    super(`주문 처리 오류 ${errorCode}`);
    this.code = errorCode;
  }

  get name() {
    return 'OrderProcessingError';
  }
}

try {
  calculateShippingCosts(orderData);
} catch (e: unknown) {
  if (e instanceof OrderProcessingError) {
    errorList.push({
      order: orderData,
      errorCode: e.code,
    });
  } else {
    throw e;
  }
}

function localShippingRules(country: string): ShippingRules | number {
  const data = countryData.shippingRules[country];

  if (data) {
    return new ShippingRules(data);
  } else {
    throw new OrderProcessingError(-23);
  }
}

function calculateShippingCosts(anOrder: Order) {
  // 관련 없는 코드
  const shippingRules = localShippingRules(anOrder.country);

  return 1;
  // 더 관련 없는 코드
}
