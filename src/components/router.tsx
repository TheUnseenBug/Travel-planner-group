import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NavLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AddTrip from "../pages/AddTrip";
import NotFound from "../pages/NotFound";
import TripDetails from "../pages/TripDetails";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Home />} />
      <Route path="AddTrip" element={<AddTrip />} />

      <Route path="TripDetails" element={<TripDetails />} />

      {/* FIX ME */}
      {/* <Route path=":id" element={<TripDetails />} loader={tripDetailsLoader} /> */}

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
