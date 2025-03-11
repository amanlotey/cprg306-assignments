"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const categories = ["Produce", "Dairy", "Bakery", "Meat", "Canned Goods", "Household"];

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!name.trim()) return; // Prevent adding empty items

    const newItem = {
      id: Date.now().toString(), // Generate unique ID
      name,
      quantity,
      category
    };

    onAddItem(newItem); // Pass new item to parent
    setName(""); // Reset input fields
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-300">Item Name:</label>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 text-black rounded-lg"
          placeholder="Enter item name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-300">Category:</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="w-full p-2 text-black rounded-lg"
        >
          {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <span className="text-gray-300">Quantity: {quantity}</span>
        <div className="flex space-x-2">
          <button type="button" onClick={() => setQuantity((q) => Math.max(q - 1, 1))} className="px-3 py-1 bg-gray-500 text-white rounded-lg">-</button>
          <button type="button" onClick={() => setQuantity((q) => Math.min(q + 1, 20))} className="px-3 py-1 bg-gray-500 text-white rounded-lg">+</button>
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Add Item
      </button>
    </form>
  );
}
