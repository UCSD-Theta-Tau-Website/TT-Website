import React from "react";
import { NavLink as Link } from "react-router-dom";
import "../../style/navbar.css";
import jaqueminotBorder from "../../images/jaqueminotBorder.webp";

import { LiaBarsSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <Link to="/" className="leftNavbar">
          <div className="imgContainer">
            <img src={jaqueminotBorder} alt="jaqueminot" />
          </div>
          <div className="textContainer">
            <h3>THETA TAU</h3>
            <h5>Epsilon Delta Chapter</h5>
          </div>
        </Link>
        <div className="rightNavbar">
          <Link to="/about">About Us</Link>
          <Link to="/rush">Rush</Link>
          <Link to="/brothers">Brothers</Link>
          <Link to="/gallery">Gallery</Link>
          <LiaBarsSolid id="hamburger"></LiaBarsSolid>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
