const states = ['MA', 'CT', 'NY', 'NH'] as const;

/**
 *
 * 리팩토링 후
 */
let appliesToMass = states.includes('MA');
