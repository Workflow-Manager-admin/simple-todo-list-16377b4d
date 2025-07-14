import React from 'react';
import './Navbar.css';

// PUBLIC_INTERFACE
function Navbar() {
  /**
   * Minimal, horizontal 4-link navbar.
   * Styles based on extracted Figma/HTML/CSS design.
   * Spacing: 10px between links, transparent background,
   * responsive horizontal scroll if overflowing.
   */
  return (
    <nav className="navbar-links" aria-label="Main Navigation">
      <a href="#" className="nav-link">Home</a>
      <a href="#" className="nav-link">About</a>
      <a href="#" className="nav-link">Services</a>
      <a href="#" className="nav-link">Contact</a>
    </nav>
  );
}

export default Navbar;
