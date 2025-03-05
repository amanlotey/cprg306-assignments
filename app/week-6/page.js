"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    return sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category);
  });

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-500 text-black" : "bg-red-200"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-red-200"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      <ul className="border rounded-lg p-4 bg-black shadow">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
