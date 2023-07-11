import React, { useState } from "react";

import "./nav.css";

function NavBar() {
  const [click, setClick] = useState(false);

  
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <li exact to="/" className="nav-logo">
           Dataverse
            <i className="fas fa-code"></i>
          </li>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <li
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
               
              >
                Home
              </li>
            </li>
            <li className="nav-item">
              <li
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                
              >
                About
              </li>
            </li>
            <li className="nav-item">
              <li
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                
              >
                Blog
              </li>
            </li>
            <li className="nav-item">
              <li
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
              
              >
                Contact Us
              </li>
            </li>
          </ul>
        
        </div>
      </nav>
    </>
  );
}

export default NavBar;