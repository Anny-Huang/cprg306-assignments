"use client";
import { useState } from "react";
import Item from "./item";
import itemData from "./items.json";

export default function ItemList() {
  let itemArray = itemData.map((item) => ({ ...item }));

  const handleSortByChange = (event) => setSortBy(event.target.value);
  const [sortBy, setSortBy] = useState("name");

  if (sortBy === "name" || sortBy === "category") {
    itemArray.sort((a, b) => {
      let nameA = a[sortBy].toUpperCase();
      let nameB = b[sortBy].toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  return (
    <div>
      <label className="font-bold ml-3 ">Sort By: </label>
      <button
        className="bg-amber-600 p-2 rounded-3xl ml-2"
        value="name"
        onClick={handleSortByChange}
      >
        Name
      </button>
      <button
        className="bg-amber-600 p-2 rounded-3xl ml-2"
        value="category"
        onClick={handleSortByChange}
      >
        Category
      </button>
      <div>
        <ul>
          {itemArray.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
