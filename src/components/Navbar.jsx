import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar-container">
        <h1 className="logo">HubSpot</h1>

        <div className="middle-section">
          <ul className="nav-links">
            <li><a href="#">Products</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>

        <div className="right-section">
          <button className="demobutton">Get Started</button>
          <a href="#" className="signin-link">Sign-in</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
