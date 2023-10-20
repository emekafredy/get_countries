/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { fetchCountriesAPI } from "../apis/countries";
import { ICountryProps } from "../interface";
 
export const useFetchCountries = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [countries, setCountries] = useState<any[]>([]);

    const [fetchType, setFetchType] = useState<string>("");
    const [region, setRegion] = useState<string>("Filter by Region");
    const fetchCountries = async () => {
        setLoading(true);
        const data = await fetchCountriesAPI(region);
        
        const limitedRes = data.slice(0, 15).map((country: ICountryProps) => country);

        await setCountries(limitedRes);
        setLoading(false);
    }

    useEffect(() => {
        fetchCountries();
    }, [region]);

    return {
        loading,
        countries,
        fetchType,
        setFetchType,
        region,
        setRegion,
    };
}
