import React from 'react';
import { render, screen } from '@testing-library/react'
import { Map } from './map'
import { RecoilRoot } from 'recoil';

describe('<Map />', () => {
    it('Should render properly', () => {
    const handleGet = jest.fn(c => ({label: 'USD', value: 10, symbol: 'USD'}));
        render(<RecoilRoot>
            <Map getCurrencyBySymbol={handleGet} />
        </RecoilRoot>)

        const component = screen.getByTestId('map-currency');
        expect(component).toBeInTheDocument();
    })
})