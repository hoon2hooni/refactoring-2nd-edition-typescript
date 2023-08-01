/**
 * 리팩토링 후
 */

export const getOrganization = () => organization;

type Data = {
  name: string;
  country: string;
};
export class Organization {
  private _data: Data;
  constructor(data: Data) {
    this._data = data;
  }

  get name() {
    return this._data.name;
  }

  set name(aString: string) {
    this._data.name = aString;
  }
  get country() {
    return this._data.country;
  }

  set country(aCountryCode: string) {
    this._data.country = aCountryCode;
  }
}

const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
});
