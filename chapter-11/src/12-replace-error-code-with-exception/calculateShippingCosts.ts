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

const status = calculateShippingCosts(orderData);

if (status < 0) {
  errorList.push({
    order: orderData,
    errorCode: status,
  });
}

function localShippingRules(country: string):ShippingRules | number {
  const data = countryData.shippingRules[country];

  if (data) {
    return new ShippingRules(data);
  } else {
    return -23;
  }
}

function calculateShippingCosts(anOrder: Order) {
  // 관련 없는 코드
  const shippingRules = localShippingRules(anOrder.country);

  if (typeof shippingRules === 'number' && shippingRules < 0) {
    return shippingRules;
  }

  return 1;
  // 더 관련 없는 코드
}
