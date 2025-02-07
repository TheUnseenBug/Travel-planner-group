import TripCard from "./TripCard";
import { Trip } from "../types/types.ts";

interface TripListProps {
  trips: Trip[];
}

const TripList: React.FC<TripListProps> = ({ trips }) => {
  if (!trips) {
    return <div className="text-white p-4">Du har inga resor inplanerade.</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
};

export default TripList;
