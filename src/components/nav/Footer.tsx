import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-600 h-16 flex items-center font-mono">
        <nav className="navBar flex justify-start">
          <ul className="navList">
            <Link className="p-2 hover:underline text-white" to="/">
              Hem
            </Link>
            <Link className="p-2 hover:underline text-white" to="AddTrip">
              Lägg till ny resa
            </Link>
            <Link className="p-2 hover:underline text-white" to="Trips">
              Dina resor
            </Link>
          </ul>
        </nav>
        <div className=" flex justify-center">
          <p className="text-white text-xs">made by:</p>
          <p className="text-white text-xs">Malmö grupp 3 :)</p>
        </div>
      </footer>
    </>
  );
}
