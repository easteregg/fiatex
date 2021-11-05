import React from 'react'
import { screen, render, fireEvent, getByTestId } from '@testing-library/react'
import { Amount } from './amount'

describe("Amount", () => {

    it('should mount <Amount /> component', async () => {
        const clickHandler = jest.fn((x) => {})
        render(<Amount amount={1000} onChange={(e) => console.log(e)} currency="USD" validationError={false} onClick={clickHandler} />)

        const component = screen.getByTestId('amount-selector');

        expect(component).toBeInTheDocument();
        expect(component.querySelector('input[name="USD"]')).toHaveAttribute('value', "1000");
        const button = screen.getByText('Send');
        expect(button).toBeInTheDocument();
        fireEvent(button, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          }),
        );
        expect(clickHandler).toBeCalledTimes(1);
    });
    it('should throw error if the amount goes over the source Currency', async () => {
        let value = 100;
        render(<Amount 
            amount={value}
            currency='USD'
            validationError={value <= 100}
            onChange={e => {
                value = +e.target.value + value
            }}
            onClick={() => {}}
            />
        )

        const component = screen.getByTestId('amount-selector')

        fireEvent.change(component.querySelector('input[name=USD]'), {target: {value: '200'}});

        const validationError = screen.getByTestId('validation-error');
        expect(validationError).toBeInTheDocument();
    })
})