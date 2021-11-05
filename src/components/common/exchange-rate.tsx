import { getExchangeRate } from "@/stores/currencies";
import React from "react";

type TExchangeRateProps = {
  source: string;
  target: string;
};
const ExchangeRate = ({ source, target }: TExchangeRateProps) => {
  const exchangeRate = getExchangeRate(source, target);
  return (
    <div className="flex items-center flex-col justify-start self-baseline">
      <h3 className="text-3xl text-blue-800 font-black">Exchange Rate</h3>
      <p className="text-2xl text-blue-900 font-bold">
        1 {source} = {exchangeRate} {target}
      </p>
    </div>
  );
};

export { ExchangeRate };
