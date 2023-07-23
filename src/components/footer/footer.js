import React from "react";
import { NavLink as Link } from "react-router-dom";
import "../../style/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="leftFooter">
          <Link to="/"> Theta Tau</Link>
        </div>

        <div className="rightFooter">
          <a
            href="https://www.facebook.com/thetatau.ucsd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/ucsdthetatau/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/ucsdthetatau"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:officialucsdtt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>

          <a
            href="https://github.com/UCSD-Theta-Tau-Website/TT-Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
