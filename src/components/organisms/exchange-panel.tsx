import React from "react";
import { Card, Dropdown, Amount, Map, ExchangeRate } from "@/components/common/index";
import {
  currenciesAtom,
  getExchangeRate,
  sourceCurrencyAtom,
  targetCurrencyAtom,
} from "@/stores/currencies";
import { useRecoilState } from "recoil";
import { TCurrency } from "@/types/currency";

export const ExchangePanel = () => {
  const [amount, setAmount] = React.useState<number>(0);
  const [currencies, setCurrencies] =
    useRecoilState<TCurrency[]>(currenciesAtom);
  const [sourceCurrency, setSourceCurrency] =
    useRecoilState(sourceCurrencyAtom);
  const [targetCurrency, setTargetCurrency] =
    useRecoilState(targetCurrencyAtom);
  const [validationError, setValidationError] = React.useState<
    string | boolean
  >(false);

  React.useEffect(() => {
    if (sourceCurrency === targetCurrency) {
      const c = currencies.find((c) => c.symbol !== sourceCurrency);
      
      if (c) {
        setTargetCurrency(c.symbol);
      }
    }
  }, [sourceCurrency]);

  React.useEffect(() => {
    if (targetCurrency === sourceCurrency) {
      const c = currencies.find((c) => c.symbol !== targetCurrency);

      if (c) {
        setSourceCurrency(c.symbol);
      }
    }
  }, [targetCurrency]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" || e.target.value === "0") {
      setAmount(1);
      return;
    }
    const source: TCurrency | undefined = currencies.find(
      (c) => c.symbol === e.target.name.toUpperCase()
    );
    const source_max: number = source?.value || 0;
    setAmount(+e.target.value);

    if (+e.target.value > source_max) {
      setValidationError("Amount exceeds");
    } else {
      setValidationError(false);
    }
  };

  const getCurrencyBySymbol = (symbol: string) => {
    return currencies.find((currency) => currency.symbol === symbol);
  };

  const sendMoney = (source: string, target: string, amount: number) => {
    const sourceCurrency = getCurrencyBySymbol(source);
    const targetCurrency = getCurrencyBySymbol(target);

    if (!sourceCurrency || !targetCurrency) {
      throw new Error("Currency not found");
    }

    const sourceValue = sourceCurrency.value;
    const targetValue = targetCurrency.value;
    const exchangeRate = getExchangeRate(source, target);
    const deductedSourceValue = sourceValue - amount;
    const addedTargetValue = targetValue + amount * exchangeRate;

    const source_obj = {
      ...sourceCurrency,
      value: deductedSourceValue,
    };

    const target_obj = {
      ...targetCurrency,
      value: addedTargetValue,
    };

    return {
      sourceCurrency: source_obj,
      targetCurrency: target_obj,
    };
  };

  const transfer = (source: string, target: string, amount: number): void => {
    const { sourceCurrency, targetCurrency } = sendMoney(
      source,
      target,
      amount
    );

    const index = currencies.findIndex(
      (c) => c.symbol === sourceCurrency.symbol
    );
    const output = [
      ...currencies.slice(0, index),
      sourceCurrency,
      ...currencies.slice(index + 1),
    ];

    const targetIndex = output.findIndex(
      (c) => c.symbol === targetCurrency.symbol
    );

    setCurrencies([
      ...output.slice(0, targetIndex),
      targetCurrency,
      ...output.slice(targetIndex + 1),
    ]);

    setAmount(0);
  };

  return (
    <>
    <Card >
      <ExchangeRate source={sourceCurrency} target={targetCurrency} />
    </Card>
    <Card className="w-auto h-auto gap-10 ">
      <div
        className="grid grid-flow-col grid-cols-exchange-panel content-center gap-10"
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
        <Map sourceCurrency={sourceCurrency} amount={amount} targetCurrency={targetCurrency} getCurrencyBySymbol={getCurrencyBySymbol} />
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
      <Amount
        currency={sourceCurrency}
        amount={amount}
        onChange={handleAmountChange}
        validationError={validationError}
        onClick={() => transfer(sourceCurrency, targetCurrency, amount)}
      />
    </Card>
    </>
    
  );
};
