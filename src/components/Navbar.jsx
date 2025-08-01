import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <nav className="navbar-container">
        <h1 className="logo">HubSpot</h1>

        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </div>

        {/* This div will now contain BOTH the nav links and the action buttons/links */}
        <div className={`menu-wrapper ${isMenuOpen ? 'show-menu' : ''}`}>
          {/* Middle Section (Nav Links) */}
          <div className="middle-section">
            <ul className="nav-links">
              <li><a href="#">Products</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>

          {/* Right Section (Action Buttons/Links) */}
          <div className="right-section">
            <button className="demobutton">Get Started</button>
            <a href="#" className="signin-link">Sign-in</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;