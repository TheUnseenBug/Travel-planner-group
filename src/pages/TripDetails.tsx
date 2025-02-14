import Map from "../components/map/MapComponent.tsx";
import { useParams } from "react-router-dom";
import { RootState, Trip } from "../types/types.ts";
import { useDispatch, useSelector } from "react-redux";
import TripImage from "../components/TripImage/TripImage";
import { editTrip, removeTrip } from "../helpers/trip.ts";
import Button from "../components/button.tsx";
import Modal from "../components/modal.tsx";
import Delete from "../components/delete.tsx";
import { useState } from "react";

const TripDetails: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
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
      <div>
        <h2 className="text-2xl font-bold mb-2">{trip.city}</h2>
        <TripImage city={trip.city} />
        <p className="text-gray-600 mb-2">{trip.date}</p>
        <Button text="Delete" onClick={() => setOpen(true)} />

        <Modal open={open} setOpen={setOpen}>
          <Delete setOpen={setOpen} trip={trip} />
        </Modal>
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
        <Map city={trip.city} />
      </div>
    </>
  );
};

export default TripDetails;
