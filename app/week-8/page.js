"use client"
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdea from "./meal-ideas";

export default function Page() {
  let itemArray = itemsData.map((item) => ({ ...item }));
  const [items, setItems] = useState(itemArray)
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

 const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className=" bg-slate-800">
      <h1 className="text-3xl text-sky-100 font-bold m-2">Shopping List</h1>
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <MealIdea ingredient={selectedItemName} />
    </main>
  );
}
