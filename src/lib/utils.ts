/* eslint-disable  @typescript-eslint/no-explicit-any */
import { fetchCountriesAPI } from "../apis/countries";
import { Borders } from "../interface";

export const formatAndSeparateNumber = (x: number) => {
  const str = x.toString() || '';
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatCurrenciesResponse = (currencies: any): {name: string, symbol: string}[] => {
  return Object.entries(currencies).map((e: any) => e[1]);
};

export const getBorderingCountries = async (borders: string[]): Promise<Borders> => {
  const countries = await fetchCountriesAPI();
  const filteredCountries = countries.filter((country: any) => {
    return borders.includes(country?.fifa)
  });

  const filteredRes = filteredCountries.map((country: any) => {
    return {name: country?.name?.common, symbol: country?.fifa}
  });

  return filteredRes;
};
