
export const Search = () => {
  return (
    <div className="
      xs:mb-12
      md:mb-0
      flex
      items-center
      h-12
      rounded
      shadow-md
      py-4
      bg-white-100
      dark:bg-dark-blue-100
      xs:w-[100%]
      md:w-[40%]
      lg:w-[35%]"
    >
      <div className="grid place-items-center h-full px-6 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-200 dark:text-white-100"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        className="w-full h-full text-sm text-dark-blue-100
          focus:outline-none
          dark:bg-dark-blue-100 dark:placeholder-gray-100
          dark:text-gray-100"
        type="text"
        id="search"
        placeholder="Search for a country..."
      /> 
    </div>
  )
}
