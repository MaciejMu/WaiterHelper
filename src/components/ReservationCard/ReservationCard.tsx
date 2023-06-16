"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  Reservation,
  deleteReservation,
} from "@/redux/features/reservationSlice";
import { addCustomer } from "@/redux/features/customersSlice";

const ReservationCard = () => {
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const dispatch = useDispatch();

  const handleDeleteReservation = (customerName: Reservation, i: number) => {
    dispatch(
      addCustomer({
        id: customerName.id,
        customerName: customerName.customerName,
        numerOfCustomers: customerName.numerOfCustomers,
        food: [],
        drinks: [],
        others: [],
        subtotal: 0,
      })
    );
    dispatch(deleteReservation(i));
  };

  return (
    <div className="reservation-card-container">
      {reservations.map((reserv, index) => (
        <div
          onClick={() => handleDeleteReservation(reserv, index)}
          className="reservation-card-item"
          key={reserv.id}
        >
          <div>
            <p>{reserv.customerName}</p>
            <p>{reserv.numerOfCustomers}👫</p>
          </div>
          <br />
          <p>{reserv.time}</p>
        </div>
      ))}
    </div>
  );
};

export default ReservationCard;
