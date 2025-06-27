import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/lib/usecases/loginUser";
import { connectDB } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    const token = await loginUser(email, password);
    return NextResponse.json({ token });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 401 });
  }
}
