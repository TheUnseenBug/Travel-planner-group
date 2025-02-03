import { Outlet, NavLink } from "react-router-dom";
export default function NavLayout() {
  return (
    <div className="nav-layout w-full">
      <header>
        <nav className=" bg-blue-400 p-2 text-white font-bold ">
          <h1>Reseplaneraren</h1>
          <ul className="flex justify-center gap-4">
            <NavLink to="/">Hem</NavLink>
            <NavLink to="AddTrip">Lägg till ny resa</NavLink>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
