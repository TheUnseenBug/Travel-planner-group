import { useSelector } from "react-redux";
import Footer from "../components/nav/Footer";
import Header from "../components/nav/Header";
import { RootState } from "../types/trip";
import TripList from "../components/TripList";
import { NavLink } from "react-router-dom";

function Home() {
  const trips = useSelector((state: RootState) => state.trip.trips);
  console.log(trips);
  return (
    <>
      <Header />
      <main>
        <h1>Travel Planner</h1>
        <h2>Are you ready to plan your next dream trip?</h2>
        <NavLink to="/AddTrip">Plan your next trip</NavLink>
        <div>
          <h3>Upcoming Trips</h3>
          <section className="displayNextTrips">
            <TripList trips={trips} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
