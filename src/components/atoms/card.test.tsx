import React from 'react';
import { screen, render } from '@testing-library/react'
import { Card } from './card'

describe('<Card />', () => {
    it('it should render properly', async () => {
        render(<Card className="sample-classname">test content</Card>)

        const component = screen.getByText(/test/)
        expect(component).toBeInTheDocument()
    })
})