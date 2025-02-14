import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
