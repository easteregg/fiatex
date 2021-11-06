import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { CurrencySelector } from "./currency-selector";
import { sourceCurrencyAtom } from "../../stores/currencies";
import { RecoilRoot, useRecoilValue } from "recoil";
import { act } from "react-dom/test-utils";

export const RecoilObserver = ({ node, onChange }) => {
  const value = useRecoilValue(node);
  React.useEffect(() => onChange(value), [onChange, value]);
  return null;
};

describe("<CurrencySelector />", () => {
  it("Should render properly", () => {
    const mockFn = jest.fn();
    render(
      <RecoilRoot>
        <CurrencySelector getCurrencyBySymbol={mockFn} />
      </RecoilRoot>
    );
    expect(screen.getByTestId("currency-selector")).toBeInTheDocument();
  });

  it("Should not allow source and target to be the same", () => {
    const mockFn = jest.fn();
    render(
      <RecoilRoot>
        <CurrencySelector getCurrencyBySymbol={mockFn} />
        <RecoilObserver node={sourceCurrencyAtom} onChange={mockFn} />
      </RecoilRoot>
    );
    expect(screen.getByTestId("currency-selector")).toBeInTheDocument();
    const source = screen
      .getByTestId("source-dropdown")
      .querySelector("select");
    const target = screen
      .getByTestId("target-dropdown")
      .querySelector("select");
    fireEvent.click(source);

    expect(source.value).toBe("USD");
    expect(target.value).toBe("EUR");

    fireEvent.change(source, { target: { value: "USD" } });
    expect(mockFn).toHaveBeenCalledWith("EUR");
  });
});
