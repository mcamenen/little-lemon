import logo from "../assets/footer-logo.png";

function Footer() {
  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>

      {/* Infos */}
      <div className="footer-info">
        <p>Little Lemon</p>
        <p>Chicago</p>
        <p>© 2024</p>
      </div>
    </footer>
  );
}

export default Footer;