"use client";

import { useState } from "react";
import type { Meal } from "@/types/Meal";
import IngredientInput from "@/components/IngredientInput";
import MealForm from "@/components/MealForm";
import MealSuggestion from "@/components/MealSuggestion";
import { suggestMeal } from "../services/mealService";

function MealBuilder() {
  const [suggestion, setSuggestion] = useState<Meal>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const [cuisine, setCuisine] = useState<string>("American");
  const [servings, setServings] = useState<number>(2);
  const [mealTime, setMealTime] = useState<string>("Breakfast");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rateLimited, setRateLimited] = useState(false);

  const addIngredient = () => {
    const trimmed = input.trim();
    if (trimmed && !ingredients.includes(trimmed)) {
      setIngredients((prev) => [...prev, trimmed]);
      setInput("");
    }
  };

  const removeIngredient = (toRemove: string) => {
    setIngredients((prev) => prev.filter((ing) => ing !== toRemove));
  };

  const updateIngredient = (oldIng: string, newIng: string) => {
    setIngredients((prev) =>
      prev.map((ing) => (ing === oldIng ? newIng : ing))
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addIngredient();
    }
  };

  const handleSuggestMeal = async () => {
    setError(null);
    setLoading(true);
    setRateLimited(false);

    try {
      const meal = await suggestMeal({
        ingredients,
        cuisine,
        servings,
        mealTime,
      });
      setSuggestion(meal);
    } catch (err: any) {
      let msg = "Failed to get meal suggestion.";
      try {
        const parsed = JSON.parse(err.message);
        msg = parsed.error || msg;
      } catch {
        msg = err.message || msg;
      }

      if (msg.toLowerCase().includes("log in")) {
        setRateLimited(true);
      }

      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Build Your Recipe</h1>

      <MealForm
        cuisine={cuisine}
        setCuisine={setCuisine}
        servings={servings}
        setServings={setServings}
        mealTime={mealTime}
        setMealTime={setMealTime}
      />

      <IngredientInput
        ingredients={ingredients}
        input={input}
        setInput={setInput}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        updateIngredient={updateIngredient}
        handleKeyDown={handleKeyDown}
      />

      <button
        onClick={handleSuggestMeal}
        disabled={loading || rateLimited}
        className={`mt-4 font-semibold px-4 py-2 rounded ${
          loading || rateLimited
            ? "bg-orange-300 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600 text-white"
        }`}
      >
        Suggest a Meal
      </button>
      {loading && !rateLimited && (
        <div className="animate-pulse mt-4 text-orange-500 font-semibold">
          Generating meal...
        </div>
      )}

      {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}

      <MealSuggestion suggestion={suggestion} />
    </div>
  );
}

export default MealBuilder;
