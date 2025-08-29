// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <h2 style={{ color: "white" }}>My Company</h2>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "white", marginRight: "1rem" }}>
          About
        </Link>
        <Link to="/contact" style={{ color: "white" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

