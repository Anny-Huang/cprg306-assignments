"use client"
import { useState, useEffect } from "react";

export default function MealIdea({ingredient }) {

    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
  <div>
    <h2>Meal Ideas</h2>
    {!ingredient ? (
      <p>Select an item to see meal ideas.</p>
    ) : meals.length === 0 ? (
      <p>No meal ideas found for "{ingredient}".</p>
    ) : (
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    )}
  </div>
);

}


export async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch meals for ${ingredient}`);
    }

    const data = await response.json();
    return data.meals || []; // returns [] if no meals found
  } catch (error) {
    console.error('Error fetching meal ideas:', error.message);
    return [];
  }
}