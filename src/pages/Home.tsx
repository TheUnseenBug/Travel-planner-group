import { useSelector } from "react-redux";
import Footer from "../components/nav/Footer";
import Header from "../components/nav/Header";
import { RootState } from "../types/trip";

function Home() {
  const trips = useSelector((state: RootState) => state.trip.trips);
  console.log(trips);
  return (
    <>
      <Header />
      <main>
        <h1>Travel Planner</h1>
        <h2>Are you ready to plan your next dream trip?</h2>
        <div>
          <h3>Your Upcoming Trips</h3>
          <section className="displayNextTrips"></section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
