import { getWalletConfig } from '../wallet'
describe('Wallet test', () => {
    it('Should initialize the wallet', () => {
        const data = getWalletConfig();

        expect(data.usd).toBe(200);
        expect(data.eur).toBe(150);
        expect(data.gbp).toBe(10);
    });
})