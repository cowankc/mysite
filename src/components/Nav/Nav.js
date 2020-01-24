import React from "react";
import "./Nav.css";

function Nav() {
    return (
      <div className="pure-menu pure-menu-horizontal navbar">
        <div className="pure-menu-heading pure-menu-link nav-home">
          <h3>
            <a href="/">
              Kevin Cowan
            </a>
          </h3>
          <p>Web Developer</p>
        </div>
        <ul className="pure-menu-list">
          <li className="pure-menu-item nav-item"><a href="/portfolio" className="pure-menu-link nav-item">Portfolio</a></li>
          <li className="pure-menu-item nav-item"><a href="/about" className="pure-menu-link nav-item">About Me</a></li>
          <li className="pure-menu-item nav-item"><a href="/contact" className="pure-menu-link nav-item">Contact</a></li>
        </ul>
      </div>
    );
  }
  
export default Nav;