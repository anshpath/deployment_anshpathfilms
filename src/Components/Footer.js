import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className={`footer ${isHome ? 'footer-home' : 'footer-other'}`}>
      <div className="container">
        <p className = {`${isHome ? 'footer-textH' : 'footer-textO'}`}>
          &copy; Ansh Pathapadu. All Rights Reserved. Designed & Coded by Ansh Pathapadu.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
