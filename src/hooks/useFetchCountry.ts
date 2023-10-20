import { useState, useEffect } from "react";
import { fetchCountryAPI } from "../apis/countries";
import { useParams } from "react-router-dom";
import { ICountryProps, Borders } from "../interface";
import { getBorderingCountries } from "../lib/utils";

const initialState: ICountryProps = {
  flags: {
    png: '',
  },
  name: {
    common: '',
  },
  population: 0,
  region: '',
  capital: [],
  altSpellings: [''],
  subregion: '',
  tld: [''],
  currencies: [],
  languages: [],
  borders: [''],
  area: ''
}

const initialBordersState: Borders = [
  {name: '', symbol: ''}
]

export const useFetchCountry = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { name } = useParams();

    const [country, setCountry] = useState<ICountryProps>(initialState);
    const [borders, setBorders] = useState<{name: string, symbol: string}[]>(initialBordersState);

    
    useEffect(() => {
      const fetchCountry = async () => {
        setLoading(true);
        const data = await fetchCountryAPI(name || '');
        let borderingCountries: Borders = []
  
        if (data[0]?.borders && data[0]?.borders.length > 0) {
          borderingCountries = await getBorderingCountries(data[0]?.borders);
        }
  
        await setCountry(data[0] as ICountryProps);
        await setBorders(borderingCountries)
        setLoading(false);
      }

      fetchCountry();
    }, [name]);

    return { loading, country, borders };
}
