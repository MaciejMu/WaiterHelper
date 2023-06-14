"use client";
import {
  Customer,
  Foods,
  addFood,
  removeCustomer,
} from "@/redux/features/customersSlice";
import { RootState } from "@/redux/store";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomerCard = () => {
  const [customerFood, setCustomerFood] = useState("");

  const customers = useSelector((state: RootState) => state.customers.value);

  const dispatch = useDispatch();

  const handleAddCustomer = (id: string) => {
    if (!customerFood) return;
    dispatch(addFood({ id, food: customerFood }));
    setCustomerFood("");
    console.log(customers);
  };

  const handleDeletecustomer = (i: number) => {
    dispatch(removeCustomer(i));
  };

  return (
    <>
      {customers.map((c, i) => (
        <div className="customer-food-card-container" key={c.id}>
          <div className="customer-food-card-customer-info">
            <button
              className="customer-food-card-button"
              onClick={() => handleDeletecustomer(i)}
            >
              X
            </button>
            <div>
              <p>{c.customerName}</p>
              <p>{c.numerOfCustomers}👫</p>
            </div>
            <p className="customer-food-card-subtotal">$ {c.subtotal}</p>
          </div>
          <div className="customer-foods-container">
            <div className="customer-food">
              {c.food?.map((f) => (
                <p key={nanoid(2)}>{f}</p>
              ))}
            </div>
            <div className="customer-food-input-container">
              <input
                value={customerFood}
                onChange={(e) => setCustomerFood(e.target.value)}
              />
              <button onClick={() => handleAddCustomer(c.id)}>Add</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CustomerCard;
