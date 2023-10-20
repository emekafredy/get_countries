import { useState } from "react";
import LightMode from "../../assets/icon-light-theme.svg";
import DarkMode from "../../assets/icon-dark-theme.svg";
import { useTheme } from "../../hooks/useTheme";

export const NavBar = () => {
  const {colorTheme, setTheme} = useTheme();
  const [light, setLight] = useState(
      colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setLight((prevState) => !prevState);
  };

  return (
    <nav
      className="
        sticky
        top-0
        z-60
        bg-white-100
        dark:bg-dark-blue-100
        dark:border-black-100
        flex
        items-center
        justify-between
        xs:px-4
        md:px-12
        py-5
        shadow-md"
    >
      <p
        className="font-extrabold xs:text-sm md:text-lg text-dark-blue-100 dark:text-white-200"
      >
        Where in the world?
      </p>

      <button
        className="flex font-md font-semibold text-dark-blue-100 dark:text-white-200 xs:text-sm md:text-md"
        onClick={() => toggleDarkMode()}
      >
        <img
          src={light ? LightMode : DarkMode }
          alt="mode-switch-icon"
          className="mr-2 pt-0.5 "
        />
        {light ? "Light Mode" : "Dark Mode" }
      </button>
    </nav>
  )
};
