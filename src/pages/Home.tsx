import { useSelector } from "react-redux";
import { RootState } from "../types/types";
import TripCard from "../components/TripCard";
import { Link } from "react-router-dom";

function Home() {
  const trips = useSelector((state: RootState) => state.trip.trips);

  // Sort trips and get three most recent
  const recentTrips = [...trips]
    .sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .slice(0, 3);

  // console.log(trips);
  return (
    <>
      <main className="h-screen m-5 flex justify-start items-center flex-col z-2 relative">
        <h1 className="lg:text-6xl md:text-4xl sm:text-4xl m-5 text-white">Reseplaneraren</h1>
        <h2 className="m-5 lg:text-4xl md:text-3xl sm:text-2xl italic text-white text-center">
          Är du redo att planera din nästa drömresa?
        </h2>
        <Link
          className="p-2 hover:underline text-white font-bold"
          to="/AddTrip"
        >
          Lägg till ny resa
        </Link>
        {/* Show the three most recent trips */}
        <div className="mt-5 w-full flex flex-col items-center">
          {recentTrips.length > 0 ? (
            <>
              <h3 className="text-4xl font-mono text-white text-center mb-3">
                Dina nästa resor
              </h3>
              <div className="flex flex-wrap m-2 justify-center">
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
    </>
  );
}

export default Home;
