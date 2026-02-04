function Nav({ setPage }) {
  return (
    <nav>
      <ul className="nav-list">
        <li onClick={() => setPage("home")}>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li onClick={() => setPage("reservations")}>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Nav;