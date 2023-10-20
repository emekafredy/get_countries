import { FC } from "react";
import { ICountryDetailsProps } from "../../interface";
import { formatAndSeparateNumber, formatCurrenciesResponse } from "../../lib/utils";
import { Paragraph } from "./Paragraph";
import { Link } from "react-router-dom";

export const CountryDetails:FC<ICountryDetailsProps> = ({
  country,
  borders
}) => {
  const currenciesArr = formatCurrenciesResponse(country?.currencies);
  const languages = country?.languages ? Object.values(country?.languages) : [];

  return (
    <>
      {country ? (
        <div className="xs:w-[90%] sm:w-[68%] md:w-full m-auto grid xs:grid-cols-1
          md:grid-cols-2 md:gap-16 lg:gap-4 xl:gap-16">

            <div className="w-full h-[100%]">
              <img
                className="w-[90%] rounded"
                src={country?.flags?.png}
                alt={`${country?.name?.common}-flag`}
              />
            </div>

            <div className="py-12">
              <h2 className="text-xl text-dark-blue-100 dark:text-white-100 mb-8"> {country?.name?.common} </h2>

              <div className="w-[100%] text-left m-auto grid xs:grid-cols-1
                py-4 lg:grid-cols-2 md:gap-16 lg:gap-4 xl:gap-16">
                  <div className="mb-8">
                    <Paragraph title="Native Name" data={country?.altSpellings?.[1]} />
                    <Paragraph title="Population" data={formatAndSeparateNumber(country?.population)} />
                    <Paragraph title="Region" data={country?.region} />
                    <Paragraph title="Sub Region" data={country?.subregion} />
                    <Paragraph title="Capital" data={country?.capital[0]} />
                  </div>

                  <div className="mb-8">
                    <Paragraph title="Top Level Domain" data={country?.tld?.[0]} />

                    <p className="leading-9">
                      <span className="text-m font-semibold text-dark-blue-100 dark:text-white-100">
                        Currencies:
                      </span> {' '}
                      {currenciesArr?.map((cur, i) => {
                        return (
                          <span key={i} className="text-m font-light text-dark-blue-100 dark:text-gray-100">
                            {cur.name}{i === currenciesArr?.length - 1 ? '' : ', '}
                          </span>
                        )
                      })}
                    </p>

                    <p className="leading-9">
                      <span className="text-m font-semibold text-dark-blue-100 dark:text-white-100">
                        Languages:
                      </span> {' '}
                      {languages?.map((lang, i) => {
                        return (
                          <span key={i} className="text-m font-light text-dark-blue-100 dark:text-gray-100">
                            {lang}{i === languages?.length - 1 ? '' : ', '}
                          </span>
                        )
                      })}
                    </p>
                  </div>
              </div>

              <ul>
                <li className="lg:inline text-m font-semibold text-dark-blue-100 dark:text-white-100 mb-2"> Border Countries: </li>

                {borders?.map((border, i) => {
                  return (
                    <li
                      key={i}
                      className="inline-block font-light mx-2 mb-2 px-6 py-2 bg-white-100 dark:bg-dark-blue-100
                        shadow-md text-dark-blue-100 dark:text-gray-100">
                      <Link to={`/countries/${border.name}`}>
                        {border.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-white-200 dark:bg-dark-blue-200">
          <div className="relative">
            <p>Not Data Found</p>
          </div>
        </div>
      )}
    </>
  )
};
