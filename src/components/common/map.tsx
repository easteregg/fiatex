import { getExchangeRate } from "@/stores/currencies";
import { TCurrency } from "@/types/currency";
import React from "react";
import { Arrow } from "./arrow";

type TMapProps = {
  sourceCurrency: string;
  targetCurrency: string;
  amount: number;
  getCurrencyBySymbol: (c: string) => TCurrency | undefined;
};

const Map = ({
  sourceCurrency,
  targetCurrency,
  getCurrencyBySymbol,
  amount,
}: TMapProps) => {
  const estimatedAmount = amount * getExchangeRate(sourceCurrency, targetCurrency);
  const sourceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: sourceCurrency,
  });

  const targetFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: targetCurrency,
  });
  
  return (
    <div className="w-full text-3xl font-bold uppercase  text-gray-400 justify-self-center flex items-center justify-center">
      <React.Suspense fallback={<div>...</div>}>
        <div className="flex mx-2 px-2 items-baseline">
          <span>{sourceFormatter.format(getCurrencyBySymbol(sourceCurrency)?.value  || 0)}</span>
          {amount > 0 && (
            <span className="text-red-500 text-2xl">-{sourceFormatter.format(amount)}</span>
          )}
        </div>
        <Arrow className="w-12 h-12 fill-current text-red-400" />
        <div className="flex mx-2 px-2">
          <span>{targetFormatter.format(getCurrencyBySymbol(targetCurrency)?.value || 0)}</span>
          {estimatedAmount > 0 && (
            <span className="text-green-600 text-2xl">+{targetFormatter.format(estimatedAmount)}</span>
          )}
        </div>
      </React.Suspense>
    </div>
  );
};

export { Map };
