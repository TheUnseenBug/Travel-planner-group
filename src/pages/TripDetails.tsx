
// import TripCard from "../components/TripCard/TripCard";

import Map from "../components/map/MapComponent.tsx";

import TripList from "../components/TripList";


function TripDetails() {
  return (
    <>

      {/* <TripCard /> */}
      <Map />

      <h1 className="text-xl font-bold text-white">Your Trips</h1>
      <TripList />

    </>
  );
}

export default TripDetails;
