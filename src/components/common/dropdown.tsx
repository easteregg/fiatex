import React from "react";
import { TCurrency } from "../../types/currency";

type TCurrencyDropdownProps = {
  currencies: TCurrency[];
  onChange: (currency: string) => void;
  selectedCurrency: string;
  "data-testid": string;
};

export const Dropdown = ({
  currencies,
  selectedCurrency,
  onChange,
}: TCurrencyDropdownProps) => (
  <div className="select-wrapper">
    <select
      className="bg-white outline-none rounded-lg p-2 text-xl duration-150  shadow-sm hover:shadow-lg cursor-pointer"
      value={selectedCurrency}
      onChange={(e) => onChange(e.target.value)}
    >
      {currencies.map((option) => (
        <option key={option.symbol} value={option.symbol}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
