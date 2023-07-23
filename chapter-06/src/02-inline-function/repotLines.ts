/**
 * 리팩토링 전
 */
type Customer = {
  name: string;
  location: string;
};

function reportLines(aCustomer: Customer) {
  const lines: [string, string][] = [];

  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);

  return lines;
}
