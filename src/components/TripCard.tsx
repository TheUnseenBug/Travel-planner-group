import { Trip } from "../types/types.ts";
import { Link } from "react-router-dom";

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <Link to={`/trips/${trip.id}`} className="block z-50">
      <div
        className="bg-gray-400 shadow rounded-2xl
 p-4 mb-4 border-2 w-100 border-white hover:scale-95 m-2"
      >
        <h3 className="text-white text-center text-2xl font-bold mb-2">
          {trip.city.split(",")[0]}
        </h3>
        <div className="w-full h-48 relative">
          <img
            className="rounded-2xl mb-2 w-full h-full object-cover"
            src={trip.images?.[0]}
            alt="Så här kan det se ut på ditt resmål."
          />
        </div>

        <p className="text-gray-600 mb-2 text-center">{trip.date}</p>
      </div>
    </Link>
  );
};

export default TripCard;
