"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // Next.js optimized Image

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null); // Stores the selected meal details

  // Fetch meal ideas from TheMealDB API
  useEffect(() => {
    if (!ingredient) return;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals || []))
      .catch((err) => console.error("Error fetching meal ideas:", err));
  }, [ingredient]);

  // Fetch full meal details including ingredients
  const fetchMealDetails = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      setSelectedMeal(data.meals[0]); // Set selected meal details
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">{`Meal Ideas for ${ingredient}`}</h2>
      
      {/* Meal List */}
      <ul className="space-y-3">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex items-center space-x-4 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition"
              onClick={() => fetchMealDetails(meal.idMeal)} // Fetch details when clicked
            >
              <Image src={meal.strMealThumb} alt={meal.strMeal} width={64} height={64} className="rounded-md" />
              <span className="font-medium">{meal.strMeal}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-400">No meal ideas found.</p>
        )}
      </ul>

      {/* Expanded Meal Details */}
      {selectedMeal && (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold">{selectedMeal.strMeal}</h3>
          <Image src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} width={300} height={200} className="rounded-lg mt-3" />
          
          {/* Ingredients List */}
          <h4 className="text-lg font-semibold mt-4">Ingredients:</h4>
          <ul className="list-disc list-inside text-gray-300">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
              const ingredient = selectedMeal[`strIngredient${i}`];
              const measure = selectedMeal[`strMeasure${i}`];
              return ingredient ? <li key={i}>{`${measure} ${ingredient}`}</li> : null;
            })}
          </ul>

          {/* Instructions */}
          <h4 className="text-lg font-semibold mt-4">Instructions:</h4>
          <p className="text-gray-300">{selectedMeal.strInstructions}</p>

          {/* Close Button */}
          <button
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            onClick={() => setSelectedMeal(null)}
          >
            Close Details
          </button>
        </div>
      )}
    </div>
  );
}
