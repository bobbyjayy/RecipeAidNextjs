"use client";

import Image from "next/image";
import Link from "next/link";

function Homepage() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 ">
        <Image
          src="/background.jpg"
          alt="Background Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <nav className="relative w-full ">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 ">
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
              className="bg-green-400 hover:bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto px-6 py-20 gap-10 items-center">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Cook Smarter with <span className="text-green-600">RecipeAid</span>
          </h1>
          <p className="text-lg text-gray-800  mb-6">
            Just type in what is in your kitchen - we will turn it into a tasty,
            AI-powered meal idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
              className="border border-gray-400 hover:border-gray-600 text-gray-800 px-6 py-3 rounded-xl text-lg transition"
            >
              View on Github
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex justify-center">
          <Image
            src="/sideimage.png"
            width={400}
            height={400}
            alt="RecipeAid Logo"
            className="w-64 md:w-80 lg:w-[400px] xl:w-[500px] rounded-full drop-shadow-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Homepage;
