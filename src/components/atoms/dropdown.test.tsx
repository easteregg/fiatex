import React from "react";
import { screen, render } from "@testing-library/react";
import { Dropdown } from "./dropdown";

describe("<Dropdown />", () => {
  it("Should render properly", async () => {
    const handleChange = jest.fn(() => {});

    render(
      <Dropdown
        currencies={[{ symbol: "USD", label: "US Dollor", value: 10 }]}
        onChange={handleChange}
        data-testid="something"
        selectedCurrency="USD"
      />
    );

    const component = screen.getByTestId("something");
    expect(component).toBeInTheDocument();
  });
});
