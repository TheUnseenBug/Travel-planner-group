export interface Trip {
  id: string;
  activities?: string[];
  date?: string;
  city: string;
  images?: string[];
}

export interface Notification {
  message: string;
  visible: boolean;
}
export interface TripState {
  trips: Trip[];
}

export interface RootState {
  trip: {
    trips: Trip[];
  };
  notif: {
    notification: Notification;
  };
}
