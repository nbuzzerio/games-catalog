import { useTheme, useUpdateTheme } from "./ThemeContext/ThemeContext";

import floppy from "../assets/floppy.svg";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();

  return (
    <nav className={`w-full px-2 py-2 transition-colors duration-500 sm:px-4`}>
      <div className="flex w-full flex-wrap items-center justify-between gap-4 sm:gap-10">
        <Link to={"/games-catalog/"} className="w-14 max-w-14">
          <img src={floppy} alt="" className="" />
        </Link>
        <div className="flex-grow-1 order-last md:order-none" id="nav">
          <SearchInput />
        </div>
        <label
          className="flex items-center justify-center gap-2 px-2"
          htmlFor="flexSwitchCheckDefault"
        >
          <input
            className={`relative h-5 w-10 appearance-none rounded-3xl shadow-inner transition-colors duration-500
            after:absolute after:bottom-1/2 after:right-1/2 after:aspect-square after:w-3/5 after:translate-y-1/2 after:rounded-full after:shadow-2xl after:transition-transform after:duration-700
            ${theme ? "bg-light after:translate-x-0 after:bg-purple-900" : "bg-dark after:translate-x-full after:bg-purple-600"}`}
            type="checkbox"
            id="flexSwitchCheckDefault"
            defaultChecked={theme}
            onClick={() => setTheme && setTheme(!theme)}
          />
          Dark Mode
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
