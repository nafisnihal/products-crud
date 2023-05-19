import React from "react";
import logo from "../assets/images/Neurallogo.png";

const Header = () => {
  return (
    <div className="bg-dark">
      <img src={logo} alt="logo" className="ms-4 my-3" />
    </div>
  );
};

export default Header;
