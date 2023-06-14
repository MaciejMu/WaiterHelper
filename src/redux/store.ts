import { configureStore } from "@reduxjs/toolkit";
import reservations from "./features/reservationSlice";
import customers from "./features/customersSlice";

export const store = configureStore({
  reducer: { reservations, customers },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
