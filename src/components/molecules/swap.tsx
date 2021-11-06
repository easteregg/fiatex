import React from "react";
import { Swap as SwapIcon } from "@/components/atoms/index";
import {
  sourceCurrencyAtom,
  targetCurrencyAtom,
} from "@/stores/currencies";
import { useRecoilState } from "recoil";

const Swap = () => {
  const [sourceCurrency, setSourceCurrency] =
    useRecoilState(sourceCurrencyAtom);
  const [targetCurrency, setTargetCurrency] =
    useRecoilState(targetCurrencyAtom);

  const swapSourceTarget = () => {
    const temp = sourceCurrency;
    setSourceCurrency(targetCurrency);
    setTargetCurrency(temp);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="rounded-lg border-2 px-3 py-2 outline-none bg-transparent"
        type="button"
        onClick={swapSourceTarget}
      >
        <SwapIcon className="w-10 h-10 cursor-pointer" />
        Swap!
      </button>
    </div>
  );
};

export { Swap }