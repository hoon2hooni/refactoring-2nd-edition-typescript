export type Order = {
  deliveryState: string;
  placedOn: {
    plusDays: (arg0: number) => any;
  };
};

function deliveryDate(anOrder: Order, isRush: boolean) {
  if (isRush) {
    return rushDeliveryDate(anOrder);
  } else {
    return regularDeliveryDate(anOrder);
  }
}

function rushDeliveryDate(anOrder: Order) {
  let deliveryTime;

  if (['MA', 'CT'].includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  } else if (['NY', 'NH'].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  } else {
    deliveryTime = 3;
  }

  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder: Order) {
  let deliveryTime;

  if (['MA', 'CT'].includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  } else if (['NY', 'NH'].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  } else {
    deliveryTime = 3;
  }

  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

/**
 * 사용하는 곳에서 예시
 */

declare const aShipment: {
  deliveryDate: Date;
  rush: boolean;
  deliveryState: string;
  placedOn: {
    plusDays: (arg0: number) => any;
  };
};

declare const anOrder: {
  deliveryState: string;
  placedOn: {
    plusDays: (arg0: number) => any;
  };
};

aShipment.deliveryDate = rushDeliveryDate(anOrder);
aShipment.deliveryDate = regularDeliveryDate(anOrder);
