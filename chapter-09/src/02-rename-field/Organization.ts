export class Organization {
  private _title: string;
  private _country: string;

  constructor(data: { title: string; country: string }) {
    this._title = data.title;
    this._country = data.country;
  }

  get title() {
    return this._title;
  }

  set title(aString: string) {
    this._title = aString;
  }

  get country() {
    return this._country;
  }

  set country(aCountryCode: string) {
    this._country = aCountryCode;
  }
}

const organization = new Organization({
  title: '애크미 구스베리',
  country: 'GB',
});

console.log(organization.title);
console.log(organization.country);
