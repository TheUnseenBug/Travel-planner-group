import Map from "../components/map/MapComponent.tsx";
import { useParams } from "react-router-dom";
import { RootState, Trip } from "../types/trip";
import { useSelector } from "react-redux";

const TripDetails: React.FC = () => {
  // Hämta ut id:t från URL-parametrarna
  const { id } = useParams<{ id: string }>();

  // Hämta trip-datan från Redux-staten baserat på id:t
  const trip = useSelector((state: RootState) =>
    state.trip.trips.find((trip: Trip) => trip.id.toString() === id)
  );

  if (!trip) {
    return <div className="text-white p-4">Resan kunde inte hittas</div>;
  }

  return (
    <>
      <div className="bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-2">{trip.city}</h2>
        <p className="text-gray-600 mb-2">{trip.date}</p>

        {trip.activities && trip.activities.length > 0 && (
          <div className="mt-2">
            <p className="font-semibold">Aktiviteter:</p>
            <ul className="list-disc list-inside">
              {trip.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        )}
        <Map />
      </div>
    </>
  );
};

export default TripDetails;
