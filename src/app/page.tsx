"use client";

import Image from "next/image";
import Link from "next/link";

function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 text-gray-800">
      <nav className="w-full flex justify-center bg-white shadow">
        <div className="w-full max-w-6xl flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/recipelogo.png"
              width={80}
              height={80}
              alt="RecipeAid Logo"
            />
            <span className="text-4xl font-bold">RecipeAid</span>
          </div>
          <div className="hidden md:flex gap-6 text-xl font-medium">
            <a href="/mealbuilder" className="hover:text-green-600">
              Try App
            </a>
            <a
              href="https://github.com/bobbyjayy/recipeaid"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600"
            >
              Github
            </a>
            <Link
              href="/login"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 max-w-6xl mx-auto gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            AI-Powered Recipes from Your Ingredients
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Just tell us what's in your kitchen - We will turn it into a
            delicious meal using AI
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/mealbuilder"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg transition"
            >
              Try It Now
            </Link>
            <a
              href="https://github.com/bobbyjayy/recipeaid"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 hover:border-gray-500 text-gray-800 px-6 py-3 rounded-xl text-lg transition"
            >
              View on Github
            </a>
          </div>
        </div>

        {/* Demo */}
        <div>
          <Image
            src="/recipelogo.png"
            width={300}
            height={300}
            alt="RecipeAid Logo"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default Homepage;
