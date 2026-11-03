import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className="Footer">
      <p className="Footer-text">
        <a 
          href="https://opensource.org/license/MIT"
          className="Footer-link"
        >
          Pinta, Inc ⓒ 2026 MIT License
        </a>
      </p>
    </footer>
  );
};

export default Footer;