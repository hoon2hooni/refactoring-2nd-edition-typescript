import customerData from './data';

// 중첩된 레코드 캡슐화하기

/**
 * before
 */

// 쓰기 예

// 읽기 예
// Assuming customerData is of a specific type, you should define its type/interface.
// Replace `CustomerData` with the actual type/interface representing the customerData object.

// Define types/interfaces for customerData and its properties

interface UsageComparisonResult {
  lateAmount: number;
  change: number;
}

function compareUsage(
  customerID: string,
  laterYear: number,
  month: number,
): UsageComparisonResult {
  const later: number = customerData[customerID].usages[laterYear][month];
  const earlier: number = customerData[customerID].usages[laterYear - 1][month];

  return {
    lateAmount: later,
    change: later - earlier,
  };
}
