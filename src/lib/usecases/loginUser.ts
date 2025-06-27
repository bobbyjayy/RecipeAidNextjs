import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { mongoUserRepository } from "@/lib/gateways/mongoUserRepository";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

export async function loginUser(
  email: string,
  password: string
): Promise<string> {
  const user = await mongoUserRepository.findByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  // create jwt token
  const token = jwt.sign(
    { userId: user.id.toString(), email: user.email },
    JWT_SECRET as string,
    {
      expiresIn: "1d",
    }
  );

  return token;
}
