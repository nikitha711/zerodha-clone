
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">

      <div className="logo">
        ZERODHA
      </div>

      <button
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#signup" onClick={closeMenu}>Signup</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#products" onClick={closeMenu}>Products</a>
        <a href="#products" onClick={closeMenu}>Pricing</a>
        <a href="#support" onClick={closeMenu}>Support</a>
      </div>

    </nav>
  );
}

export default Navbar;
