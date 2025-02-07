import { useSelector } from "react-redux";
import Footer from "../components/nav/Footer";
import { RootState } from "../types/types";
import RotatingBackground from "../components/RotatingBackground";
import TripList from "../components/TripList";
import TripCard from "../components/TripCard";
import { Link } from "react-router-dom";

function Home() {
  const trips = useSelector((state: RootState) => state.trip.trips);

   // Sort trips by date (assuming 'date' is in YYYY-MM-DD format)
   const sortedTrips = [...trips].sort((a: Trip, b: Trip) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Get the most recent trip
  const mostRecentTrip = sortedTrips.length > 0 ? sortedTrips[0] : null;

  console.log(trips);
  return (
    <>
      <RotatingBackground>
        <main className="m-5 h-screen flex justify-start items-center flex-col z-2 relative">
          <h1 className="text-6xl m-5 text-white">Reseplaneraren</h1>
          <h2 className="m-5 text-2xl italic text-white">Är du redo att planera din nästa drömresa?</h2>
          <Link className="p-2 hover:underline text-white font-bold" to="/AddTrip">
            Lägg till ny resa
          </Link>
          {/* <div>
            <h3 className="text-4xl font-mono text-white">Kommande Resor</h3>
            <section className="displayNextTrips">
              <TripList trips={trips} />
            </section>
          </div> */}
          {/* Show most recent trip */}
          <div className="mt-5 w-full flex justify-center">
            {mostRecentTrip ? (
              <div className="w-full md:w-1/2">
                <h3 className="text-4xl font-mono text-white text-center">Din nästa resa</h3>
                <TripCard trip={mostRecentTrip} />
              </div>
            ) : (
              <p className="text-white text-lg">Du har inga resor inplanerade.</p>
            )}
          </div>

          {/* Show list of upcoming trips */}
          {sortedTrips.length > 1 && (
            <div className="mt-5">
              <h3 className="text-4xl font-mono text-white">Kommande Resor</h3>
              <TripList trips={sortedTrips.slice(1)} /> {/* Exclude the first trip */}
            </div>
          )}
        </main>
      </RotatingBackground>
      <Footer />
    </>
  );
}

export default Home;
