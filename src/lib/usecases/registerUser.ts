import bcrypt from "bcryptjs";
import { mongoUserRepository } from "@/lib/gateways/mongoUserRepository";

export async function registerUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const exists = await mongoUserRepository.findByEmail(email);
  if (exists) throw new Error("User already exists with this email");

  const hashed = await bcrypt.hash(password, 10);
  const user = await mongoUserRepository.create({ email, password: hashed });

  return { id: user.id, email: user.email };
}
