import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Trip } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const UNSPLASH_ACCESS_KEY = "BtCx07O1WWnCeGBJCmyJJNxvcDH8KZj6Tai5k417mTM";

const fetchImages = async (city: string): Promise<any> => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=5`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results; // Assuming you want the 'results' array
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error; // Re-throw to let the Redux Toolkit handle the error state
  }
};

interface TripState {
  trips: Trip[];
  loading: boolean; // Add loading state
  error: string | null; // Add error state
}

const initialState: TripState = {
  trips: [],
  loading: false,
  error: null,
};

export const addTrip = createAsyncThunk(
  "trip/addTrip",
  async (
    tripData: Omit<Trip, "images">,
    { rejectWithValue }
  ): Promise<Trip | any> => {
    try {
      const images = await fetchImages(tripData.city);
      const tripWithImages = { ...tripData, images };
      return tripWithImages as Trip;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    editTrip: (state: TripState, action: PayloadAction<Trip>) => {
      return {
        ...state,
        trips: state.trips.map((t) =>
          t.id === action.payload.id ? { ...t, ...action.payload } : t
        ),
      };
    },
    // Tar bort resa
    removeTrip: (state: TripState, action: PayloadAction<Trip>) => {
      return {
        ...state,
        trips: state.trips.filter((t) => t.id !== action.payload.id),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTrip.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTrip.fulfilled, (state, action: PayloadAction<Trip>) => {
        state.loading = false;
        state.trips.push(action.payload);
      })
      .addCase(addTrip.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { editTrip, removeTrip } = tripSlice.actions; // Remove addTrip here too!

export default tripSlice.reducer;
