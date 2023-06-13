"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { deleteReservation } from "@/redux/features/reservationSlice";

const ReservationCard = () => {
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const dispatch = useDispatch();

  const handleDeleteReservation = (i: number) => {
    dispatch(deleteReservation(i));
  };

  return (
    <>
      {reservations.map((reserv, index) => (
        <div
          onClick={() => handleDeleteReservation(index)}
          key={reserv.customerName}
          className="reservation-card-container"
        >
          <p>{reserv.customerName}</p>
          <p>{reserv.numerOfCustomers}👫</p>
        </div>
      ))}
    </>
  );
};

export default ReservationCard;
