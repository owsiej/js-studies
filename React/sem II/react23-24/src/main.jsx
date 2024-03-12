import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import Login from "../Login/Login.jsx";

const RedirectToDashboard = () => {
  const navigate = useNavigate(); // przypisanie do zmiennej wartości hooka
  // useNavigate z biblioteki react-router

  // useEffect, który będzie reagował na zmiany w nawigacji
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  // komponent nie musi nic zwracać (jest typowym komponentem pomocniczym)
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectToDashboard />,
  },
  {
    path: "/dashboard",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
