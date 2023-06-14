import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type Reservation = {
  id: string;
  customerName: string;
  numerOfCustomers: string;
  time: string;
};

type InitialState = {
  value: Reservation[];
};

const initialState: InitialState = {
  value: [],
};
export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<Reservation>) => {
      state.value.push(action.payload);
    },
    deleteReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, deleteReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
