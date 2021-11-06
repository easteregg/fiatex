import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Map } from "./map";
import { Amount } from "./amount";
import { RecoilRoot, useRecoilValue } from "recoil";
import { amountAtom } from "@/stores/currencies";

describe("<Map />", () => {
  it("Should render properly", () => {
    const handleGet = jest.fn((c) => ({
      label: "USD",
      value: 10,
      symbol: "USD",
    }));
    render(
      <RecoilRoot>
        <Map getCurrencyBySymbol={handleGet} />
      </RecoilRoot>
    );

    const component = screen.getByTestId("map-currency");
    expect(component).toBeInTheDocument();
  });
});
