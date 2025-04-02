"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to add items
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Function to clean item name and set selected ingredient
  const handleItemSelect = (name) => {
    const cleanedName = name.split(",")[0].trim().replace(/[\u{1F300}-\u{1FAD6}]/gu, "");
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-4xl">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
