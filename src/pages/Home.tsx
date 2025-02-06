import { useSelector } from "react-redux";
import Footer from "../components/nav/Footer";
import { RootState } from "../types/trip";
import RotatingBackground from "../components/RotatingBackground";
import TripList from "../components/TripList";
import { NavLink } from "react-router-dom";

function Home() {
  const trips = useSelector((state: RootState) => state.trip.trips);
  console.log(trips);
  return (
    <>

        <Header />
    <RotatingBackground>
      <main className="m-5 h-screen flex justify-start items-center flex-col">
        <h1 className="text-6xl m-5">Reseplaneraren</h1>
        <h2 className="m-5">Är du redo att planera din nästa drömresa?</h2>
        <NavLink to="/AddTrip">Planera nästa resa</NavLink>
        <div>
          <h3 className="text-xl underline">Kommande Resor</h3>
          <section className="displayNextTrips">
            <TripList trips={trips} />
          </section>
        </div>
      </main>
      </RotatingBackground>
      <Footer />
    </>
  );
}

export default Home;