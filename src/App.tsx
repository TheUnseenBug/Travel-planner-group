import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/home.tsx";
import AddTrip from "./pages/AddTrip.tsx";
import NotFound from "./pages/NotFound.tsx";

//layouts
import "./App.css";
import NavLayout from "./layouts/NavLayout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Home />} />
      <Route path="AddTrip" element={<AddTrip />} />

      {/* FIX ME */}
      {/* <Route path=":id" element={<TripDetails />} loader={tripDetailsLoader} /> */}

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
