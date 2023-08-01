interface CustomerData {
  [customerID: string]: {
    name: string;
    id: string;
    usages: {
      [year: number]: {
        [month: number]: number;
      };
    };
  };
}

const data: CustomerData = {
  '1920': {
    name: '마틴 파울러',
    id: '1920',
    usages: {
      2016: {
        1: 50,
        2: 55,
        // 나머지 달(month) 생략
      },
      2015: {
        1: 70,
        2: 63,
        // 나머지 달(month) 생략
      },
    },
  },
  '38673': {
    name: '닐 포드',
    id: '38673',
    usages: {
      2016: {
        1: 50,
        2: 55,
        // 나머지 달(month) 생략
      },
      2015: {
        1: 70,
        2: 63,
        // 나머지 달(month) 생략
      },
    },
  },
};

export default data;
