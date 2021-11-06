import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  sourceCurrencyAtom,
  targetCurrencyAtom,
  currenciesAtom,
} from "@/stores/currencies";
import { Dropdown } from "../common/index";
import { TCurrency } from "@/types/currency";
import { Map } from "@/components/common/index";

type TCurrencySelectorProps = {
  getCurrencyBySymbol: (currency: string) => TCurrency | undefined;
};

export const CurrencySelector = ({
  getCurrencyBySymbol,
}: TCurrencySelectorProps): JSX.Element => {
  const currencies =useRecoilValue<TCurrency[]>(currenciesAtom);
  const [sourceCurrency, setSourceCurrency] =
    useRecoilState(sourceCurrencyAtom);
  const [targetCurrency, setTargetCurrency] =
    useRecoilState(targetCurrencyAtom);



  return (
    <div
      className="grid md:grid-flow-col sm:grid-flow-row md:grid-cols-exchange-panel content-center gap-10"
      data-testid="currency-selector"
      role="app"
    >
      <div className="justify-self-center">
        <Dropdown
          currencies={currencies}
          selectedCurrency={sourceCurrency}
          data-testid="source-dropdown"
          onChange={function (currency: string): void {
            const found = currencies.find((c) => c.symbol === currency);
            if (found) {
              setSourceCurrency(found.symbol);
            }
          }}
        />
      </div>
      <Map getCurrencyBySymbol={getCurrencyBySymbol} />
      <div className="justify-self-center">
        <Dropdown
          currencies={currencies}
          selectedCurrency={targetCurrency}
          data-testid="target-dropdown"
          onChange={function (currency: string): void {
            const found = currencies.find((c) => c.symbol === currency);
            if (found) {
              setTargetCurrency(found.symbol);
            }
          }}
        />
      </div>
    </div>
  );
};
