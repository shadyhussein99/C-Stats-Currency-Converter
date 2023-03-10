
// Main file

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import DollarCurrency from "./components/currencies/DollarCurrency"
import EuroCurrency from "./components/currencies/EuroCurrency"
import BritishCurrency from "./components/currencies/BritishCurrency"
import YenCurrency from "./components/currencies/YenCurrency"
import Reports from "./components/ReportsFolder/Reports"
import About from "./components/About"
import Login from "./components/Login"
import Register from "./components/Register"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dollar-currency",
    element: <DollarCurrency />,
  },
  {
    path: "euro-currency",
    element: <EuroCurrency />,
  },
  {
    path: "british-currency",
    element: <BritishCurrency />,
  },
  {
    path: "yen-currency",
    element: <YenCurrency />,
  },
  {
    path: "reports",
    element: <Reports />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
