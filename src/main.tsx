import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ThemeContext from "./components/ThemeContext/index.ts";
import "./style.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import gta5 from "./assets/games/gta5.webp";

const preloadLink = document.createElement("link");
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.href = gta5;
preloadLink.type = "image/webp";
document.head.appendChild(preloadLink);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContext>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </ThemeContext>
    </QueryClientProvider>
  </React.StrictMode>,
);
