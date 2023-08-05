import { Priority } from './Priority-01';
export class Order {
  #priority: Priority;

  constructor(data: { priority: Priority }) {
    this.#priority = data.priority;
  }

  get priority(): Priority {
    return this.#priority;
  }

  get priorityString() {
    return this.#priority.toString();
  }

  set priority(aString: string) {
    this.#priority = new Priority(aString);
  }
}
