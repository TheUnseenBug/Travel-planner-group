import { Outlet } from "react-router-dom";
import "../components/nav/Navbar.css";
import { Navbar } from "../components/nav/Header";
import Footer from "../components/nav/Footer";
import RotatingBackground from "../components/RotatingBackground";

export default function RootLayout() {
  return (
    <div className="nav-layout w-full font-mono">
      <Navbar />
      <main>
        <RotatingBackground>
          {" "}
          <Outlet />
        </RotatingBackground>
      </main>
      <Footer />
    </div>
  );
}
