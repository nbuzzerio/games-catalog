import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style.scss";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ThemeContext from "./components/ThemeContext/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>
);
