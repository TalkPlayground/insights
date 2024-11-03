import React, { useState } from "react";
import "./components-styles/Hamburger.css";

const Hamburger: React.FC = () => {
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
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/therapists">Therapists</a>
          </li>
          <li>
            <a href="/patients">Patients</a>
          </li>
          <li>
            <a href="/sign-in">Sign In / Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
