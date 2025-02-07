import { Trip } from "../types/trip.ts";
import { Link } from "react-router-dom";
import myImg from "../assets/myImg.jpg";

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <Link to={`/trips/${trip.id}`} className="block z-50">
      <div
        className="bg-gray-400 shadow rounded-3xl
 p-4 mb-4 size-80 border-4 border-white"
      >
        <h2 className="text-white text-center text-2xl font-bold mb-2">
          {trip.city}
        </h2>

        <img
          className="scale-down rounded-2xl mb-2"
          src={myImg}
          alt="Bild från staden du ska besöka"
        />
        <p className="text-gray-600 mb-2 text-center">{trip.date}</p>
      </div>
    </Link>
  );
};

export default TripCard;
