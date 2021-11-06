import { getCurrencyFormatter, getExchangeRate } from "./helpers"

describe('helpers', () => {
    describe('getExchangeRate', () => {
        it('Should return proper config values', () => {
            const result = getExchangeRate('USD', 'EUR');
    
            expect(result).toBe(0.8)
        });
        it ('Should return 1 as exchange rate when not found', () => {
            expect(getExchangeRate()).toBe(1);
        })
    })
    describe('getCurrencyFormatter', () => {
        const res = getCurrencyFormatter('USD')
        expect(res.format).toBeTruthy();
    })
})