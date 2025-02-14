import { Outlet } from "react-router-dom";
import "../components/nav/Navbar.css";
import { Navbar } from "../components/nav/Header";
import Footer from "../components/nav/Footer";

export default function RootLayout() {
  return (
    <div className="nav-layout w-full font-mono">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
