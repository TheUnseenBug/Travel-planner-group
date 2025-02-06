import { FC } from "react";
import { Trip } from "../types/trip";
import Button from "./button.tsx";

interface TripCardProps {
  trip: Trip;
  onEdit?: (trip: Trip) => void;
  onDelete?: (id: string) => void;
}

// Mock data for testing
const mockTrips: Trip[] = [
  {
    id: "1",
    city: "Paris",
    date: "2025-04-10",
    activities: [
      "Visit Eiffel Tower",
      "Explore Louvre Museum",
      "Walk along the Seine",
    ],
  },
  {
    id: "2",
    city: "Tokyo",
    date: "2025-06-15",
    activities: [
      "Visit Shibuya",
      "Try sushi at Tsukiji Market",
      "Explore Akihabara",
    ],
  },
  {
    id: "3",
    city: "New York",
    date: "2025-09-22",
    activities: [
      "Walk in Central Park",
      "Visit Times Square",
      "See a Broadway show",
    ],
  },
];

const TripCard: FC<TripCardProps> = ({ trip, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-white/5 rounded-xl shadow-md text-white w-full max-w-md">
      <h2 className="text-lg font-semibold">{trip.city}</h2>
      <p className="text-sm text-white/70">{trip.date}</p>
      <div className="mt-2">
        <h3 className="text-sm font-medium">Activities:</h3>
        <ul className="list-disc list-inside text-white/80">
          {trip.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex justify-between">
        {onEdit && <Button text="Edit" onClick={() => onEdit(trip)} />}
        {onDelete && <Button text="Delete" onClick={() => onDelete(trip.id)} />}
      </div>
    </div>
  );
};

export default TripCard;
