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


type NewEngland = 'MA' | 'CT' | 'ME' | 'VT' | 'NH' | 'RI';

type NewEnglanders = {
  name: string;
  address: {
    state: NewEngland;
    // Add other properties of the address if needed
  };
};

function inNewEngland(aCustomer: Customer): aCustomer is NewEnglanders {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

const someCustomers: Customer[] = [
  { name: 'A', address: { state: 'MA' } },
  { name: 'B', address: { state: 'CT' } },
  { name: 'C', address: { state: 'ME' } },
];

const newEnglanders = someCustomers.filter(inNewEngland);
