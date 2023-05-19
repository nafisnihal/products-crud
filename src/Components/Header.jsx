import React from "react";
import lofo from "../assets/images/Neural Logo.png";

const Header = () => {
  return (
    <div className="bg-dark">
      <img src={lofo} alt="logo" className="ms-4 my-3" />
    </div>
  );
};

export default Header;
