import { useTheme, useUpdateTheme } from "./ThemeContext/ThemeContext";

import floppy from "../assets/floppy.svg";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();

  return (
    <nav
      className={`navbar navbar-expand-md theme ${
        theme ? "navbar-dark dark" : "navbar-light light"
      } `}
    >
      <div className="container-fluid">
        <div className="d-flex w-100 gap-5 align-items-center">
          <Link to={"/games-catalog/"} className="col logo-width">
            <img src={floppy} alt="" className="logo img-fluid" />
          </Link>
          <div className="flex-grow-1" id="nav">
            <SearchInput />
          </div>
          <div className="form-check form-switch d-flex justify-content-end align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              defaultChecked={theme}
              onClick={() => setTheme && setTheme(!theme)}
            />
            <label
              className="form-check-label px-2 "
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
