"use client";
import { removeCustomer } from "@/redux/features/customersSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import UniqueStringDisplay from "../UniqueStringDisplay/UniqueStringDisplay";
import CustomerFood from "../CustomerFood/CustomerFood";
import CustomerDrink from "../CustomerDrink/CustomerDrink";
import CustomerOther from "../CustomerOther/CustomerOther";

const CustomerCard = () => {
  const customers = useSelector((state: RootState) => state.customers.value);

  const dispatch = useDispatch();
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
            <div className="customer-food-name-container">
              <h4>{c.customerName}</h4>
              <p>{c.numerOfCustomers}👫</p>
            </div>
            <b className="customer-food-card-subtotal">
              $ {c.subtotal.toFixed(2)}
            </b>
          </div>
          <div className="customer-foods-container">
            <div className="customer-food">
              <CustomerFood
                id={c.id}
                customerName={c.customerName}
                numerOfCustomers={c.numerOfCustomers}
                subtotal={c.subtotal}
              />{" "}
              <UniqueStringDisplay array={c.food ? c.food : []} />
            </div>
            <div className="customer-food">
              <CustomerDrink
                id={c.id}
                customerName={c.customerName}
                numerOfCustomers={c.numerOfCustomers}
                subtotal={c.subtotal}
              />
              <UniqueStringDisplay array={c.drinks ? c.drinks : []} />
            </div>
            <div className="customer-food">
              <CustomerOther
                id={c.id}
                customerName={c.customerName}
                numerOfCustomers={c.numerOfCustomers}
                subtotal={c.subtotal}
              />
              <UniqueStringDisplay array={c.others ? c.others : []} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CustomerCard;
