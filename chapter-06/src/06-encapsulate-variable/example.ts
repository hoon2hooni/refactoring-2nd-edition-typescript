/**
 * 리펙터링 후
 */
let defaultOwnerData = {
  firstName: '마틴',
  lastName: '파울러',
};

type DefaultOwner = typeof defaultOwnerData;

export function getDefaultOwner() {
  return defaultOwnerData;
}

export function setDefaultOwner(arg: DefaultOwner) {
  defaultOwnerData = arg;
}
