type Driver = {
  numberOfLaterDeliveries: number;
};

/**
 * 리팩토링 전
 */
function getRating(driver: Driver) {
  return driver.numberOfLaterDeliveries > 5 ? 2 : 1;
}
