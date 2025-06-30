import UserModel from "@/models/UserModel";
import { User } from "@/entities/User";
import { Types } from "mongoose";

export const mongoUserRepository = {
  async findByEmail(email: string): Promise<User | null> {
    const result = await UserModel.findOne({ email }).lean<{
      _id: Types.ObjectId;
      email: string;
      password: string;
    }>();
    if (!result) return null;
    return {
      id: result._id.toString(),
      email: result.email,
      password: result.password,
    };
  },
  async create(user: { email: string; password: string }): Promise<User> {
    const created = await UserModel.create(user);
    return {
      id: created._id.toString(),
      email: created.email,
      password: created.password,
    };
  },
};
