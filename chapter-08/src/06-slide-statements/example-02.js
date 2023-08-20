/**
 * 예시
 */

const baseCharge = pricingPlan.base;
const chargePerUnit = pricingPlan.unit;
const order = retrieveOrder();
const units = order.units;
let charge = baseCharge + units * chargePerUnit;

const pricingPlan = retrievePricingPlan();
let discount;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
if (order.isRepeat) {
  discount += 20;
}

charge = charge - discount;
chargeOrder(charge);
