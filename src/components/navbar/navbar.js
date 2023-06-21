import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./navbar.css";
import jaqueminot from "../../images/jaqueminot.png";

const Navbar = () => {
  return (
    <div class="navbarContainer">
      <div class="leftNavbar">
        <Link to="/">
          <img src={jaqueminot} alt="jaqueminot" />
        </Link>
      </div>
      <div class="rightNavbar">
        <Link to="/about">About Us</Link>
        <Link to="/rush">Rush</Link>
        <Link to="/brothers">Brothers</Link>
      </div>
    </div>
  );
};

export default Navbar;
