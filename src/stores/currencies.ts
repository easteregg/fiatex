import { atom } from "recoil";
import type { TCurrency } from "@/types/currency";

const CURRENCIES: TCurrency[] = [
  {
    symbol: "USD",
    label: "US Dollar",
    value: 200,
  },
  {
    symbol: "EUR",
    label: "Euro",
    value: 150,
  },
  {
    symbol: "GBP",
    label: "British Pound",
    value: 10,
  },
];

export const currenciesAtom = atom<TCurrency[]>({
  key: "currencies",
  default: CURRENCIES,
});

export const sourceCurrencyAtom = atom({
  key: "sourceCurrency",
  default: "USD",
});

export const targetCurrencyAtom = atom({
  key: "targetCurrency",
  default: "EUR",
});
