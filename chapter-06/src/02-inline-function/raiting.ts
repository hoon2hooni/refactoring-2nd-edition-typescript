type Driver = {
  numberOfLaterDeliveries: number;
};

/**
 * 리팩토링 전
 */
function getRaiting(driver: Driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver: Driver) {
  return driver.numberOfLaterDeliveries > 5;
}
