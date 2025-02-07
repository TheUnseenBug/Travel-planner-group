import { useSelector } from "react-redux";
import Footer from "../components/nav/Footer";
import { RootState } from "../types/trip";
import RotatingBackground from "../components/RotatingBackground";
import TripList from "../components/TripList";
import { Link } from "react-router-dom";

function Home() {
  const trips = useSelector((state: RootState) => state.trip.trips);
  console.log(trips);
  return (
    <>
      <RotatingBackground>
        <main className="m-5 h-screen flex justify-start items-center flex-col">
          <h1 className="text-6xl m-5">Reseplaneraren</h1>
          <h2 className="m-5">Är du redo att planera din nästa drömresa?</h2>
          <Link className="p-2 hover:text-white font-bold" to="/AddTrip">
            Lägg till ny resa
          </Link>
          <div>
            <h3 className="text-xl underline .mb-20">Kommande Resor</h3>
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
