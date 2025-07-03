"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["600", "700"] });

export default function Homepage() {
  return (
    <section className="min-h-screen bg-cream ">
      {/* Navigation */}
      <nav className=" flex max-w-7xl items-center justify-center md:justify-between mx-auto px-6 md:px-10 py-4 z-10">
        <div className="flex  items-center gap-2">
          <Image
            src="/recipelogo.png"
            width={60}
            height={60}
            alt="RecipeAid Logo"
          />
          <span className="text-2xl font-bold">RecipeAid</span>
        </div>
        <div className="hidden  md:flex justify-end gap-3 text-lg">
          <Link
            href="/login"
            className="hover:border-lightyellow hover:border-b-2 px-3 py-2"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-orange hover:bg-orange/80 text-white px-4  py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Grid */}
      <div className="grid grid-cols-12  max-w-7xl mx-auto items-center pt-10 px-6">
        {/* Text Section */}
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center gap-6">
          <h1 className="text-4xl md:text-5xl  font-extrabold leading-tight text-gray-900">
            AI-Powered Recipe Generator
          </h1>
          <p className={`${inter.className} text-2xl text-gray-600`}>
            Generate recipes based on available ingredients with ease.
          </p>
          <Link
            href="/mealbuilder"
            className="bg-orange hover:bg-orange/80 text-white px-6 py-3 rounded-xl text-2xl transition w-fit"
          >
            Try It Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="col-span-12 md:col-span-7 flex justify-center md:justify-end py-10 md:py-20">
          <Image
            src="/chefai.png"
            width={600}
            height={600}
            alt="AI Chef Illustration"
            className="w-64 md:w-80 lg:w-[32rem] rounded-full drop-shadow-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
