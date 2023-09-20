/**
 * 예시: 서브 클래스가 하나일때
 */

type Show = {
  name: string;
  price: number;
  talkback: boolean;
};

type Extras = {
  PremiumFee: number;
  dinner: boolean;
};

class Booking {
  protected _show: Show;
  private _date: Date;
  protected _premiumDelegate?: PremiumBookingDelegate;

  constructor(show: Show, date: Date) {
    this._show = show;
    this._date = date;
  }

  get show() {
    return this._show;
  }

  get isPeakDay() {
    return this._date.getDay() === 1 || this._date.getDay() === 2;
  }

  get hasTalkback() {
    return (
      (this._premiumDelegate
        ? this._premiumDelegate.hasTalkback
        : this._show.talkback) && !this.isPeakDay
    );
  }

  get hasDinner() {
    return this._premiumDelegate ? this._premiumDelegate.hasDinner : undefined;
  }

  get basePrice(): number {
    let result = this._show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }
    return this._premiumDelegate
      ? this._premiumDelegate.extendBasePrice(result)
      : result;
  }

  bePremium(extras: Extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
}

function createBooking(show: Show, data: Date) {
  return new Booking(show, data);
}

function createPremiumBooking(show: Show, data: Date, extras: Extras) {
  const result = new Booking(show, data);
  result.bePremium(extras);
  return result;
}

class PremiumBookingDelegate {
  private _host: Booking;
  private _extras: Extras;
  constructor(hostBooking: Booking, extras: Extras) {
    this._host = hostBooking;
    this._extras = extras;
  }

  get hasTalkback() {
    return this._host.show.hasOwnProperty('talkback');
  }

  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && this._host.isPeakDay;
  }

  extendBasePrice(base: number) {
    return Math.round(base + this._extras.PremiumFee);
  }
}
