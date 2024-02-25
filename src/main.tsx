import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";
import ThemeContext from "./components/ThemeContext/index.ts";
import "./style.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContext>
        <App />
        <ReactQueryDevtools />
      </ThemeContext>
    </QueryClientProvider>
  </React.StrictMode>,
);
