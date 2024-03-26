import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Nav from "./Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Nav></Nav>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
