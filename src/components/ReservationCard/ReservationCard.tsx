"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { deleteReservation } from "@/redux/features/reservationSlice";
import { Customer, addCustomer } from "@/redux/features/customersSlice";

const ReservationCard = () => {
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const dispatch = useDispatch();

  const handleDeleteReservation = (customerName: Customer, i: number) => {
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
    <>
      {reservations.map((reserv, index) => (
        <div
          onClick={() => handleDeleteReservation(reserv, index)}
          className="reservation-card-container"
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
    </>
  );
};

export default ReservationCard;
