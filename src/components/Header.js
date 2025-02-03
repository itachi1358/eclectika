import React, { useState,useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);


  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior:'auto' });
    }
  };
  
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-title">
            <a href="#">Eclectika</a>
          </div>

          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Navbar Items */}
          <div className={`navbar-items ${menuOpen ? 'open' : ''}`}>
      <a
        href="#events"
        className="nav-link"
        onClick={() => handleScrollToSection('events')}
      >
        Events
      </a>
      <a
        href="#sponsors"
        className="nav-link"
        onClick={() => handleScrollToSection('sponsors')}
      >
        Sponsors
      </a>
      <a
        href="#gallery"
        className="nav-link"
        onClick={() => handleScrollToSection('gallery')}
      >
        Gallery
      </a>
       <Link to='/team'>   
        <a href="#team"
        className="nav-link">
          Team
          </a>
          </Link> 
      <a
        href="#contact"
        className="nav-link"
        onClick={() => handleScrollToSection('contact')}
      >
        Contact Us
      </a>
      <a>
      <Link to='/Merch'>   
        <a href="#team"
        className="nav-link">
          Merchandise
          </a>
          </Link> 
      </a>
    </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
