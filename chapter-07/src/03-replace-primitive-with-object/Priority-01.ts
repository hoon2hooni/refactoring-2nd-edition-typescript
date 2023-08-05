import '@total-typescript/ts-reset';

type LegalValue = 'low' | 'normal' | 'high' | 'rush';
export class Priority {
  #value = '';

  constructor(value: string | Priority) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) this.#value = value;
    else {
      throw new Error(`<${value}> is invalid for Priority`);
    }
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'] as const;
  }

  toString() {
    return this.#value;
  }

  get _index() {
    return Priority.legalValues().findIndex((s) => s === this.#value);
  }

  equals(other: Priority) {
    return this._index === other._index;
  }

  higherThan(other: Priority) {
    return this._index > other._index;
  }
}
