import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { useTheme } from "../components/ThemeContext/ThemeContext";

const Layout = () => {
  const theme = useTheme();
  return (
    <div
      className={`theme min-vh-100 ${theme ? "dark" : "light"} container-fluid`}
    >
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
