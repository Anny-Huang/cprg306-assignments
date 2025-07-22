"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdea from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
  let itemArray = itemsData.map((item) => ({ ...item }));
  const [items, setItems] = useState(itemArray);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const { user } = useUserAuth();

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main>
      {user?(
      <div className="flex">
        <div className="flex-1 max-w-md m-2">
          <h1 className="text-3xl text-slate-100 font-bold m-2">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1 max-w-sm m-2">
          <MealIdea ingredient={selectedItemName} />
        </div>
      </div>
      ) : (
        <div>
          <p className="mb-4 text-xl">You need to be signed in to view this page.</p>
          <Link href="/week-9/" className="hover:underline">Click here to return to the sign in page.</Link>
        </div>
      )}
    </main>
  );
}
