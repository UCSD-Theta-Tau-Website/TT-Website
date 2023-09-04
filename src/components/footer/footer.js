import React from "react";
import { NavLink as Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import "../../style/footer.css";
import jaqueminotBorder from "../../images/jaqueminotBorder.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <Link to="/" className="leftFooter">
          <div className="imgContainer">
            <img src={jaqueminotBorder} alt="jaqueminot" />
          </div>
          <div className="textContainer">
            <h3>THETA TAU</h3>
            <h5>Epsilon Delta Chapter</h5>
          </div>
        </Link>

        <div className="rightFooter">
          <a
            href="https://www.facebook.com/thetatau.ucsd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/ucsdthetatau/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/ucsdthetatau"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:officialucsdtt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a
            href="https://github.com/UCSD-Theta-Tau-Website/TT-Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
