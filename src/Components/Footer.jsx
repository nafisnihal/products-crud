import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div id="footer">
      <p>
        Made with <span className="text-danger">&hearts;</span> by{' '}
        <a
          href="https://www.linkedin.com/in/nafisnihal/"
          className="text-danger text-decoration-none"
        >
          Nafis Nihal
        </a>
      </p>
    </div>
  );
};

export default Footer;
