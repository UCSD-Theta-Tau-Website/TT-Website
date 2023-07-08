import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./navbar.css";
import jaqueminotBorder from "../../images/jaqueminotBorder.webp";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="leftNavbar">
          <Link to="/">
            <img src={jaqueminotBorder} alt="jaqueminot" />
          </Link>
        </div>
        <div className="rightNavbar">
          <Link to="/about">About Us</Link>
          <Link to="/rush">Rush</Link>
          <Link to="/brothers">Brothers</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
