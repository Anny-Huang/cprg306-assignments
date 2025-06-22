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

  let grouped = {};
  let sortedCategoryKeys = [];
  if (sortBy === "group") {
    grouped = itemArray.reduce((acc, item) => {
      const group = item.category;
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(item);
      return acc;
    }, {});

    // Sort each group by name
    Object.keys(grouped).forEach((category) => {
      grouped[category].sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    });

    // Sort the category keys alphabetically
    sortedCategoryKeys = Object.keys(grouped).sort((a, b) => {
      const categoryA = a.toUpperCase();
      const categoryB = b.toUpperCase();
      if (categoryA < categoryB) return -1;
      if (categoryA > categoryB) return 1;
      return 0;
    });
  }

  return (
    <div >
      <div className="mb-4">
        <label className="font-bold ml-3 text-sky-100 text-2xl ">Sort By: </label>
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
        <button
          className="bg-amber-600 p-2 rounded-3xl ml-2"
          value="group"
          onClick={handleSortByChange}
        >
          Group Category
        </button>
      </div>

      {sortBy === "group" ? (
        sortedCategoryKeys.map((category) => (
          <div key={category} className="mb-4 ">
            <h3 className="text-xl font-bold ml-4 text-sky-100 capitalize">{category}</h3>
            <ul>
              {grouped[category].map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))
      ) : (
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
      )}
    </div>
  );
}
