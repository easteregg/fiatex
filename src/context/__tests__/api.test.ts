import { fetchExchangeRate } from "../api";
describe("ExchangeRateAPI client", () => {
  const default_environments = process.env;
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...default_environments };
  });
  beforeAll(() => jest.spyOn(window, "fetch"));

  it("should fetch proper values given proper base and symbols", async () => {
    // Mocked proper response from output
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        success: true,
        timestamp: 1635962884,
        base: "EUR",
        date: "2021-11-03",
        rates: {
          USD: 1.159131,
          GBP: 0.871231,
        },
      }),
    });
    process.env.REACT_APP_EXCHANGERATESAPI_KEY = "sample-api-key"; // THIS IS INVALID DATA

    await fetchExchangeRate("EUR", ["GBP", "EUR"]);
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });

  it("should throw error if API KEY is not present", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });
    expect(fetchExchangeRate).rejects.toThrowError(/environment/i);
  });
  it("should throw error if invalid data is passed", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    process.env.REACT_APP_EXCHANGERATESAPI_KEY = "sample-api-key"; // THIS IS INVALID DATA

    expect(fetchExchangeRate).rejects.toThrowError("Insufficient arguments");
  });
  it("should properly create the URL for fetch", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });
    process.env.REACT_APP_EXCHANGERATESAPI_KEY = "sample-api-key"; // THIS IS INVALID DATA
    fetchExchangeRate("USD", ["GBP", "EUR"]);
    expect(fetch).toHaveBeenCalledWith(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.REACT_APP_EXCHANGERATESAPI_KEY}&base=USD&symbols=GBP,EUR`
    );
  });
});
