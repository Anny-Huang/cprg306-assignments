"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({items,onItemSelect}) {

  const handleSortByChange = (event) => setSortBy(event.target.value);
  const [sortBy, setSortBy] = useState("name");

  const handleItemClick = (itemName) => {
    if (onItemSelect) {
      onItemSelect(itemName);
    }
  };

  if (sortBy === "name" || sortBy === "category") {
    items.sort((a, b) => {
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
    grouped = items.reduce((acc, item) => {
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
        <label className="font-bold ml-3 text-slate-100 text-2xl ">Sort By: </label>
        <button
          className="bg-amber-600 p-2 rounded-3xl ml-2 cursor-pointer"
          value="name"
          onClick={handleSortByChange}
        >
          Name
        </button>
        <button
          className="bg-amber-600 p-2 rounded-3xl ml-2 cursor-pointer" 
          value="category"
          onClick={handleSortByChange}
        >
          Category
        </button>
        <button
          className="bg-amber-600 p-2 rounded-3xl ml-2 cursor-pointer"
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
            {items.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => handleItemClick(item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').split(',')[0])}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
