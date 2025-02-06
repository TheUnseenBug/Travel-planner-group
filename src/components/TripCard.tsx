import { Trip } from "../types/trip.ts";

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">{trip.city}</h2>
      <p className="text-gray-600 mb-2">
        <strong>Date:</strong> {trip.date}
      </p>
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
  );
};

export default TripCard;
