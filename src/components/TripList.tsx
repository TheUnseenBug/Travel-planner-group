import TripCard from "./TripCard";
import { Trip } from "../types/trip.ts";

interface TripListProps {
  trips: Trip[];
}

const TripList: React.FC<TripListProps> = ({ trips }) => {
  if (!trips) {
    return <div className="text-white p-4">Du har inga resor inplanerade.</div>;
  }
  return (
    <>
      <h2 className="text-center text-5xl m-5 underline">Dina resor</h2>
      <div className="flex flex-wrap col-end-4 gap-3 justify-center left">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </>
  );
};

export default TripList;
