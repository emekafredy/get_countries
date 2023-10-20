
export const fetchCountriesAPI = async () => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const countries = await response.json();                       

    return countries
  } catch (err) {
    throw new Error('Please try again');
  }
};

export const fetchCountryAPI = async (name: string) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    const country = await response.json();                      

    return country
  } catch (err) {
    throw new Error('Please try again');
  }
};
