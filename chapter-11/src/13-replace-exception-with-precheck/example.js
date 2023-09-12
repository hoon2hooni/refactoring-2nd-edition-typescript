/**
 * 리팩토링 전
 */
function getValueForPeriod(periodNumber) {
  try {
    return values[periodNumber];
  } catch (ArrayIndexOutOfBoundsException) {
    return 0;
  }
}

/**
 * 리팩토링 후
 */
function getValueForPeriod(periodNumber) {
  return periodNumber >= values.length ? 0 : values[periodNumber];
}
