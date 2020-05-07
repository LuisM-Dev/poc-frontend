export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mockPrices = {
        totalMonthly: '18,518.12',
        totalOneTime: '1,714.64',
        totalYearly: '1,610.80',
        grandTotal: '21,843.56'
      };
      resolve(mockPrices);
    }, 1000);
  });
};
