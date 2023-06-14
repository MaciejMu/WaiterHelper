import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Customer = {
  id: string;
  customerName: string;
  numerOfCustomers: string;
  food?: string[];
  subtotal?: number;
};

type initialState = {
  value: Customer[];
};

export type Foods = {
  id: string;
  food: string;
};

const initialState: initialState = {
  value: [],
};

const customers = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFood: (state, action: PayloadAction<Foods>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food?.push(action.payload.food);
        }
      });
    },
    removeCustomer: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export default customers.reducer;
export const { addCustomer, addFood, removeCustomer } = customers.actions;
