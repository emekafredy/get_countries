import { Link } from "react-router-dom";

export const BackCTA = () => {
  return (
    <div
      className="
        xs:w-[80%]
        sm:w-[48%]
        md:w-[30%]
        lg:w-[20%]
        xl:w-[12%]
        px-8
        mt-8
        mb-20
        cursor-pointer"
    >
      <Link
        to='/'
        className="flex items-center bg-white-100 dark:bg-dark-blue-100 py-2 px-6 rounded"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-dark-blue-200 dark:text-white-100"
          stroke="currentColor"
        >
          <g id="call-made">
            <path
            id="Shape"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
            fill="none"
          />
          </g>
        </svg>
        <span className="ml-4 text-dark-blue-100 font-regular dark:text-gray-100">Back</span>
      </Link>
    </div>
  )
};
