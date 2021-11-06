import React from 'react';
import { render, screen } from '@testing-library/react'
import { ExchangeRate} from './exchange-rate'
import { RecoilRoot } from 'recoil';

describe('<ExchangeRate />', () => {
    it('should render properly', async () => {
        render(<RecoilRoot><ExchangeRate /></RecoilRoot>)

        const component = screen.getByText(/1 USD = 0.8 EUR/)
    })
});