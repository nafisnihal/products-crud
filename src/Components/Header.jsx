import React from "react";
import logo from "../assets/images/Neurallogo.png";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div id="header">
      <a href="/">
        <img src={logo} alt="logo" className="ms-4 my-3" />
      </a>
    </div>
  );
};

export default Header;
