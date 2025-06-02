"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    let currentQuantity = quantity.valueOf();
    if (currentQuantity < 20) {
      setQuantity(currentQuantity + 1);
    }
  };

  const decrement = () => {
    let currentQuantity = quantity.valueOf();
    if (currentQuantity > 1) {
      setQuantity(currentQuantity - 1);
    }
  };

  let baseButtonStyle = "w-8 rounded text-white";
  const isIncrementDisabled = quantity === 20;
  const isDecrementDisabled = quantity === 1;

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
          disable={isDecrementDisabled}
          className={GetButtonStyle(isDecrementDisabled)}
          onClick={decrement}
        >
          -
        </button>
        <button
          disable={isIncrementDisabled}
          className={GetButtonStyle(isIncrementDisabled)}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
