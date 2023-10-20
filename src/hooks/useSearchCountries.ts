/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { searchCountriesAPI } from "../apis/countries";
import { ICountryProps } from "../interface";
 
export const useSearchCountries = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<any[]>([]);
    const [name, setName] = useState<string>("");

    
    useEffect(() => {
      const searchCountries = async () => {
        setLoading(true);
        const data = await searchCountriesAPI(name);
        const limitedRes = data?.slice(0, 15).map((country: ICountryProps) => country) || [];

        await setResult(limitedRes);
        setLoading(false);
      }

      if (name.trim().length > 2) {
        searchCountries();
      } else {
        setResult([]);
      }
    }, [name]);

    return {
        loading,
        result,
        name,
        setName
    };
}
