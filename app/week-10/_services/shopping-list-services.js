import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  if (!userId) {
    throw new Error("userId is required to fetch items.");
  }

  const items = [];
  const q = query(collection(db, "users", userId, "items"));

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}

export async function addItem(userId, item) {
  if (!userId || !item) {
    throw new Error("Both userId and item are required to add a new item.");
  }

  const itemsRef = collection(db, "users", userId, "items");

  try {
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
}


