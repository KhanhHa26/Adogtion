import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  Home,
  HomeLayout,
  Dogs,
  Service,
  Contact,
  Layout,
  Login,
  Register,
  FindADog,
  AdminPanel,
} from "./pages";
import { loader as findDogLoader } from "./pages/FindADog";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as postDogAction } from "./components/PostADog";
import { loader as layoutLoader } from "./pages/Layout";
import { loader as adminLoader } from "./pages/AdminPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        element: <Layout />,
        loader: layoutLoader,
        children: [
          {
            path: "service",
            element: <Service />,
            action: postDogAction,
          },
          {
            path: "dogs",
            element: <Dogs />,
          },
          {
            path: "findadog",
            element: <FindADog />,
            loader: findDogLoader,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "admin",
            element: <AdminPanel />,
            loader: adminLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
