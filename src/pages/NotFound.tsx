import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>Hoppsan! Sidan hittades inte.</h2>

      <p>
        Gå tillbaka till <NavLink to="/">hem</NavLink>.
      </p>
    </div>
  );
}
