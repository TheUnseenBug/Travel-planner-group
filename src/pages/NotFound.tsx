import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="m-5 h-screen flex justify-start items-center flex-col z-2 relative">
      <h2 className="m-5 text-2xl italic text-black">
        Hoppsan! Sidan hittades inte.
      </h2>

      <p className="p-2 text-black font-bold">
        Gå tillbaka till{" "}
        <NavLink to="/" className="underline text-blue-500 hover:text-black">
          hem
        </NavLink>
        .
      </p>
    </main>
  );
}
