class Order {
  private _priority: string;

  constructor(data: { priority: string }) {
    this._priority = data.priority;
  }

  get priority() {
    return this._priority;
  }

  set priority(aString: string) {
    this._priority = aString;
  }
}
