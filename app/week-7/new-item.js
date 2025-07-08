"use client";
import { useState } from "react";

export default function NewItem() {
  // Form Control States
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  // Function to increment the quantity
  const increment = () => {
    let currentQuantity = quantity.valueOf();
    if (currentQuantity < 20) {
      setQuantity(currentQuantity + 1);
    }
  };

  // Function to decrement the quantity
  const decrement = () => {
    let currentQuantity = quantity.valueOf();
    if (currentQuantity > 1) {
      setQuantity(currentQuantity - 1);
    }
  };

  // Form Control Functions for Name and Category
  const handleNameChange = (event) => setName(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  // Form Submission Function
  const handleSubmit = (event) => {
    event.preventDefault();
    let item = {
      itemName: name,
      itemCategory: category,
      itemQuantity: quantity,
    };
    console.log(item);
    alert(
      `
      Name: ${item.itemName}
      Category: ${item.itemCategory}  
      Quantity: ${item.itemQuantity}
      `
    );

    setName("");
    setCategory("produce");
    setQuantity(1);
  };

  // Base button style
  let baseButtonStyle = "w-8 rounded text-white";
  const isIncrementDisabled = quantity === 20;
  const isDecrementDisabled = quantity === 1;

  // Function to get the button style based on whether it is disabled
  const GetButtonStyle = (isDisabled) => {
    if (isDisabled) {
      return `${baseButtonStyle} bg-gray-400`;
    } else {
      return `${baseButtonStyle} bg-blue-600 hover:bg-blue-800 cursor-pointer`;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 m-2 bg-blue-100 max-w-sm w-full rounded"
    >
      <div className="mb-2">
        <input
          type="text"
          placeholder="Item name"
          className="p-1 w-full text-black border-2 border-blue-600 rounded"
          onChange={handleNameChange}
          value={name}
          required
        ></input>
      </div>
      <div className="flex justify-between mb-2">
        <div>
          <div className="flex justify-between bg-white w-35 rounded p-2 border-2 border-blue-600">
            <span className="text-black">{quantity}</span>
            <div className="flex gap-2">
              <button
                disabled={isDecrementDisabled}
                className={GetButtonStyle(isDecrementDisabled)}
                onClick={decrement}
              >
                -
              </button>
              <button
                disabled={isIncrementDisabled}
                className={GetButtonStyle(isIncrementDisabled)}
                onClick={increment}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <select
          className="px-2 py-1 rounded text-black border-2 border-blue-600 bg-white"
          value={category}
          onChange={handleCategoryChange}
          required
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="w-full">
        <button className="p-2 w-full rounded bg-blue-600">Summit</button>
      </div>
    </form>
  );
}
