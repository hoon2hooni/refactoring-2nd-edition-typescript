const states = ['MA', 'CT', 'NY', 'NH'] as const;
/**
 *
 * 리팩토링 전
 */
let appliesToMass = false;

for (const s of states) {
  if (s === 'MA') {
    appliesToMass = true;
  }
}
