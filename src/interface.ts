export interface ICountryProps {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  altSpellings: string[];
  subregion: string;
  tld: string[];
  currencies: string[];
  languages: string[];
  borders: string[];
  area: string;
}

export interface ICountriesProps {
  countries: ICountryProps[];
}

export interface ICountryCardProps {
  countryFlag: string;
  country: ICountryProps
}

export interface ISelectProps {
  optionsData: {
    id: number;
    name: string;
  }[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export type Borders = {name: string, symbol: string}[];

export interface ICountryDetailsProps {
  country: ICountryProps;
  borders: Borders
}

export interface ISearchProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}
