import React from "react";
import { render, screen } from '@testing-library/react';
import { Grid } from './grid'

describe('<Grid />', () => {
    it('Should be properly render', () => {
        render(<Grid><p>test</p></Grid>)

        const component = screen.getByText('test')
        expect(component).toBeInTheDocument();
    })
});