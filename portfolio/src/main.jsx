import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App card={"default"}/>,
  },
  {
    path: "/projects/cliquebait",
    element: <App card={`CliqueBait`}/>,
  },
  {
    path: "/projects/portfolios",
    element: <App card={`Portfolios`}/>,
  },
  {
    path: "/projects/side-projects",
    element: <App card={`Side Projects`}/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
