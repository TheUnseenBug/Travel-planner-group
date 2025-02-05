export interface Trip {
  id: string;
  activities?: string[];
  date?: string;
  city: string;
  image?: string;
}

export interface TripStore {
  Trips: Trip[];
  addTrip: (Trip: Trip) => void;
  removeTrip: (id: string) => void;
  editTrip: (Trip: Trip) => void;
  getTrip: (id: string ) => Trip | undefined;
}
