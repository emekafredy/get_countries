import { FC, useState } from "react";
import { ISelectProps } from "../../interface";
import ChevronDownIcon from "../../assets/icon-chevron-down.svg";
import ChevronUpIcon from "../../assets/icon-chevron-up.svg";

export const Select:FC<ISelectProps> = ({
  optionsData,
  selected,
  setSelected,
  // handleTaskStatusUpdate
}) => {
  const [open, setOpen] = useState(false);

  const handleSelectChange = (region: string) => {
    if (region !== selected) {
      setSelected(region);
      setOpen(false);
    }
  }

  return (
    <div className="
      xs:w-[100%]
      sm:w-[50%]
      md:w-[40%]
      lg:w-[35%]
      xl:w-[15%]"
    >
      <div
        onClick={() => setOpen(prev => !prev)}
        className={`px-6 pb-3 pt-4 text-sm font-regular flex items-center text-dark-blue-100 dark:text-white-100 justify-between
          rounded shadow-md cursor-pointer bg-white-100 dark:bg-dark-blue-100`}
      >
        {selected}
        <img src={open ? ChevronUpIcon : ChevronDownIcon} alt="logo" className="px-2"/>
      </div>

      <ul
        className={`bg-white-100 dark:bg-dark-blue-100 rounded shadow-md overflow-hidden transition-all duration-500 ${
          open ? "mt-4 max-h-64 absolute xs:w-[90%] sm:w-[47%] md:w-[35%] lg:w-[32%] xl:w-64" : "h-0"
        } `}
      >
        {optionsData?.map((data) => {
          return (
            <li
              key={data.id}
              className={`py-2.5 px-6 cursor-pointer text-sm font-regular
                ${data.name === selected ?
                    'bg-dark-blue-300 text-white-100' :
                    'text-dark-blue-100 dark:text-white-100 hover:bg-dark-blue-100 hover:text-white-100 hover:opacity-25 dark:hover:opacity-60'
                }
              `}
              onClick={() => handleSelectChange(data.name)}
            >
              {data.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
};
