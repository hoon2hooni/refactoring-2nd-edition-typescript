import { TrackingInformation } from './TrackingInformation';
export class Shipment {
  /**
   *
   * 더 많은 메서드
   */
  _trackingInformation = new TrackingInformation();
  get trackingInfo() {
    return this.trackingInformation.display;
  }

  get trackingInformation() {
    return this._trackingInformation;
  }

  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
}

/**
 * 클라이언트
 */
declare const request: {
  vendor: string;
};
const aShipment = new Shipment();

aShipment.trackingInformation.shippingCompany = request.vendor;
