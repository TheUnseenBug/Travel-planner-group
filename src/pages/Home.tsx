import { useSelector } from "react-redux";
import { RootState } from "../types/types";
import TripCard from "../components/TripCard";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";

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

  const navigate = useNavigate();

  // console.log(trips);
  return (
    <>
      <main className="m-5 flex justify-center items-center flex-col z-2 relative gap-10 my-14">
        <h1 className="lg:text-6xl md:text-4xl sm:text-4xl text-white text-center">
          Är du redo att planera nästa drömresa?
        </h1>

        <Button
          className="bg-blue-800 scale-200"
          onClick={() => navigate("/AddTrip")}
          text="Lägg till en ny resa"
        />

        {/* Show the three most recent trips */}
        <div className="mt-5 w-full flex flex-col items-center">
          {recentTrips.length > 0 ? (
            <>
              <h3 className="text-4xl font-mono text-white text-center mb-3">
                Dina kommande resor
              </h3>
              <div className="flex flex-wrap m-2 justify-center">
                {recentTrips.map((trip) => (
                  <TripCard key={trip.id} trip={trip} />
                ))}
              </div>
              <Button
                className="bg-blue-800 scale-200"
                onClick={() => navigate("/Trips")}
                text="Alla resor"
              />
            </>
          ) : (
            <p className="text-white text-lg">Du har inga inplanerade resor.</p>
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
