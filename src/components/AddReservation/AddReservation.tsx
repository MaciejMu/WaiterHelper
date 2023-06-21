"use client";
import { addReservation } from "@/redux/features/reservationSlice";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddReservation = () => {
  const [customerName, setCustomerName] = useState("");
  const [numerOfCustomers, setNumerOfCustomers] = useState("2");
  const [time, setTime] = useState("12:00");

  const dispatch = useDispatch();

  const handleAddReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!customerName) return;
    dispatch(
      addReservation({
        customerName,
        numerOfCustomers,
        time,
        id: nanoid(),
      })
    );
    setCustomerName("");
    setNumerOfCustomers("2");
    setTime("12:00");
  };
  return (
    <form
      className="reservation-input-container"
      onSubmit={handleAddReservation}
    >
      <input
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Reservation name"
      />
      <div className="reservation-input-numbers">
        <input
          type="number"
          min="1"
          max="12"
          value={numerOfCustomers}
          onChange={(e) => setNumerOfCustomers(e.target.value)}
        />
        <input
          type="time"
          min="12:00"
          max="22:00"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddReservation;
