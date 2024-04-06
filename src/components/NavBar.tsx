import { useTheme, useUpdateTheme } from "./ThemeContext/ThemeContext";

import floppy from "../assets/floppy.svg";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();

  return (
    <nav className={`w-full py-1 px-4 transition-colors duration-500`}>
      <div className="w-full flex justify-between items-center gap-10 flex-wrap">
        <Link to={"/games-catalog/"} className="max-w-14 w-14">
          <img src={floppy} alt="" className="" />
        </Link>
        <div className="flex-grow-1 order-last md:order-none" id="nav">
          <SearchInput />
        </div>
        <label
          className="flex px-2 justify-center items-center gap-2 "
          htmlFor="flexSwitchCheckDefault"
        >
          <input
            className=""
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
