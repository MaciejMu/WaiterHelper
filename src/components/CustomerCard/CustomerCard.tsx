"use client";
import {
  addDrink,
  addFood,
  addOther,
  addToSubtotal,
  removeCustomer,
} from "@/redux/features/customersSlice";
import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UniqueStringDisplay from "../UniqueStringDisplay/UniqueStringDisplay";

const CustomerCard = () => {
  const [customerFood, setCustomerFood] = useState("");
  const [customerDrinks, setCustomerDrinks] = useState("");
  const [customerOther, setCustomerOther] = useState("");

  const customers = useSelector((state: RootState) => state.customers.value);

  const dispatch = useDispatch();

  const handleAddFood = (id: string) => {
    if (!customerFood) return;
    const [food, price] = customerFood.split(":");
    dispatch(addFood({ id, food: food }));
    dispatch(addToSubtotal({ id, subtotal: parseFloat(price) }));
    setCustomerFood("");
  };

  const handleAddDrinks = (id: string) => {
    if (!customerDrinks) return;
    const [drink, price] = customerDrinks.split(":");
    dispatch(addDrink({ id, drink: drink }));
    dispatch(addToSubtotal({ id, subtotal: parseFloat(price) }));
    setCustomerDrinks("");
  };

  const handleAddOther = (id: string) => {
    if (!customerOther) return;
    const [other, price] = customerOther.split(":");
    dispatch(addOther({ id, other: other }));
    dispatch(addToSubtotal({ id, subtotal: parseFloat(price) }));
    setCustomerOther("");
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
                    <option value="Margherita Pizza:12.99">
                      Margherita Pizza
                    </option>
                    <option value="Grilled Chicken Sandwich:8.99">
                      Grilled Chicken Sandwich
                    </option>
                    <option value="Spaghetti Bolognese:11.99">
                      Spaghetti Bolognese
                    </option>
                    <option value="Caesar Salad:7.99">Caesar Salad</option>
                    <option value="Classic Cheeseburger:9.99">
                      Classic Cheeseburger
                    </option>
                    <option value="Margherita Pizza:12.99">
                      Margherita Pizza
                    </option>
                    <option value="Grilled Chicken Sandwich:8.99">
                      Grilled Chicken Sandwich
                    </option>
                    <option value="Spaghetti Bolognese:11.99">
                      Spaghetti Bolognese
                    </option>
                    <option value="Caesar Salad:7.99">Caesar Salad</option>
                    <option value="Fish and Chips:10.99">Fish and Chips</option>
                    <option value="Veggie Wrap:9.49">Veggie Wrap</option>
                    <option value="Beef Tacos:10.99">Beef Tacos</option>
                    <option value="Chicken Stir-Fry:11.49">
                      Chicken Stir-Fry
                    </option>
                    <option value="Mushroom Risotto:9.99">
                      Mushroom Risotto
                    </option>
                  </select>
                  <button onClick={() => handleAddFood(c.id)}>+</button>
                </div>
              </div>
              <UniqueStringDisplay array={c.food ? c.food : []} />
            </div>
            <div className="customer-food">
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
                    <option value="Fresh Orange Juice:3.99">
                      Fresh Orange Juice
                    </option>
                    <option value="Iced Caramel Latte:4.99">
                      Iced Caramel Latte
                    </option>
                    <option value="Lemonade:2.99">Lemonade</option>
                    <option value="Bottled Water:1.99">Bottled Water</option>
                  </select>
                  <button onClick={() => handleAddDrinks(c.id)}>+</button>
                </div>
              </div>
              <UniqueStringDisplay array={c.drinks ? c.drinks : []} />
            </div>
            <div className="customer-food">
              <div className="customer-food-select-container">
                <label htmlFor="others">
                  <h4>Others</h4>
                </label>
                <div className="customer-food-select">
                  <select
                    name="others"
                    value={customerOther}
                    onChange={(e) => {
                      setCustomerOther(e.target.value);
                    }}
                  >
                    <option></option>
                    <option value="French Fries:3.49">French Fries</option>
                    <option value="Mozzarella Sticks:5.99">
                      Mozzarella Sticks
                    </option>
                    <option value="Chocolate Brownie:4.99">
                      Chocolate Brownie
                    </option>
                    <option value="Fruit Salad:6.99">Fruit Salad</option>
                  </select>
                  <button onClick={() => handleAddOther(c.id)}>+</button>
                </div>
              </div>
              <UniqueStringDisplay array={c.others ? c.others : []} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CustomerCard;
