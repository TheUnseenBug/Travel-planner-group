import { Trip } from "../types/types.ts";
import { Link } from "react-router-dom";
import myImg from "../assets/myImg.jpg";

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <Link to={`/trips/${trip.id}`} className="block">
      <div className="bg-white shadow rounded p-4 mb-4">
        <h2 className="text-2xl font-bold mb-2">{trip.city}</h2>
        <img
          className="object-fit: scale-down"
          src={myImg}
          alt="Bild från staden du ska besöka"
        />
        <p className="text-gray-600 mb-2">{trip.date}</p>

        {trip.activities && trip.activities.length > 0 && (
          <div className="mt-2">
            <p className="font-semibold">Activities:</p>
            <ul className="list-disc list-inside">
              {trip.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Link>
  );
};

export default TripCard;
