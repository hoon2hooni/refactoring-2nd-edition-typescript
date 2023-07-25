declare const orderString: string;
declare const priceList: { [key: string]: number };

{
  interface Order {
    productID: string;
    quantity: number;
  }

  /**
   * 리팩토링 전
   */
  const orderData: string[] = orderString.split(/\s+/);
  const productPrice: number = priceList[orderData[0].split('-')[1]];
  const orderPrice: number = parseInt(orderData[1]) * productPrice;

  /**
   * 리팩토링 후
   */
  const orderRecord: Order = parseOrder(orderString);
  const orderPriceRefactored: number = price(orderRecord, priceList);

  function parseOrder(aString: string): Order {
    const values: string[] = aString.split(/\s+/);

    return {
      productID: values[0].split('-')[1],
      quantity: parseInt(values[1]),
    };
  }

  function price(order: Order, priceList: { [key: string]: number }): number {
    return order.quantity * priceList[order.productID];
  }
}
