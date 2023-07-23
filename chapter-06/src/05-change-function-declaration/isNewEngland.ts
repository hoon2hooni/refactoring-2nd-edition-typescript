/**
 * 리팩토링 전
 */
export type Customer = {
  name: string;
  address: {
    state: string;
    // Add other properties of the address if needed
  };
};

function isNewEngland(aCustomer: Customer): boolean {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}
