export class Organization {
  private _name: string;
  private _country: string;

  constructor(data: { name: string; country: string }) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  set name(aString: string) {
    this._name = aString;
  }

  get country() {
    return this._country;
  }

  set country(aCountryCode: string) {
    this._country = aCountryCode;
  }
}

const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
});

console.log(organization.name);
console.log(organization.country);
