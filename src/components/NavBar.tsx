import { useTheme, useUpdateTheme } from "./ThemeContext/ThemeContext";

import floppy from "../assets/floppy.svg";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();

  return (
    <nav
      className={`navbar navbar-expand-md ${
        theme ? "navbar-dark " : "navbar-light"
      } `}
    >
      <div className="container-fluid">
        <div className="d-flex w-100 gap-5 align-items-center">
          <a href="/games-catalog" className="col logo-width">
            <img src={floppy} alt="" className="logo img-fluid" />
          </a>
          <div className="flex-grow-1" id="nav">
            <SearchInput onSearch={onSearch} />
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
