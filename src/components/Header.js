import React, { useState } from "react";
import logo from "../assets/nav-logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header container">
      <img src={logo} alt="Little Lemon Logo" className="logo" />

      {/* Menu toggle pour mobile */}
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)} // ✅ CORRECT
      >
        ☰
      </button>

      <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;