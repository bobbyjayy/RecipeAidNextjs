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
    } catch (err: unknown) {
      let msg = "Failed to get meal suggestion.";
      let errMsg = "";
      if (err instanceof Error) {
        errMsg = err.message;
      }
      try {
        const parsed = JSON.parse(errMsg);
        msg = parsed.error || msg;
      } catch {
        msg = errMsg || msg;
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
    <div className="w-full min-h-screen relative p-4 md:p-8 bg-cream  ">
      <div className="grid grid-col-6 md:grid-cols-12 flex justify-center items-center  w-full max-w-6xl mx-auto  gap-6">
        {/* Header */}
        <div className="col-span-6 md:col-span-12  text-center ">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            What&apos;s in your fridge?
          </h1>
          <p className="hidden md:inline text-lg text-gray-600">
            Enter your ingredients below to generate a delicious recipe
          </p>
        </div>

        <div className="col-span-6 md:col-span-12  w-full ">
          <IngredientInput
            ingredients={ingredients}
            input={input}
            setInput={setInput}
            addIngredient={addIngredient}
            removeIngredient={removeIngredient}
            updateIngredient={updateIngredient}
            handleKeyDown={handleKeyDown}
          />
        </div>

        <div className="col-span-6 md:col-span-12 col-span-6 ">
          <MealForm
            cuisine={cuisine}
            setCuisine={setCuisine}
            servings={servings}
            setServings={setServings}
            mealTime={mealTime}
            setMealTime={setMealTime}
          />
        </div>

        <div className="col-span-6 md:col-span-12  flex justify-center ">
          <button
            onClick={handleSuggestMeal}
            disabled={loading || rateLimited}
            className={`mt-4 font-semibold px-4 py-2 rounded ${
              loading || rateLimited
                ? "bg-orange/20 cursor-not-allowed"
                : "bg-orange text-white hover:bg-orange/80 transition-colors duration-200"
            }`}
          >
            Create Recipe
          </button>
        </div>

        <div className="col-span-6 md:col-span-12 text-center">
          {loading && !rateLimited && (
            <div className="animate-pulse mt-4 text-orange-500 font-semibold">
              Generating meal...
            </div>
          )}

          {error && (
            <div className="mb-4 text-red-600 font-semibold ">{error}</div>
          )}
        </div>
      </div>
      <div className="mt-10">
        <MealSuggestion suggestion={suggestion} />
      </div>
    </div>
  );
}

export default MealBuilder;
