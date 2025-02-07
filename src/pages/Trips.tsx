import { useSelector } from "react-redux";
import TripList from "../components/TripList";
import { RootState } from "../types/types";

function Trips() {
  const trips = useSelector((state: RootState) => state.trip.trips);
  return (
    <>
      <TripList trips={trips} />
    </>
  );
}

export default Trips;
