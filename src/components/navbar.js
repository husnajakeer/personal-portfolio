import '../styles/navbar.css';
import { useState, useEffect } from 'react';
import Logo from './Logo.js';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-logo">
            <Logo />
            <a href="#about">HUSNA JAKEER</a>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#interests" onClick={closeMenu}>Interests</a></li>
              <li><a href="#timeline" onClick={closeMenu}>Timeline</a></li>
              <li><a href="#skills" onClick={closeMenu}>Tech Stack</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </div>
          
          <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
