import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <p>
        Copyright 2022 |{" "}
        <a
          href="http://www.neural-semiconductor.com/"
          className="text-danger text-decoration-none"
        >
          NSL
        </a>
      </p>
      <p>Terms & Condition | Help Center</p>
    </div>
  );
};

export default Footer;
