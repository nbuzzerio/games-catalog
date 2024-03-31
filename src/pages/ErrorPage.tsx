import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useTheme } from "../components/ThemeContext/ThemeContext";

const ErrorPage = () => {
  const error = useRouteError();
  const theme = useTheme();
  return (
    <section
      className={`theme min-vh-100  ${theme ? "dark" : "light"} container-fluid`}
    >
      <NavBar />
      <h1 className="text-2xl md:text-7xl">Sorry...</h1>
      <p>
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error occured."}
      </p>
    </section>
  );
};

export default ErrorPage;
