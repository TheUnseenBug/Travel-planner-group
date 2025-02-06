import { configureStore } from '@reduxjs/toolkit';
import tripReducer from '../helpers/trip'; 
export const store = configureStore({
  reducer: {
    trip: tripReducer
  },
});