import { useTheme, useUpdateTheme } from "./ThemeContext/ThemeContext";

const NavBar = () => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();

  return (
    <nav className="col-12 d-flex justify-content-between p-3">
      <a href="/" className="col-2 d-flex justify-content-start">
        <img
          src="./src/assets/floppy.svg"
          alt=""
          className="logo img-fluid w-25"
        />
      </a>
      <ul className="col-6 d-flex justify-content-between ">
        <li>Test 1</li>
        <li>Test 2</li>
        <li>Test 3</li>
        <li>Test 4</li>
        <li>Test 5</li>
      </ul>
      <div className="form-check form-switch col-2 d-flex justify-content-end ">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={() => setTheme && setTheme(!theme)}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          dark mode
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
