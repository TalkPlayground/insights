import React, { useState } from "react";
import "./components-styles/Hamburger.css";

const DashboardHamburger: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div onClick={toggleMenu} className="hamburger-menu-container">
        <img
          src="/hamburger.png"
          alt="Hamburger Menu"
          className="hamburger-img"
        />
      </div>
      <div className={`menu-overlay ${menuOpen ? "menu-open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          &times;
        </button>
        <ul className="menu-items">
          <li>
            <a href="/dashboard">Home</a>
          </li>
          <li>
            <a href="/dashboard/wheels">Wheels</a>
          </li>
          <li>
            <a href="/dashboard/self-talk">Self-Talk</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHamburger;
