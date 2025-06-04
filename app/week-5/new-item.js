"use client";
import { useState } from "react";

export default function NewItem() {

  // State variables for quantity, name, and category
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const[category, setCategory] = useState("produce");

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
    <div className="flex justify-between bg-white max-w-35 rounded p-2 ml-auto mr-auto mt-5">
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
  );
}
