import React from 'react';
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App.tsx', () => {
    it('Should render App component', async () => {
        render(<App />);

        const component = screen.getByTestId('app');

        expect(component).toBeInTheDocument();
    });

    it('Should show 2 dropdown menu', async () => {
        render(<App />);

        const sourceDropdown = screen.getByTestId('source-dropdown');
        const targetDropdown = screen.getByTestId('target-dropdown');

        expect(sourceDropdown).toBeInTheDocument();
        expect(targetDropdown).toBeInTheDocument();
    })
})