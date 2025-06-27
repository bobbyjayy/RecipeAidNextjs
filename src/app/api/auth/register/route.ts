import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "@/lib/usecases/registerUser";
import { connectDB } from "@/lib/db";

export async function POST(req: NextRequest) {
  await connectDB();

  const body = await req.json();

  try {
    const user = await registerUser(body);
    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 400 }
    );
  }
}
