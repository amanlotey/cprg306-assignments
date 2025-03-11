"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Create a sorted copy of items
  const sortedItems = [...items].sort((a, b) =>
    sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );

  return (
    <div className="max-w-md mx-auto mt-6">
      <div className="flex gap-4 mb-4 justify-center">
        <button
          className={`px-4 py-2 rounded-md transition ${
            sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-600 hover:bg-gray-500"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 rounded-md transition ${
            sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-600 hover:bg-gray-500"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>

      <ul className="border border-gray-700 rounded-lg p-4 bg-gray-900 shadow-lg">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
