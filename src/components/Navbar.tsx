"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const hamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <div className="bg-cream shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center text-xl font-bold">
        <Image
          src="/recipelogo.png"
          height={80}
          width={80}
          alt="recipeaid logo"
          className="w-10 h-10 mr-2"
        />
        RecipeAid
      </Link>

      {/* Mobile Menu Button */}
      <div className="flex sm:hidden">
        <button
          onClick={hamburgerMenu}
          aria-expanded={isOpen}
          className=" group h-9 w-13   flex flex-col justify-center items-center gap-1.5"
        >
          <span
            className={`${
              isOpen
                ? "h-1 w-6 rounded-full bg-black transition rotate-45 translate-y-2.5"
                : "h-1 w-6 rounded-full bg-black transition"
            }`}
          ></span>
          <span
            className={`${
              isOpen
                ? "scale-x-0 transition h-1 w-6 rounded-full bg-black"
                : "h-1 w-6 rounded-full bg-black transition"
            }`}
          ></span>
          <span
            className={`${
              isOpen
                ? "h-1 w-6 rounded-full bg-black transition -rotate-45 -translate-y-2.5"
                : "h-1 w-6 rounded-full bg-black transition"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full flex flex-col items-center gap-4 bg-white py-4 shadow-md sm:hidden z-50 transition-all duration-300">
          <Link
            href="/mealbuilder"
            className=" text-gray-700 hover:text-lightyellow"
          >
            Meal Builder
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className=" text-white bg-orange px-3 py-1 rounded hover:bg-orange/80"
            >
              Login
            </Link>
          )}
        </div>
      )}

      <div className="hidden sm:flex items-center gap-4">
        <Link
          href="/mealbuilder"
          className=" text-gray-700 hover:border-b-2 hover:border-lightyellow"
        >
          Get Recipes
        </Link>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-orange text-white px-3 py-1 rounded hover:bg-orange/80"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
