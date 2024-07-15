import React from "react";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/user/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};
const LayoutContext = createContext();

const Layout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logging out...");
  };

  return (
    <LayoutContext.Provider value={{ user, logoutUser }}>
      <NavBar />
      <Outlet context={{ user }} />
      <Footer />
    </LayoutContext.Provider>
  );
};
export default Layout;
export const useLayoutContext = () => useContext(LayoutContext);
