import { Customer, addOther, addToSubtotal } from '@/redux/features/customersSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const CustomerOther = (c:Customer) => {
    const [customerOther, setCustomerOther] = useState("");
    const dispatch = useDispatch();

  const handleAddOther = (id: string) => {
    if (!customerOther) return;
    const [other, price] = customerOther.split(":");
    dispatch(addOther({ id, other: other }));
    dispatch(addToSubtotal({ id, subtotal: parseFloat(price) }));
    setCustomerOther("");
  };
  return (
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
  )
}

export default CustomerOther