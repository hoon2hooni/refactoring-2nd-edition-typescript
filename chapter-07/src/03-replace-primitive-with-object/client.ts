import { Order } from './Order-01';
import { Priority } from './Priority-01';

let orders: Order[] = [];
let highPriorityCount = orders.filter((o) =>
  o.priority.higherThan(new Priority('normal')),
).length;
