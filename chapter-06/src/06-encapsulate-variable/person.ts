export let defaultOwnerData = {
  firstName: '마틴',
  lastName: '파울러',
};

export function defaultOwner() {
  return new Person(defaultOwnerData);
}
export function setDefaultOwner(arg: DefaultOwner) {
  defaultOwnerData = arg;
}

type DefaultOwner = typeof defaultOwnerData;
class Person {
  #lastName: string;
  #firstName: string;
  constructor(data: DefaultOwner) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get firstName() {
    return this.#firstName;
  }
}
