import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/system/Home.jsx";
import Dashboard from "./components/system/Dashboard.jsx";
import Plans from "./components/system/Plans.jsx";
import Deposit from "./components/system/Deposit/Deposit.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/plans",
    element: <Plans />,
  },
  {
    path: "/deposit",
    element: <Deposit />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
