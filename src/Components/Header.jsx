import React from "react";
import logo from "../assets/images/Neurallogo.png";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div id="header">
      <img src={logo} alt="logo" className="ms-4 my-3" />
    </div>
  );
};

export default Header;
