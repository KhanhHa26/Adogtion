import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import footPrint from "../assets/images/footPrint.png";
import { useLayoutContext } from "../pages/Layout";

const NavBar = () => {
  const { user, logoutUser } = useLayoutContext();
  const { role } = user;
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {role === "admin" ? (
        <div className="logout-container">
          <button type="button" className="logout-btn" onClick={logoutUser}>
            Logout
          </button>
        </div>
      ) : (
        <>
          <div className="nav-links">
            <Link to="/service">
              Service <img src={footPrint} alt="Footprint" />
            </Link>
            <Link to="/dogs">
              Dogs <img src={footPrint} alt="Footprint" />
            </Link>
            <Link to="/findadog">
              Find a Dog <img src={footPrint} alt="Footprint" />
            </Link>
            <Link to="/contact">
              Contact Us <img src={footPrint} alt="Footprint" />
            </Link>
          </div>
          <div className="logout-container">
            <button type="button" className="logout-btn" onClick={logoutUser}>
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
