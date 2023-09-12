type Customer = {
  baseRate: number;
};
type Provider = {
  connectionCharge: number;
};

export function charge(customer: Customer, usage: number, provider: Provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}
