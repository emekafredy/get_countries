import { useFetchCountry } from "../../hooks/useFetchCountry";
import { Loading } from "../../components/Loading/Index";
import { BackCTA } from "./BackCTA";
import { CountryDetails } from "./CountryDetails";

export const Country = () => {
  const {loading, country, borders} = useFetchCountry();

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
            dark:bg-dark-blue-200
            xs:h-[100%]
            lg:h-screen"
          >
            <BackCTA />
    
            <CountryDetails
              country={country}
              borders={borders}
            />
        </div>
      )}
    </>
  )
};
