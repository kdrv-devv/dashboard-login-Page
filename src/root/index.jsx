import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Owerview from "../components/dashboard-components/overview";
import Transactions from "../components/dashboard-components/transactions";
import Cards from "../components/dashboard-components/cards";
import Invoices from "../components/dashboard-components/invoices";
import Goals from "../components/dashboard-components/goals";
import Settings from "../components/dashboard-components/settings";

export const root = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Owerview />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
      {
        path: "goals",
        element: <Goals />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
