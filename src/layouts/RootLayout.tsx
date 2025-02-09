import { Outlet, NavLink, Link } from "react-router-dom";
import React, { useState } from "react";
import "../components/nav/Navbar.css";

export default function RootLayout() {
  return (
    <div className="nav-layout w-full font-mono">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
          <Link to="/" className="title">
          Reseplaneraren
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <NavLink to="/AddTrip">Lägg till ny resa</NavLink>
            </li>
            <li>
              <NavLink to="/Trips">Dina resor</NavLink>
            </li>
          </ul>
        </nav>
  );
};
