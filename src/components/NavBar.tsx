import { useTheme, useUpdateTheme } from "./ThemeContext/ThemeContext";

import floppy from "../assets/floppy.svg";

const NavBar = () => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();

  return (
    <nav
      className={`navbar navbar-expand-md ${
        theme ? "navbar-dark " : "navbar-light"
      } `}
    >
      <div className="container-fluid">
        <button
          className={`navbar-toggle btn d-md-none ${
            theme ? "bg-light-subtle " : "bg-light"
          }`}
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-label="Expand Navigation"
        >
          <span
            className="navbar-toggler-icon transition"
            style={{ filter: `${theme ? "invert(1)" : "invert(0)"}` }}
          ></span>
        </button>
        <a href="/games-catalog" className="col col-md-2 d-none d-md-block">
          <img
            src={floppy}
            alt=""
            className="logo img-fluid w-25"
          />
        </a>
        <div className="navbar-collapse collapse" id="nav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Test 2
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Test 3
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Test 4
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Test 5
              </a>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch col col-md-2 d-flex justify-content-end align-items-center">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
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
    </nav>
  );
};

export default NavBar;
