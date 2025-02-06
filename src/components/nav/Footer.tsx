import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-500 h-16 flex justify-center items-center">
        <nav className="navBar">
          <ul className="navList">
            <Link className="p-2 hover:text-white font-bold" to="/">
              Hem
            </Link>
            <Link className="p-2 hover:text-white font-bold" to="AddTrip">
              Lägg till ny resa
            </Link>
            <Link className="p-2 hover:text-white font-bold" to="Trips">
              Dina resor
            </Link>
          </ul>
        </nav>
      </footer>
    </>
  );
}
