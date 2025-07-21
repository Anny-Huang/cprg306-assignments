"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdea from "./meal-ideas";

export default function Page() {
  let itemArray = itemsData.map((item) => ({ ...item }));
  const [items, setItems] = useState(itemArray);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      <h1 className="text-3xl text-slate-100 font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-md m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm m-2">
          <MealIdea ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
