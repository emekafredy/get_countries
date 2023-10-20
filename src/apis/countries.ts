export const fetchCountriesAPI = async (
  region?: string,
) => {
  try {
    const endpoint = (region && region !== "Filter by Region") ? `region/${region}` : 'all';
    const response = await fetch(`https://restcountries.com/v3.1/${endpoint}`);
    const countries = await response.json();                       

    return countries
  } catch (err) {
    return [];
  }
};

export const fetchCountryAPI = async (name: string) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    const country = await response.json();

    return country
  } catch (err) {
    return {};
  }
};

export const searchCountriesAPI = async (
  name?: string,
) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const countries = await response.json(); 
    
    if (!countries.length) return []

    return countries
  } catch (err) {
    return [];
  }
};
