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

  // // Get the most recent trip
  // const mostRecentTrip = sortedTrips.length > 0 ? sortedTrips[0] : null;
    // Get the three most recent trips
    const recentTrips = sortedTrips.slice(0, 3);
    const remainingTrips = sortedTrips.slice(3);

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
           {/* Show the three most recent trips */}
           <div className="mt-5 w-full flex flex-col items-center">
            {recentTrips.length > 0 ? (
              <>
                <h3 className="text-4xl font-mono text-white text-center mb-3">Dina nästa resor</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recentTrips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
                </div>
              </>
            ) : (
              <p className="text-white text-lg">Du har inga resor inplanerade.</p>
            )}
          </div>
        </main>
      </RotatingBackground>
      <Footer />
    </>
  );
}

export default Home;
