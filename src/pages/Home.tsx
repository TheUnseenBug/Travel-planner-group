import Footer from "../components/nav/Footer";
import Header from "../components/nav/Header";

function Home() {
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
