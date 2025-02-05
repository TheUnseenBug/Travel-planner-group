import Header from '../components/nav/Header';
import Footer from '../components/nav/Footer';

function Home() {
    return (
        <>
           <Header /> 
            <main>
                <h1>Travel Planner</h1>
                <h2>Are you ready to plan your next dream trip?</h2>
                <div>
                    <h3>Your Upcoming Trips</h3>
                        <section className="displayNextTrips">
                            {/* dynamic display */}
                        </section>
                </div>
            </main>
           <Footer />
        </>
    )
}

export default Home;