import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NavLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AddTrip from "../pages/AddTrip";
import NotFound from "../pages/NotFound";
import Trips from "../pages/Trips";
import TripDetails from "../pages/TripDetails";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Home />} />
      <Route path="AddTrip" element={<AddTrip />} />
      <Route path="trips" element={<Trips />} />
      <Route path="trips/:id" element={<TripDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
