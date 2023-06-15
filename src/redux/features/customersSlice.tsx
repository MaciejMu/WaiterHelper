import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Customer = {
  id: string;
  customerName: string;
  numerOfCustomers: string;
  food?: string[];
  drinks?: string[];
  others?: string[];
  subtotal: number;
};

type initialState = {
  value: Customer[];
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
    addFood: (
      state,
      action: PayloadAction<{
        id: string;
        food: string;
      }>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food?.push(action.payload.food);
        }
      });
    },
    addDrink: (
      state,
      action: PayloadAction<{
        id: string;
        drink: string;
      }>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.drinks?.push(action.payload.drink);
        }
      });
    },
    addOther: (
      state,
      action: PayloadAction<{
        id: string;
        other: string;
      }>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.others?.push(action.payload.other);
        }
      });
    },
    addToSubtotal: (
      state,
      action: PayloadAction<{
        id: string;
        subtotal: number;
      }>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.subtotal += action.payload.subtotal;
        }
      });
    },
    removeCustomer: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export default customers.reducer;
export const {
  addCustomer,
  addFood,
  addDrink,
  addOther,
  addToSubtotal,
  removeCustomer,
} = customers.actions;
