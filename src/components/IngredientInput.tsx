// import { AnimatePresence } from "motion/react";
import IngredientsTag from "./IngredientsTag";

export default function IngredientInput({
  ingredients,
  input,
  setInput,
  addIngredient,
  removeIngredient,
  updateIngredient,
  handleKeyDown,
}: {
  ingredients: string[];
  input: string;
  setInput: (v: string) => void;
  addIngredient: () => void;
  removeIngredient: (ing: string) => void;
  updateIngredient: (oldIng: string, newIng: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex flex-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add an ingredient"
          className="border rounded-1 px-3 py-2 flex-grow focus:outline-none"
        />
        <button
          onClick={addIngredient}
          className="hidden md:inline bg-gray-200 hover:bg-gray-300 text-gray-800  px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap mb-4 mt-4">
        {/* <AnimatePresence> */}
        {ingredients.map((ing) => (
          <IngredientsTag
            key={ing}
            ingredient={ing}
            onRemove={removeIngredient}
            onUpdate={updateIngredient}
          />
        ))}
        {/* </AnimatePresence> */}
      </div>
    </div>
  );
}
