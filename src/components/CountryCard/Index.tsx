import { FC } from "react";
import { ICountryCardProps } from "../../interface";
import { formatAndSeparateNumber } from "../../lib/utils";
import { Link } from "react-router-dom";

export const CountryCard:FC<ICountryCardProps> = ({
  countryFlag,
  country
}) => {
  return (
    <div
      className="bg-white-100 shadow-md rounded
        dark:bg-dark-blue-100 mb-8">
        <img className="w-[100%] h-[200px]" src={countryFlag} alt="" />

        <div className="px-5 pt-12 pb-20">
          <p className="text-dark-blue-100 dark:text-white-100 text-md font-extrabold mb-4 hover:underline">
            <Link to={country.name.common}>
              {country.name.common}
            </Link>
          </p>

          <p className="text-dark-blue-100 text-sm">
            <span className="font-bold dark:text-white-100">Population:</span>
            {' '} <span className="font-light dark:text-gray-100"> {formatAndSeparateNumber(country.population)} </span>
          </p>
          <p className="text-dark-blue-100 text-sm">
            <span className="font-bold dark:text-white-100">Region:</span>
            {' '} <span className="font-light dark:text-gray-100">  {country.region} </span>
          </p>
          <p className="text-dark-blue-100 text-sm">
            <span className="font-bold dark:text-white-100">Capital:</span>
            {' '} <span className="font-light dark:text-gray-100">  {country.capital[0]} </span>
          </p>
        </div>
    </div>
  )
};
