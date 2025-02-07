import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "../types/types";

interface NotificationState {
  notification: Notification;
}

const initialState: NotificationState = {
  notification: {
    message: "",
    visible: false,
  },
};

export const notificationSlice = createSlice({
  name: "notif",
  initialState,
  reducers: {
    showNotification: (
      state: NotificationState,
      action: PayloadAction<Notification>
    ) => {
      state.notification.message = action.payload.message;
      state.notification.visible = true;
    },
    hideNotification: (
      state: NotificationState,
      action: PayloadAction<Notification>
    ) => {
      state.notification.message = action.payload.message;
      state.notification.visible = false;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
