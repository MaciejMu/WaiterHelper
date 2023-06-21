import React, { useState } from "react";
import UniqueStringDisplay from "../UniqueStringDisplay/UniqueStringDisplay";
import { useDispatch } from "react-redux";
import {
  Customer,
  addFood,
  addToSubtotal,
} from "@/redux/features/customersSlice";

const CustomerFood = (c: Customer) => {
  const [customerFood, setCustomerFood] = useState("");

  const dispatch = useDispatch();

  const handleAddFood = (id: string) => {
    if (!customerFood) return;
    const [food, price] = customerFood.split(":");
    dispatch(addFood({ id, food: food }));
    dispatch(addToSubtotal({ id, subtotal: parseFloat(price) }));
    setCustomerFood("");
  };

  return (
    <div className="customer-food-select-container">
      <label htmlFor="drinks">
        <h4>Food</h4>
      </label>
      <div className="customer-food-select">
        <select
          name="food"
          value={customerFood}
          onChange={(e) => {
            setCustomerFood(e.target.value);
          }}
        >
          <option></option>
          <option value="Classic Cheeseburger:9.99">
            Classic Cheeseburger
          </option>
          <option value="Margherita Pizza:12.99">Margherita Pizza</option>
          <option value="Grilled Chicken Sandwich:8.99">
            Grilled Chicken Sandwich
          </option>
          <option value="Spaghetti Bolognese:11.99">Spaghetti Bolognese</option>
          <option value="Caesar Salad:7.99">Caesar Salad</option>
          <option value="Fish and Chips:10.99">Fish and Chips</option>
          <option value="Veggie Wrap:9.49">Veggie Wrap</option>
          <option value="Beef Tacos:10.99">Beef Tacos</option>
          <option value="Chicken Stir-Fry:11.49">Chicken Stir-Fry</option>
          <option value="Mushroom Risotto:9.99">Mushroom Risotto</option>
        </select>
        <button onClick={() => handleAddFood(c.id)}>+</button>
      </div>
    </div>
  );
};

export default CustomerFood;
