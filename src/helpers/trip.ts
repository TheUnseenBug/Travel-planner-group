import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Trip } from "../types/trip";

interface TripState {
  trips: Trip[];
}

const initialState: TripState = {
  trips: [],
};

export const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    //Lägger till resa, state är det som är sparat, action.payload är resan som matas in.
    addTrip: (state: TripState, action: PayloadAction<Trip>) => {
      state.trips.push(action.payload);
    },
    //Redigerar resa
    editTrip: (state: TripState, action: PayloadAction<Trip>) => {
      state.trips = state.trips.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
    },
    //Tar bort resa
    removeTrip: (state: TripState, action: PayloadAction<Trip>) => {
      state.trips = state.trips.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { addTrip, editTrip, removeTrip } = tripSlice.actions;

export default tripSlice.reducer;
