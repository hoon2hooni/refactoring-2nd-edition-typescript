import { Customer } from './Customer';

interface RepositoryData {
  customer: Map<number, Customer>;
}

let _repositoryData: RepositoryData = { customer: new Map<number, Customer>() };

export function initialize(): void {
  _repositoryData = { customer: new Map<number, Customer>() };
}

export function registerCustomer(id: number) {
  if (!_repositoryData.customer.has(id)) {
    _repositoryData.customer.set(id, new Customer(id));
  }
  return findCustomer(id)!;
}

export function findCustomer(id: number) {
  return _repositoryData.customer.get(id);
}
