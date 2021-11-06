import React from "react";
import { Header, Text } from '@/components/atoms'
import { sourceCurrencyAtom, targetCurrencyAtom } from "@/stores/currencies";
import { getExchangeRate } from "@/stores/helpers";
import { useRecoilValue } from "recoil";

const ExchangeRate = () => {
  const source = useRecoilValue(sourceCurrencyAtom);
  const target = useRecoilValue(targetCurrencyAtom);

  const exchangeRate = getExchangeRate(source, target);
  return (
    <div className="flex items-center flex-col justify-start self-baseline">
      <Header level={1}>Exchange Rate</Header>
      <Text className="text-blue-900 font-bold">
        1 {source} = {exchangeRate} {target}
      </Text>
    </div>
  );
};

export { ExchangeRate };
