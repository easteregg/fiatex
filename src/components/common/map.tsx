import {
  amountAtom,
  getCurrencyFormatter,
  getExchangeRate,
  sourceCurrencyAtom,
  targetCurrencyAtom,
} from "@/stores/currencies";
import { TCurrency } from "@/types/currency";
import React from "react";
import { useRecoilValue } from "recoil";
import { Arrow } from "./arrow";

type TMapProps = {
  getCurrencyBySymbol: (c: string) => TCurrency | undefined;
};

const Map = ({ getCurrencyBySymbol }: TMapProps) => {
  const sourceCurrency = useRecoilValue<string>(sourceCurrencyAtom);
  const targetCurrency = useRecoilValue<string>(targetCurrencyAtom);
  const amount = useRecoilValue<number>(amountAtom);
  const estimatedAmount =
    amount * getExchangeRate(sourceCurrency, targetCurrency);
  const sourceFormatter = getCurrencyFormatter(sourceCurrency);
  const targetFormatter = getCurrencyFormatter(targetCurrency);
  const currencyWrapper = "flex mx-2 px-2 items-baseline gap-2";

  return (
    <div className="w-full flex-col lg:flex-row text-3xl font-bold uppercase  text-gray-400 justify-self-center flex items-center justify-center" data-testid="map-currency">
      <div className={currencyWrapper}>
        <div>
          {sourceFormatter.format(
            getCurrencyBySymbol(sourceCurrency)?.value || 0
          )}
        </div>
        {amount > 0 && (
          <div className="text-red-500 text-2xl">
            -&nbsp;{sourceFormatter.format(amount)}
          </div>
        )}
      </div>
      <Arrow className="w-12 h-12 fill-current text-red-400" />
      <div className={currencyWrapper}>
        <div>
          {targetFormatter.format(
            getCurrencyBySymbol(targetCurrency)?.value || 0
          )}
        </div>
        {estimatedAmount > 0 && (
          <div className="text-green-600 text-2xl">
            +&nbsp;{targetFormatter.format(estimatedAmount)}
          </div>
        )}
      </div>
    </div>
  );
};

export { Map };
