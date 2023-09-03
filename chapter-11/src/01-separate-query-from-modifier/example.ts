declare function sendAlert(): void;

function alertForMiscreants(people: string[]) {
  if (findMiscreants(people)) sendAlert();
}

function findMiscreants(people: string[]) {
  return people.find((p) => ['조커', '사루만'].includes(p));
}
