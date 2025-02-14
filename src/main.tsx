import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App.tsx";
import { store, persistor } from "./stores/trip-store.ts";
import RotatingBackground from "./components/RotatingBackground.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RotatingBackground>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </RotatingBackground>
    </Provider>
  </StrictMode>
);
