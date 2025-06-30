import mongoose, { Connection } from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}

type MongooseGlobal = {
  mongoose?: {
    conn: Connection | null;
  };
};

const globalWithMongoose = global as typeof globalThis & MongooseGlobal;

const cached = globalWithMongoose.mongoose || { conn: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  await mongoose.connect(MONGO_URI as string);
  cached.conn = mongoose.connection;
  globalWithMongoose.mongoose = cached;

  console.log("MongoDB connected");
  return cached.conn;
}
