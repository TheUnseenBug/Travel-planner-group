import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Trip } from '../types/trip';

interface TripState {
  trips: Trip[];
}

const initialState: TripState = {
  trips: [],
};

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    addTrip: (state: TripState, action: PayloadAction<Trip>) => {
      state.trips = [...state.trips, action.payload];
    },
  },
});

export const { addTrip } = tripSlice.actions;

export default tripSlice.reducer;
