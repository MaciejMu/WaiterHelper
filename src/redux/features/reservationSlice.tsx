import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: { customerName: string; numerOfCustomers: string }[];
};

const initialState: InitialState = {
  value: [],
};
export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (
      state,
      action: PayloadAction<{ customerName: string; numerOfCustomers: string }>
    ) => {
      state.value.push(action.payload);
    },
    deleteReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, deleteReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
