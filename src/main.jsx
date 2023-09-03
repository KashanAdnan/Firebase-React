import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Login />),
  },
  {
    path: "register",
    element: (<Register />),
  },
  {
    path: "home",
    element: (<Home />),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);