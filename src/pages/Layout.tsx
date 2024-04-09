import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { useTheme } from "../components/ThemeContext/ThemeContext";

const Layout = () => {
  const theme = useTheme();
  return (
    <div
      className={`theme min-vh-100 sm:px-10 ${theme ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
