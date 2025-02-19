import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "../helpers/trip";
import notificationReducer from "../helpers/notif";
export const store = configureStore({
  reducer: {
    trip: tripReducer,
    notif: notificationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
