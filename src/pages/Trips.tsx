import { useSelector } from "react-redux";
import TripList from "../components/TripList";
import { RootState } from "../types/types";
// import RotatingBackground from "../components/RotatingBackground";

function Trips() {
  const trips = useSelector((state: RootState) => state.trip.trips);
  return (
    <>
      {/* <RotatingBackground> */}
      <TripList trips={trips} />
      {/* </RotatingBackground> */}
    </>
  );
}

export default Trips;
