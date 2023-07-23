/**
 * 리팩토링 전
 */
type Customer = {
  name: string;
  location: string;
};

function reportLines(aCustomer: Customer) {
  const lines: [string, string][] = [];

  gatherCustomerData(lines, aCustomer);

  return lines;
}

function gatherCustomerData(out: [string, string][], aCustomer: Customer) {
  out.push(['name', aCustomer.name]);
  out.push(['location', aCustomer.location]);
}
