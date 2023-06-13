"use client";
import { addReservation } from "@/redux/features/reservationSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddReservation = () => {
  const [customerName, setCustomerName] = useState("");
  const [numerOfCustomers, setNumerOfCustomers] = useState("2");

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!customerName) return;
    dispatch(addReservation({ customerName, numerOfCustomers }));
    setCustomerName("");
    setNumerOfCustomers("2");
  };
  return (
    <div className="reservation-input-container">
      <input
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <input
        type="number"
        value={numerOfCustomers}
        onChange={(e) => setNumerOfCustomers(e.target.value)}
      />
      <button onClick={() => handleAddReservation()}>Add</button>
    </div>
  );
};

export default AddReservation;
