import TripCard from "./TripCard";
import { Trip } from "../types/types.ts";
import { useMemo } from "react";

interface TripListProps {
  trips: Trip[];
}

const TripList: React.FC<TripListProps> = ({ trips }) => {
  if (!trips) {
    return <div className="text-white p-4">Du har inga resor inplanerade.</div>;
  }

  // const sortedTrips = [...trips].sort((a, b) => {
  //   if (!a.date) return 1;
  //   if (!b.date) return -1;
  //   return new Date(a.date).getTime() - new Date(b.date).getTime();
  // });

  // Memoize the sorted trips to avoid unnecessary sorting on every render
  const sortedTrips = useMemo(() => {
    return [...trips].sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }, [trips]);

  return (
    <div className="flex-column">
      <h1 className="lg:text-6xl md:text-4xl sm:text-4xl text-white text-center my-4">
        Dina resor
      </h1>
      <div className="flex flex-wrap col-end-4 gap-3 justify-center">
        {sortedTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default TripList;
