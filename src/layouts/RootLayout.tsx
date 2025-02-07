import { Outlet, NavLink } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="nav-layout w-full font-mono ">
      <nav className="bg-gray-400 p-2 text-white font-bold flex items-center ">
        <NavLink to="/"><h1 className="text-2xl p-2 mx-1 hover:underline">Reseplaneraren</h1></NavLink>
        <ul className="flex justify-end gap-4">
          <NavLink to="AddTrip" className="hover:underline">Lägg till ny resa</NavLink>
          <NavLink to="Trips" className="hover:underline">Dina resor</NavLink>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
