import Footer from "../components/nav/Footer";

function Home() {
  return (
    <>
      <main className="m-5 h-screen">
        <h1 className="text-6xl m-5">Reseplaneraren</h1>
        <h2 className="m-5">Är du redo att planera din nästa drömresa?</h2>
        <div>
          <h3 className="text-xl underline">Kommande Resor</h3>
          <section className="displayNextTrips">
            {/* dynamic display */}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
