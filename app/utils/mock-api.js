// app/utils/mock-api.js

export function fetchMockData() {
      // 在函数开始时输出日志，表示函数被调用
  console.log('Fetching mock data...');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          selectedCurrency: 'HKD',
          newFundRates: [
            { tenor: 1, amount: '100,000 to 499,999', rate: '7.125%' },
            { tenor: 1, amount: '500,000 to 999,999', rate: '7.75%' },
            { tenor: 1, amount: '1,000,000 to 1,999,999', rate: '7.75%' },
            { tenor: 1, amount: '2,000,000 to 4,999,999', rate: '7.75%' },
            { tenor: 1, amount: '5,000,000 to 20,000,000', rate: '7.75%' },
            { tenor: 3, amount: '10,000 to 29,999', rate: '5.377%' },
          ],
          existingFundRates: [
            { tenor: 1, amount: '100,000 to 499,999', rate: '5.125%' },
            { tenor: 3, amount: '500,000 to 999,999', rate: '5.50%' },
          ]
        });
      }, 1000); // 模拟网络延迟
    });
  }