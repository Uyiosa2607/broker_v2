import * as React from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/system/Home.jsx";
import Dashboard from "./components/system/Dashboard.jsx";
import Plans from "./components/system/Plans.jsx";
import Deposit from "./components/system/Deposit.jsx";
import Withdraw from "./components/system/Withdraw";
import Profile from "./components/system/Profile";
import Profit from "./components/system/Profit";
import Transaction from "./components/system/Transactions";
import Contact from "./components/system/Contact";
import "./index.css";

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
  {
    path: "/withdraw",
    element: <Withdraw />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profit",
    element: <Profit />,
  },
  {
    path: "/transactions",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
