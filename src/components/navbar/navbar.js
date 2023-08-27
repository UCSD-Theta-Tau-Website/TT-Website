import React from "react";
import { NavLink as Link } from "react-router-dom";
import "../../style/navbar.css";
import jaqueminotBorder from "../../images/jaqueminotBorder.webp";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="leftNavbar">
          <Link to="/" id="logo">
            <div className="imgContainer">
              <img src={jaqueminotBorder} alt="jaqueminot" />
            </div>
            <div className="navbarHeader">
              <h3>THETA TAU</h3>
              <h4>Epsilon Delta Chapter</h4>
            </div>
            
          </Link>
        </div>
        <div className="rightNavbar">
          <Link to="/about">About Us</Link>
          <Link to="/rush">Rush</Link>
          <Link to="/brothers">Brothers</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
