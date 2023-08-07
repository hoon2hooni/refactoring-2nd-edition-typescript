export class TrackingInformation {
  _shippingCompany = '';
  _trackingNumber = 0;
  get shippingCompany() {
    return this._shippingCompany;
  }

  set shippingCompany(arg: string) {
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
