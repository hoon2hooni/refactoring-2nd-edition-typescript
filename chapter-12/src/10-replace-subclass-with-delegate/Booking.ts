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

  constructor(show: Show, date: Date) {
    this._show = show;
    this._date = date;
  }

  get isPeakDay() {
    return this._date.getDay() === 1 || this._date.getDay() === 2;
  }

  get hasTalkback() {
    return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
  }

  get basePrice() {
    let result = this._show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }

    return result;
  }
}

class PremiumBooking extends Booking {
  private _extras: Extras;

  constructor(show: Show, date: Date, extras: Extras) {
    super(show, date);

    this._extras = extras;
  }

  get hasTalkback() {
    return this._show.hasOwnProperty('talkback');
  }

  get basePrice() {
    return Math.round(super.basePrice + this._extras.PremiumFee);
  }

  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }
}
