import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

// importe a logo
import logo from "../assets/img/image.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a className="logo-nav" href="/">
        <img className="logo" src={logo} alt="SNACK Logo" />
      </a>

      <div className={`links ${open ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/menu">Cardápio</a>
        <a href="/Gallery">Galeria</a>
        <a href="/location">Localização</a>
      </div>

      <a href="https://www.google.com/maps?q=Rua%20Bras%C3%ADlia%2C%20112%20Centro%20Apu%C3%AD%20AM%2069265-000" target="_blank" rel="noreferrer" className="visit-btn">
        <p>Nos Visite</p>
      </a>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}