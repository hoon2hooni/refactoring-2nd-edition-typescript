import customerData from './data';
import _ from 'lodash';
// 중첩된 레코드 캡슐화하기

/**
 * before
 */

// 쓰기 예

// 읽기 예
// Assuming customerData is of a specific type, you should define its type/interface.
// Replace `CustomerData` with the actual type/interface representing the customerData object.

// Define types/interfaces for customerData and its properties

function compareUsage(customerID: string, laterYear: number, month: number) {
  const later: number = getCustomerData().rawData[customerID].usages[laterYear][
    month
  ];
  const earlier: number = getCustomerData().rawData[customerID].usages[
    laterYear - 1
  ][month];

  return {
    lateAmount: later,
    change: later - earlier,
  };
}

type CustomerData = typeof customerData;

class Customer {
  private _data: CustomerData;

  constructor(data: CustomerData) {
    this._data = data;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }

  usage(customerID: string, laterYear: number, month: number) {
    return this._data[customerID].usages[laterYear][month];
  }
}
let aCustomerData = new Customer(customerData);

const getCustomerData = () => aCustomerData;
const getRawDataOfCustomer = () => aCustomerData.rawData;
const setRawDataOfCustomer = (arg: CustomerData) => {
  aCustomerData = new Customer(arg);
};
