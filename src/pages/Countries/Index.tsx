import { useState } from "react";
import { useFetchCountries } from "../../hooks/useFetchCountries";
import { CountryCard } from "../../components/CountryCard/Index";
import { Search } from "../../components/Search/Index";
import { Select } from "../../components/Select/Index";
import { regions } from "../../data/regions";
import { Loading } from "../../components/Loading/Index";

export const Countries = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("Filter by Region");
  const {loading, countries} = useFetchCountries();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="
            text-3xl
            font-bold
            xs:p-4
            md:p-12
            bg-white-300
            dark:bg-dark-blue-200"
          >
            <div
              className="
                xs:block
                md:flex
                items-center
                justify-between
                py-5
                pb-12"
            >
              <Search />

              <Select
                optionsData={regions}
                selected={selectedRegion}
                setSelected={setSelectedRegion}
              />
            </div>
    
            <div className="xs:w-[90%] sm:w-[68%] md:w-full m-auto grid xs:grid-cols-1
              md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-16 lg:gap-4 xl:gap-8">
              {countries?.map((country) => {
                return (
                  <CountryCard
                    key={country?.area}
                    countryFlag={country?.flags?.png}
                    country={country}
                  />
                )
              })}
            </div>
        </div>
      )}
    </>
  )
};
