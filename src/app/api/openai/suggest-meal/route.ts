import { NextRequest, NextResponse } from "next/server";
import { generateRecipe } from "@/lib/usecases/generateRecipe";
import { openaiGateway } from "@/lib/gateways/openaiGateway";
import { limitGuest } from "@/lib/guestLimiter";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unkown";

    if (!limitGuest(ip)) {
      return NextResponse.json(
        { error: "Guest limit reached. Please log in." },
        { status: 429 }
      );
    }

    const { ingredients, cuisine, servings, mealTime } = await req.json();

    if (!ingredients?.length) {
      return NextResponse.json(
        { error: "No ingredients provided." },
        { status: 400 }
      );
    }

    const meal = await generateRecipe(
      ingredients,
      cuisine,
      servings,
      mealTime,
      openaiGateway
    );

    return NextResponse.json(meal, { status: 200 });
  } catch (e: unknown) {
    let message = "Unknown error";
    if (e instanceof Error) {
      message = e.message;
    }
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
