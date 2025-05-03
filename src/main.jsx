import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/system/Dashboard.jsx";
import Plans from "./components/system/Plans.jsx";
import Deposit from "./components/system/Deposit.jsx";
import Withdraw from "./components/system/Withdraw";
import Profile from "./components/system/Profile";
import Profit from "./components/system/Profit";
import Transaction from "./components/system/Transactions";
import Contact from "./components/system/Contact";
import Login from "./components/system/Login.jsx";
import Register from "./components/system/Register.jsx";
import App from "./App.jsx";
import PrivateRoute from "./lib/privateRoute.jsx";
import ResetPassword from "./components/system/resetPassword.jsx";
import ForgetPassword from "./components/system/ForgetPassword.jsx";
import Layout from "./components/system/Layout.jsx";
import NotFound from "./components/system/notFound.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFound />,
  },
  {
    path: "/user",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "dashboard",
        element: <PrivateRoute component={Dashboard} />,
      },
      {
        path: "plans",
        element: <PrivateRoute component={Plans} />,
      },
      {
        path: "deposit",
        element: <PrivateRoute component={Deposit} />,
      },
      {
        path: "withdraw",
        element: <PrivateRoute component={Withdraw} />,
      },
      {
        path: "profile",
        element: <PrivateRoute component={Profile} />,
      },
      {
        path: "profit",
        element: <PrivateRoute component={Profit} />,
      },
      {
        path: "transactions",
        element: <PrivateRoute component={Transaction} />,
      },
      {
        path: "support",
        element: <PrivateRoute component={Contact} />,
      },
    ],
  },

  {
    path: "/reset-password",
    element: <ResetPassword />,
    errorElement: <NotFound />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
