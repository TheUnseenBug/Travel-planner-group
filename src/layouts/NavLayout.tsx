import { Outlet, NavLink } from "react-router-dom";
export default function NavLayout() {
  return (
    <div className="nav-layout">
      <header>
        <nav>
          <h1>Reseplaneraren</h1>
          <NavLink to="/">Hem</NavLink>
          <NavLink to="AddTrip">Lägg till ny resa</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
