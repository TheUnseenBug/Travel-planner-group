import { FC } from "react";
import TripCard from "./TripCard";
import mockTrips from "./TripCard";

interface TripCardProps {
  trip: Trip;
  onEdit?: (trip: Trip) => void;
  onDelete?: (id: string) => void;
}

const TripList: FC = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {mockTrips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </section>
  );
};

export default TripList;
