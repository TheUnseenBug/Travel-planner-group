import { Link } from "react-router-dom";
import "../nav/Navbar.css";

export default function Footer() {
  return (
    <>
      <footer className="footerBody h-16 flex items-center font-mono ">
        <nav className="navBar flex ">
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
      </footer>
    </>
  );
}
