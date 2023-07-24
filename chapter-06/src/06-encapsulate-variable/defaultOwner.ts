/**
 * 내부 변경 안되게
 */
let defaultOwnerData = {
  firstName: '마틴',
  lastName: '파울러',
};

type DefaultOwner = typeof defaultOwnerData;

export function getDefaultOwner(): DefaultOwner {
  return { ...defaultOwnerData };
}

export function setDefaultOwner(arg: DefaultOwner) {
  defaultOwnerData = arg;
}
