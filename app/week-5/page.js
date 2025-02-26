"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const categories = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Goods",
    "Beverages",
    "Snacks",
    "Household",
    "Other",
  ];

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [quantity, setQuantity] = useState(0);

  const handleInputValue = (event) => setName(event.target.value);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (quantity === 0) {
      alert("Please select a quantity greater than 0.");
    } else {
      const item = { name, quantity, category };
      console.log("Submitted Item:", item);
      alert(
        `Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
      );

      
      setName("");
      setQuantity(0);
      setCategory("Produce");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 p-6 rounded-lg shadow-lg"
      >
        <div>
          <label htmlFor="name" className="block font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleInputValue}
            placeholder="Item name"
            required
            className="w-full p-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Quantity Counter */}
        <div className="flex justify-center items-center">
          <div className=" bg-gray-500 w-40 h-10 flex justify-between">
            <h1 className="px-4 flex items-center justify-center bg-black text-white w-16">
              {quantity}
            </h1>
            <button
              type="button"
              className={`w-12 h-full ${
                quantity <= 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-fuchsia-500"
              }`}
              disabled={quantity <= 0}
              onClick={decrement}
            >
              -
            </button>
            <button
              type="button"
              className={`w-12 h-full ${
                quantity >= 20
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-fuchsia-500"
              }`}
              disabled={quantity >= 20}
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>

        {/* Category Dropdown */}
        <div>
          <label htmlFor="category" className="block font-medium">
            Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-400"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Item
        </button>
      </form>

      <Link
        href="/"
        className="text-blue-500 hover:underline absolute top-4 right-4"
      >
        Back to home
      </Link>
    </main>
  );
}
