import React from "react";
import { Card, Dropdown, Arrow } from "@/components/common/index";
import {
  currenciesAtom,
  sourceCurrencyAtom,
  targetCurrencyAtom,
} from "@/stores/currencies";
import { useRecoilState } from "recoil";

const Icon = React.lazy(() => import("@/components/atoms/icon"));

export const ExchangePanel = () => {
  const [currencies, setCurrencies] = useRecoilState(currenciesAtom);
  const [sourceCurrency, setSourceCurrency] =
    useRecoilState(sourceCurrencyAtom);
  const [targetCurrency, setTargetCurrency] =
    useRecoilState(targetCurrencyAtom);

  React.useEffect(() => {
    if (sourceCurrency === targetCurrency) {
      const found = currencies.find(
        (currency) => currency.symbol !== sourceCurrency
      );

      if (found) {
        setTargetCurrency(found.symbol);
      }
    }
  }, [sourceCurrency]);

  React.useEffect(() => {
    if (targetCurrency === sourceCurrency) {
      const found = currencies.find(
        (currency) => currency.symbol !== targetCurrency
      );

      if (found) {
        setSourceCurrency(found.symbol);
      }
    }
  }, [targetCurrency]);

  const updateCurrencies = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currency = e.target.name;
    const index = currencies.findIndex((c) => c.symbol === currency);
    if (index) {
      const new_currency = currencies[index];
      new_currency.value = +e.target.value;
      setCurrencies([
        ...currencies.slice(0, index),
        new_currency,
        ...currencies.slice(index + 1),
      ]);
    }
  };

  return (
    <Card className="app-wrapper">
      <div
        className="grid grid-flow-col grid-cols-3 content-center"
        data-testid="app"
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
        <div className="w-full text-gray-400 justify-self-center flex items-center justify-center">
          <React.Suspense fallback={<div>...</div>}>
            <Icon className="w-12 h-12" name={sourceCurrency.toUpperCase()} />
            <Arrow className="w-12 h-12" />
            <Icon  className="w-12 h-12" name={targetCurrency.toUpperCase()} />
          </React.Suspense>
        </div>
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
      <div>
        <input
          name={sourceCurrency}
          value={
            currencies.find((c) => c.symbol === sourceCurrency)?.value || ""
          }
          type="number"
          min="1"
          step="any"
          onChange={updateCurrencies}
        />
      </div>
    </Card>
  );
};
