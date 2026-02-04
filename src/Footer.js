import React from "react";
import logo from "./assets/little-lemon-logo.png";

function Footer() {
  return (
   <footer>
      <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
      <ul>
        <li><a href="/privacy">Navigation</a></li>
        <li><a href="/terms">Contact</a></li>
        <li><a href="/contact">Social media links</a></li>
      </ul>
    </footer>
  )
}

export default Footer;