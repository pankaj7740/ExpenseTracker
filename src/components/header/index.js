import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpenser
          <i class="fi-rr-credit-card" />
        </div>
        <div className="header-button">
          <a
            href="https://github.com/Anushka-2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-original colored" />
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
