import { useQuery } from "react-query";

/* 
 * There is a limitation with the Free version of API in which Base cannot be selected, attempting to fetch 
 * The exchange rate with inversion of what we have in EURO
 */
// http://api.exchangeratesapi.io/v1/latest
//     ? access_key = YOUR_ACCESS_KEY
//     & base = GBP
//     & symbols = USD,AUD,CAD,PLN,MXN

const BASE_URL = "http://api.exchangeratesapi.io/v1/latest";
type EXCHANGERATE_URL_PARAMS = {
  access_key?: string;
  base: string;
};

export async function fetchExchangeRate(base: string, symbols: string[]) {
  assertHasEnoughInfo(base, symbols);

  const url = new URL(BASE_URL);

  const url_params: EXCHANGERATE_URL_PARAMS = {
    access_key: process.env.REACT_APP_EXCHANGERATESAPI_KEY,
    base,
  };

  Object.entries(url_params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  // Manual string interpolation for symbols is only added to prevent encoding `,` character.
  const response = await fetch(url.toString() + `&symbols=${symbols.join(",")}`);
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  
  return response.json();
}

function assertHasEnoughInfo(base: string, symbols: string[]) {
  if (!process.env.REACT_APP_EXCHANGERATESAPI_KEY) {
    throw new Error(
      "Environment variable is missing, please specify proper api key from exchangeratesapi.io"
    );
  }
  if (!base || symbols.length === 0) {
    throw new Error("Insufficient arguments");
  }
}

type TExchangeRates = {
  success: boolean,
  timestamp: number,
  base: string,
  date: string,
  rates: object
}

export function useExchangeRate(base: string, symbols: string[]) {
  return useQuery<TExchangeRates, Error>(['ex-rate', base, symbols.join(',')], async () => await fetchExchangeRate(base, symbols))
}