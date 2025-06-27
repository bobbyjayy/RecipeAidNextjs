"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="flex items-center text-xl font-bold">
        <Image
          src="/recipelogo.png"
          height={80}
          width={80}
          alt="recipeaid logo"
          className="w-11 h-11 mr-2"
        />
        RecipeAid
      </Link>

      <div className="flex items-center gap-4">
        <Link
          href="/mealbuilder"
          className="text-gray-700 hover:text-indigo-600"
        >
          Meal Builder
        </Link>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
