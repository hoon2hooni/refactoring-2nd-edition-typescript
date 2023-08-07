export class Shipment {
  _shippingCompany = '';
  _trackingNumber = 0;
  /**
   *
   * 더 많은 메서드
   */

  get shippingCompany() {
    return this._shippingCompany;
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

/**
 * 클라이언트
 */
declare const request: {
  vendor: string;
};
const aShipment = new Shipment();

aShipment.shippingCompany = request.vendor;
