/**
 * 리팩토링 후
 */
function foundPerson(people: string[]) {
  return ['Don', 'John', 'Kent'].find((p) => people.includes(p)) || '';
}
