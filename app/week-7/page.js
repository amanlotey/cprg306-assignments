"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  
  const [items, setItems] = useState(itemsData);


  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

     
      <NewItem onAddItem={handleAddItem} />

   
      <ItemList items={items} />
    </main>
  );
}
