"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import { useState, useEffect } from "react";
import MealIdea from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-services";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const { user } = useUserAuth();

    const loadItems = async () => {
    if (!user?.uid) return;
    try {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    } catch (error) {
      console.error("Failed to load items:", error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user?.uid]); 

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

   const handleAddItem = async (newItem) => {
    if (!user?.uid || !newItem) return;
    try {
      const newId = await addItem(user.uid, newItem);
      const itemWithId = { id: newId, ...newItem };
      setItems((prevItems) => [...prevItems, itemWithId]);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
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

export async function loadItems(){
  const { user } = useUserAuth();
  if (!user) {
    return [];
  }

  try {
    const items = await getItems(user.uid);
    return items;
  } catch (error) {
    console.error("Error loading items:", error);
    return [];
  }
}