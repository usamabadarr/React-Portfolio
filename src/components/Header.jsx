// src/components/Header.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
  const currentPage = useLocation().pathname; //

  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title">Usama Badar's Portfolio</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/About" className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Projects" className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

