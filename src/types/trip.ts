export interface Trip {
  id: string;
  activities?: string[];
  date?: string;
  city: string;
  image?: string;
}
export interface TripState {
  trips: Trip[];
}