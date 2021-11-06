export const getExchangeRate = (source: string, target: string): number => {
  type TExchangeRate = [string, string, number];
  const staticData: TExchangeRate[] = [
    ["USD", "EUR", 0.8],
    ["USD", "GBP", 0.5],
    ["EUR", "USD", 1.2],
    ["EUR", "GBP", 0.7],
    ["GBP", "USD", 1.5],
    ["GBP", "EUR", 1.3],
  ];

  const found = staticData.find(([sourceCurrency, targetCurrency]) => {
    return sourceCurrency === source && targetCurrency === target;
  });

  return found ? found[2] : 1;
};

export const getCurrencyFormatter = (currency: string): Intl.NumberFormat => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    });
  };
  