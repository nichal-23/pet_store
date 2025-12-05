import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach me at{" "}
          <a className="mail-links" href="mailto:kashifkzmi5@gmail.com">
            nikki15j6@gmail.com
          </a>
        </p>
        
        <p>&copy; 2025 Y.NICHAL</p>
      </div>
    </footer>
  );
};

export default Footer;
