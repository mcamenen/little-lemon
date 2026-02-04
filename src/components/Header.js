import Nav from "./Nav";
import logo from "../assets/nav-logo.png";

function Header({ setPage }) {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Little Lemon Logo"
        className="logo"
        onClick={() => setPage("home")}
        style={{ cursor: "pointer" }}
      />
      <Nav setPage={setPage} />
    </header>
  );
}

export default Header;