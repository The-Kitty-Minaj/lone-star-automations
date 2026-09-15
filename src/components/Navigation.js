import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-mark">
            <img src={logo} alt="Lone Star Automation" />
          </span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            about us
          </Link>
          <a href="#contact" className="nav-link nav-cta" onClick={() => setIsOpen(false)}>
            book a demo
          </a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
