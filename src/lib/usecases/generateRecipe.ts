import { OpenAIGateway } from "@/interfaces/openaiGateway";
import { Meal } from "@/entities/Recipe";

export async function generateRecipe(
  ingredients: string[],
  cuisine: string,
  servings: number,
  mealTime: string,
  openai: OpenAIGateway
): Promise<Meal> {
  const list = ingredients.map((i) => `- ${i}`).join("\n");
  const prompt = `
You are a professional chef trained in AI-assisted meal planning.
Given these ingredients (feel free to assume common pantry items like oil, salt, pepper):
${list}

Cuisine: ${cuisine}
Servings: ${servings}
Meal time: ${mealTime}

Suggest a complete three-course meal (appetizer, main, side dish). 
For each ingredient, include a realistic quantity (e.g. "2 tbsp soy sauce", "150g chicken breast").
Output a JSON array of objects with keys:
  - course (string: "Appetizer"/"Main"/"Side Dish")
  - title (string)
  - ingredients (string[] with quantities)
  - steps (string[])

  Respond ONLY with the JSON array. Do NOT include any Markdown formatting, asterisks, or code blocks. Do not use * or ** for emphasis.
  `;

  const text = await openai.getMealSuggestion(prompt);
  // console.log("AI raw response:", text);

  // Remove Markdown code block if present
  // const cleaned = text.replace(/```json|```|\*\*|\*/g, "").trim();

  let meal: Meal;
  try {
    meal = JSON.parse(text);
  } catch {
    throw new Error("Invalid AI response format.");
  }
  return meal;
}
