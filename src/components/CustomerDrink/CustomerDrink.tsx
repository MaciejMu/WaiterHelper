import {
  Customer,
  addDrink,
  addToSubtotal,
} from "@/redux/features/customersSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import UniqueStringDisplay from "../UniqueStringDisplay/UniqueStringDisplay";

function CustomerDrink(c: Customer) {
  const [customerDrinks, setCustomerDrinks] = useState("");
  const dispatch = useDispatch();

  const handleAddDrinks = (id: string) => {
    if (!customerDrinks) return;
    const [drink, price] = customerDrinks.split(":");
    dispatch(addDrink({ id, drink: drink }));
    dispatch(addToSubtotal({ id, subtotal: parseFloat(price) }));
    setCustomerDrinks("");
  };
  return (
    <div className="customer-food-select-container">
      <label htmlFor="drinks">
        <h4>Drinks</h4>
      </label>
      <div className="customer-food-select">
        <select
          name="drinks"
          value={customerDrinks}
          onChange={(e) => {
            setCustomerDrinks(e.target.value);
          }}
        >
          <option></option>
          <option value="Coca-Cola:2.49">Coca-Cola</option>
          <option value="Fresh Orange Juice:3.99">Fresh Orange Juice</option>
          <option value="Iced Caramel Latte:4.99">Iced Caramel Latte</option>
          <option value="Lemonade:2.99">Lemonade</option>
          <option value="Bottled Water:1.99">Bottled Water</option>
        </select>
        <button onClick={() => handleAddDrinks(c.id)}>+</button>
      </div>
    </div>
  );
}

export default CustomerDrink;
